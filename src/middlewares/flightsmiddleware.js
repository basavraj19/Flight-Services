const { Errorrespones }=require('../utils/comman');

const {AppError}=require('../utils');

const { StatusCodes } = require('http-status-codes');

const { compareTime }=require('../utils/CommanHelper/datetimehelper');

function compare(req,res,next)
{
   if(compareTime)
   {
     Errorrespones.message ='Departure time should be greater than arrival time';
     Errorrespones.error =new AppError('Incorrect DeparturTime',StatusCodes.BAD_REQUEST);
     return res.json(Errorrespones);
   }
   next();
}

function sourceDestinationValidator(req,res,next)
{
   if(req.body.sourceAirportId==req.body.destinationAirportId)
   {
    Errorrespones.message ='Source and Destination should be different';
     Errorrespones.error =new AppError('Invalid Input',StatusCodes.BAD_REQUEST);
     return res.json(Errorrespones);
   }
   next();
}

module.exports={
    compare,
    sourceDestinationValidator
}