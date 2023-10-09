const { AirportService } = require('../services');

const { Successresponse, Errorrespones } = require('../utils/common');

const { StatusCodes } = require('http-status-codes');

async function createAirport(req,res)
{
    try {
        const response = await AirportService.createAirports({
           name :req.body.name,
           code :req.body.code,
           address :req.body.address,
           cityId :req.body.cityId
        });
        Successresponse.data =response;
        return res.status(StatusCodes.CREATED).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}

async function deleteAirport(req, res) {
    try {
        const respones = await AirportService.deleteAirport(req.params.id);
        Successresponse.data = respones;
        return res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}

async function getAllAirports(req, res) {
    try {
        const respones = await AirportService.getAllAirports();
        Successresponse.data = respones;
        return res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}
async function getAirport(req, res) {
    try {
        const respones = await AirportService.getAirport(req.params.id);
        Successresponse.data = respones;
        return res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}

async function updateAirport(req, res) {
    try {

        const respones = await AirportService.updateAirport(req.body.id,{
            code : req.body.code});
        Successresponse.data = respones;
        return res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}

module.exports ={
    createAirport,
    deleteAirport,
    getAllAirports,
    getAirport,
    updateAirport
}