const {AiroplaneRepositroy}=require('../repositories');

const { AppError } = require('../utils');

const {StatusCodes} =require('http-status-codes');

const Airoplane =new AiroplaneRepositroy();

async function createAiroplane(data)
{
    try {
         const respones =await Airoplane.create(data);
         return respones;
    } catch (error) {
       if(error.name == 'SequelizeValidationError')
       {
         let explaintion =[];
         error.errors.forEach(element => {
            explaintion.push(element.message);
         });
         throw new AppError(explaintion,StatusCodes.BAD_REQUEST);
       }
        throw new AppError("Model is not created",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAiroplane(id)
{
    try {
        const respones =await Airoplane.delete(id);
         return respones;
    } catch (error) {
         if(error.statuscode == StatusCodes.NOT_FOUND)
         {
            throw new AppError("id not found",StatusCodes.NOT_FOUND);
         }
         throw new AppError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllAiroplanes()
{
    try {
        const respones = await Airoplane.getAll();
        return respones;
    } catch (error) {
        if(error.statuscode==StatusCodes.NOT_FOUND)
        {
            throw new AppError("The resource not found",StatusCodes.NOT_FOUND); 
        }
        throw new AppError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAiroplane(id)
{
    try {
        const respones = await Airoplane.get(id);
        return respones;
    } catch (error) {
        if(error.statuscode==StatusCodes.NOT_FOUND)
        {
            throw new AppError("Resource not found",StatusCodes.NOT_FOUND); 
        }
        throw new AppError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function update(id,data)
{
   try {
    console.log(data);
     const respones =await Airoplane.update(id,data);
     return respones;
   } catch (error) {
     if(error.statuscode == StatusCodes.NOT_FOUND)
     {
        throw new AppError("Resource not found",StatusCodes.NOT_FOUND); 
     }
     console.log(error);
     throw new AppError("Something went wrong",StatusCodes.INTERNAL_SERVER_ERROR);
   }
}
module.exports={
    createAiroplane,
    deleteAiroplane,
    getAllAiroplanes,
    getAiroplane,
    update
}
