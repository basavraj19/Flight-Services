const CrudRepository =require('./Crud-repository');

const {Airoplanes} = require('../models');

class Airoplanerepository extends CrudRepository{
   constructor(){
    super(Airoplanes);
   }
}

module.exports =Airoplanerepository;