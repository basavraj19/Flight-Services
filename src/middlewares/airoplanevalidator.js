const AppError = require('../utils/error/AppError');

const {Errorrespones}=require('../utils/common');

const {StatusCodes} =require('http-status-codes');

async function Validator(req,res,next)
{
    if(!req.body.ModelNo){
        Errorrespones.message = "Model Number is not enternd";
        Errorrespones.error = new AppError('ModelNo not found Please enter the modelno',StatusCodes.BAD_REQUEST);
        return res.status(Errorrespones.error.statuscode).json(Errorrespones);
    }
    next();
}
module.exports ={
    Validator
}