const express=require('express');

const router=express.Router();

const {createAiroplane,deleteAiroplane,getAllAiroplanes,getAiroplane,updateData}=require('../../controllers/airoplane-controller');

const { Airoplanemiddleware} =require('../../middlewares');

router.post('/',Airoplanemiddleware.Validator,createAiroplane);

router.delete('/:id',deleteAiroplane);

router.get('/',getAllAiroplanes);

router.get('/:id',getAiroplane);

router.patch('/',updateData);

module.exports =router;