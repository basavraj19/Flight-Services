const express =require('express');

const { createCity,deleteCity, getAllCities, getCity, updateCity } = require('../../controllers/city-controller');

const router =express.Router();

router.post('/',createCity);

router.delete('/:id',deleteCity);

router.get('/',getAllCities);

router.get('/:id',getCity);

router.patch('/:id',updateCity);

module.exports =router;