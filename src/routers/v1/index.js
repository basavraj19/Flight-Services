const express=require('express');

const router=express.Router();

const airoplanerouter =require('./airoplane');

const cityrouter =require('./city');

router.use('/airoplane',airoplanerouter);

router.use('/city',cityrouter);

module.exports=router;