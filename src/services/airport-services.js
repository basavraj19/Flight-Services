const { AirportRepository } =require('../repositories');

const { StatusCodes } =require('http-status-codes');

const { AppError }=require('../utils');

const Airports =new AirportRepository();

async function createAirports(data)
{
     try {
        const airport =await Airports.create(data);
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
        throw new AppError('Somthing went wrong while createing an Airport',StatusCodes.INTERNAL_SERVER_ERROR);
     } 
}
async function deleteAirport(id)
{
    try {
        const respones =await Airports.delete(id);
         return respones;
    } catch (error) {
         if(error.statuscode == StatusCodes.NOT_FOUND)
         {
            throw new AppError("id not found",StatusCodes.NOT_FOUND);
         }
         throw new AppError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllAirports()
{
    try {
        const respones = await Airports.getAll();
        return respones;
    } catch (error) {
        if(error.statuscode==StatusCodes.NOT_FOUND)
        {
            throw new AppError("The resource not found",StatusCodes.NOT_FOUND); 
        }
        throw new AppError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id)
{
    try {
        const respones = await Airports.get(id);
        return respones;
    } catch (error) {
        if(error.statuscode==StatusCodes.NOT_FOUND)
        {
            throw new AppError("Resource not found",StatusCodes.NOT_FOUND); 
        }
        throw new AppError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function updateAirport(id,data)
{
   try {
     const respones =await Airports.update(id,data);
     return respones;
   } catch (error) {
     if(error.statuscode == StatusCodes.NOT_FOUND)
     {
        throw new AppError("Resource not found",StatusCodes.NOT_FOUND); 
     }
     throw new AppError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
   }
}
module.exports ={
    createAirports,
    deleteAirport,
    getAirport,
    getAllAirports,
    updateAirport
}