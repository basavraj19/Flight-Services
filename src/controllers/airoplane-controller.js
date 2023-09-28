const { AiroplaneService } = require('../services');

const { Successresponse, Errorrespones } = require('../utils/comman');

const { StatusCodes } = require('http-status-codes');

async function createAiroplane(req, res) {
    try {
        const respones = await AiroplaneService.createAiroplane({
            ModelNo: req.body.ModelNo,
            capacity: req.body.capacity
        });
        Successresponse.data = respones;
        return res.status(StatusCodes.CREATED).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}

async function deleteAiroplane(req, res) {
    try {
        const respones = await AiroplaneService.deleteAiroplane(req.params.id);
        Successresponse.data = respones;
        return res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}

async function getAllAiroplanes(req, res) {
    try {
        const respones = await AiroplaneService.getAllAiroplanes();
        Successresponse.data = respones;
        return res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}
async function getAiroplane(req, res) {
    try {
        const respones = await AiroplaneService.getAiroplane(req.params.id);
        Successresponse.data = respones;
        return res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}

async function updateData(req, res) {
    try {
       console.log(req.body.capacity)
        const respones = await AiroplaneService.update(req.body.id,{
            capacity : req.body.capacity});
        Successresponse.data = respones;
        return res.status(StatusCodes.OK).json(Successresponse);
    } catch (error) {
        Errorrespones.error = error;
        return res.status(error.statuscode).json(Errorrespones);
    }
}
module.exports = {
    createAiroplane,
    deleteAiroplane,
    getAllAiroplanes,
    getAiroplane,
    updateData
}