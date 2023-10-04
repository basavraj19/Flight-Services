const express =require('express');

const router =express.Router();

const {createAirport,deleteAirport,getAirport,getAllAirports,updateAirport}=require('../../controllers/airport-controller');

router.post('/',createAirport);

router.delete('/:id',deleteAirport);

router.get('/',getAllAirports);

router.get('/:id',getAirport);

router.patch('/',updateAirport);

module.exports =router;