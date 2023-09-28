const { StatusCodes } = require('http-status-codes');
const {CityService}=require('../services');
const { Successresponse, Errorrespones } = require('../utils/comman');

async function createCity(req,res)
{
     try {
        const respones =await CityService.createCity({
            name :req.body.name
        });
        Successresponse.data =respones;
        return res.status(StatusCodes.OK).json(Successresponse);
     } catch (error) {
        Errorrespones.error=error;
        return res.status(error.statuscode).json(Errorrespones);
     }
}

async function deleteCity(req,res)
{
    try {
        const respones =await CityService.deleteCity(req.params.id);
        Successresponse.data =respones;
        return res.status(StatusCodes.OK).json(Successresponse);
     } catch (error) {
        Errorrespones.error=error;
        return res.status(error.statuscode).json(Errorrespones);
     }
}

async function getAllCities(req,res)
{
    try {
        const respones =await CityService.getAllCities();
        Successresponse.data =respones;
        return res.status(StatusCodes.OK).json(Successresponse);
     } catch (error) {
        Errorrespones.error=error;
        return res.status(error.statuscode).json(Errorrespones);
     }
}

async function getCity(req,res)
{
    try {
        const respones =await CityService.getCity(req.params.id);
        Successresponse.data =respones;
        return res.status(StatusCodes.OK).json(Successresponse);
     } catch (error) {
        Errorrespones.error=error;
        return res.status(error.statuscode).json(Errorrespones);
     }
}

async function updateCity(req,res)
{
    try {
        const respones =await CityService.updateCity(req.params.id,{
            name : req.body.name
        });
        Successresponse.data =respones;
        return res.status(StatusCodes.OK).json(Successresponse);
     } catch (error) {
        Errorrespones.error=error;
        return res.status(error.statuscode).json(Errorrespones);
     }
}

module.exports ={
    createCity,
    deleteCity,
    getAllCities,
    getCity,
    updateCity
}