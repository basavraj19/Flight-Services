const express=require('express');

const router=express.Router();

const airoplanerouter =require('./airoplane');

const cityrouter =require('./city');

const Airportrouter =require('./airport');

const Flightrouter =require('./flights');

router.use('/airoplane',airoplanerouter);

router.use('/city',cityrouter);

router.use('/airport',Airportrouter);

router.use('/flight',Flightrouter);

module.exports=router;