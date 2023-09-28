const CrudRepository = require("./Crud-repository");

const {city} =require('../models');

class Cityrepository extends CrudRepository{
    constructor(){
        super(city);
    }
}

module.exports =Cityrepository;