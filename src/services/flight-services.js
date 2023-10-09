const { FlightRepository } =require('../repositories');

const {Op} =require('sequelize');

const { StatusCodes } =require('http-status-codes');

const { AppError }=require('../utils');

const Flights =new FlightRepository();

async function createFlight(data)
{
     try {
        const airport =await Flights.create(data);
        return airport;
     } catch (error) {
        if(error.name == 'SequelizeValidationError')
        {
          let explaintion =[];
          error.errors.forEach(element => {
             explaintion.push(element.message);
          });
          throw new AppError(explaintion,StatusCodes.BAD_REQUEST);
        }
        console.log(error);
        throw new AppError('Somthing went wrong while creating flight',StatusCodes.INTERNAL_SERVER_ERROR);
     } 
}
async function deleteFlight(id)
{
    try {
        const respones =await Flights.delete(id);
         return respones;
    } catch (error) {
         if(error.statuscode == StatusCodes.NOT_FOUND)
         {
            throw new AppError("id not found",StatusCodes.NOT_FOUND);
         }
         throw new AppError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights()
{
    try {
        const respones = await Flights.getAll();
        return respones;
    } catch (error) {
        if(error.statuscode==StatusCodes.NOT_FOUND)
        {
            throw new AppError("The resource not found",StatusCodes.NOT_FOUND); 
        }
        throw new AppError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getFlight(id)
{
    try {
        const respones = await Flights.get(id);
        return respones;
    } catch (error) {
        if(error.statuscode==StatusCodes.NOT_FOUND)
        {
            throw new AppError("Resource not found",StatusCodes.NOT_FOUND); 
        }
        throw new AppError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateFlight(id,data)
{
   try {
     const respones =await Flights.update(id,data);
     return respones;
   } catch (error) {
     if(error.statuscode == StatusCodes.NOT_FOUND)
     {
        throw new AppError("Resource not found",StatusCodes.NOT_FOUND); 
     }
     throw new AppError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
   }
}

async function getAllFlightsByfliters(query){
    let customFliter ={};
    let endTripTime = " 23:59:00";
    let sortFilter =[];
    if(query.trip)
    {
        [sourceAirportId,destinationAirportId]=query.trip.split("-");
        customFliter.sourceAirportId=sourceAirportId;
        customFliter.destinationAirportId=destinationAirportId;
    }

    if(query.price)
    {
        [minPrice,maxPrice] =query.price.split("-");
        console.log(maxPrice,minPrice);
        customFliter.price ={
           [Op.between]:[minPrice,((maxPrice==undefined) ? 20000:maxPrice)]
        }
    }
    if(query.capacity)
    {
       customFliter.capacity ={
        [Op.gt]: query.capacity
       }
    }
    if(query.tripDate)
    {
        console.log(query.tripDate);
        console.log(query.tripDate + endTripTime);
       customFliter.departureTime ={
         [Op.between] : [query.tripDate ,query.tripDate + endTripTime]
       }
    }
    if(query.sort)
    {
        const params =query.sort.split(',');
        const sortparams =params.map((params)=>params.split('_'));
        sortFilter =sortparams;
    }
     try {
        const flights =await Flights.getAllflightsByFliters(customFliter,sortFilter);
        return  flights;
     } catch (error) {
        console.log(error);
        throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
     }
}

async function updateSeats(data)
{
    try {
       const response =await Flights.updateRamainingSeats(data.flightId,data.seats,data.desc);
       return response; 
    } catch (error) {
        console.log(error);
        if(error.statuscode==StatusCodes.NOT_FOUND)
        {
            throw new AppError("Resource not found",StatusCodes.NOT_FOUND); 
        }
        throw new AppError('Somthing went wrong while updating seats in flights',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports ={
    createFlight,
    deleteFlight,
    getAllFlights,
    getFlight,
    updateFlight,
    getAllFlightsByfliters,
    updateSeats
}
