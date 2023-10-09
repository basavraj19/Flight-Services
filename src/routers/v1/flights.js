const express =require('express');

const router =express.Router();

const { Flightmiddleware }=require('../../middlewares');

const { createFlight, deleteFlight, getAllFlights, getFlight, updateFlight,getAllFlightsByfliters, updateSeat }=require('../../controllers/flightcontroller');

router.post('/',Flightmiddleware.compare,Flightmiddleware.sourceDestinationValidator,createFlight);

router.delete('/:id',deleteFlight);

router.get('/filter',getAllFlightsByfliters);

router.get('/',getAllFlights);

router.get('/:id',getFlight);

router.patch('/',updateFlight);

router.patch('/:id',updateSeat);

module.exports =router;