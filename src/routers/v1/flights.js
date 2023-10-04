const express =require('express');

const router =express.Router();

const { Flightmiddleware }=require('../../middlewares');

const { createFlight, deleteFlight, getAllFlights, getFlight, updateFlight,getAllFlightsByfliters }=require('../../controllers/flightcontroller');

router.post('/',Flightmiddleware.compare,Flightmiddleware.sourceDestinationValidator,createFlight);

router.delete('/:id',deleteFlight);

router.get('/filter',getAllFlightsByfliters);

router.get('/',getAllFlights);

router.get('/:id',getFlight);

router.patch('/',updateFlight);

module.exports =router;