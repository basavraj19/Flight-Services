
const { FlightServices } = require('../services');

const { Successresponse, Errorrespones } = require('../utils/comman');

const { StatusCodes } = require('http-status-codes');

async function createFlight(req,res)
{
    try {
        const response = await FlightServices.createFlight({
           name :req.body.name,
           airoplaneId :req.body.airoplaneId,
           arrivalTime :req.body.arrivalTime,
           departureTime :req.body.departureTime,
           sourceAirportId :req.body.sourceAirportId,
           destinationAirportId :req.body.destinationAirportId,
           capacity :req.body.capacity,
           price :req.body.price
        });
        Successresponse.data =response;
        return res.status(StatusCodes.CREATED).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}

async function deleteFlight(req, res) {
    try {
        const respones = await FlightServices.deleteFlight(req.params.id);
        Successresponse.data = respones;
        return res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}

async function getAllFlights(req, res) {
    try {
        const respones = await FlightServices.getAllFlights();
        Successresponse.data = respones;
        return res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}
async function getFlight(req, res) {
    try {
        const respones = await FlightServices.getFlight(req.params.id);
        Successresponse.data = respones;
        return res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}

async function updateFlight(req, res) {
    try {

        const respones = await FlightServices.updateFlight(req.body.id,{
            price : req.body.price});
        Successresponse.data = respones;
        return res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}


async function getAllFlightsByfliters(req,res)
{
    try {
        console.log(req.query);
        const response =await FlightServices.getAllFlightsByfliters(req.query);
        Successresponse.data = response;
        return res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}
module.exports ={
    createFlight,
    deleteFlight,
    getAllFlights,
    getFlight,
    updateFlight,
    getAllFlightsByfliters
}