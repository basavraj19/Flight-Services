const CrudRepository =require('./Crud-repository');

const {Airports} =require('../models');

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airports);
    }
}

module.exports =AirportRepository;