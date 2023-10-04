const CrudRepository =require('./Crud-repository');

const {Sequelize} =require('sequelize');

const { flights , Airoplanes ,Airports, city} =require('../models');

class FlightRepository extends CrudRepository{
    constructor(){
        super(flights);
    }
   
    async getAllflightsByFliters(filter,sort)
    {
        const response =await flights.findAll({
            where :filter,
            order :sort,
            // It is used to make joins i.i by using include sequelize makes joins on models 
            // in array each element is one join
            include :[
            { 
                // here join is done on primary keys
               model : Airoplanes,
               as : 'AiroplaneDetails',
               required :true // this is to exectue inner join rather than outer join for opetimation and for association models only
            },
            {
                model : Airports,
                require :true,
                as :'destinationAirport',// Important as two key should not be same in a json ex sourceAirport & destinationAiropt =Airport 
                // on is bescuse join is done on non primary key of both the tables
                on : {
                    col1 : Sequelize.where(Sequelize.col('Flights.destinationAirportId'),'=',Sequelize.col('destinationAirport.code'))
                },
                include :{
                    //This is another nested join
                    model : city,
                    required :true
                }
            },
            {
                model : Airports,
                require :true,
                as :'sourceAirport',
                // on is bescuse join is done on non primary key of both the tables
                on : {
                    col1 : Sequelize.where(Sequelize.col('Flights.sourceAirportId'),'=',Sequelize.col('sourceAirport.code'))
                },
                include :{
                    //This is another nested join
                    model : city,
                    required :true
                }
            }
            
        ]
        });
        return response;
    }
}

module.exports =FlightRepository;