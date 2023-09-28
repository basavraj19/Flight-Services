const { StatusCodes } = require('http-status-codes');

const {CityRepository} =require('../repositories');

const { AppError } = require('../utils');

const City =new CityRepository();

async function createCity(data)
{
    try {
        const city = await City.create(data);
        return city; 
    } catch (error) {
        throw new AppError('City cannot be created',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function deleteCity(id)
{
    try {
        const city = await City.delete(id);
        return city; 
    } catch (error) {
        if(error.statuscode == StatusCodes.NOT_FOUND)
        {
            throw new AppError('Resource not found',StatusCodes.NOT_FOUND);    
        }
        throw new AppError('City cannot be deleted',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllCities()
{
    try {
        const city = await City.getAll();
        return city; 
    } catch (error) {
        if(error.statuscode == StatusCodes.NOT_FOUND)
        {
            throw new AppError('Resource not found',StatusCodes.NOT_FOUND);    
        }
        throw new AppError('Something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCity(id)
{
    try {
        const city = await City.get(id);
        return city; 
    } catch (error) {
        if(error.statuscode == StatusCodes.NOT_FOUND)
        {
            throw new AppError('Resource not found',StatusCodes.NOT_FOUND);    
        }
        throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(id,data)
{
   try {
    const respones =await City.update(id,data);
    return respones;
   } catch (error) {
    if(error.statuscode == StatusCodes.NOT_FOUND)
    {
        throw new AppError('Resource not found',StatusCodes.NOT_FOUND);    
    }
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
   }
}
module.exports ={
    createCity,
    deleteCity,
    getAllCities,
    getCity,
    updateCity
}