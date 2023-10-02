const express = require('express');

const app = express();

const { serverconfig, logger } = require('./config');

const { Airports, city,flights } = require('./models');

const router = require('./routers');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(serverconfig.PORT, async () => {
    logger.info(`Successfully stated the server on PORT ${serverconfig.PORT}`);
    console.log(`Successfully stated the server on PORT ${serverconfig.PORT}`);
    // const cities =await city.findByPk();
    // const cities =await city.findAll();
    // console.log(cities);

    //  const respone =await Airports.create({name : 'Solapur Airport',code :'SLR',cityId :1});
    //  console.log(respone);

    // const pune =await city.findByPk(2);
    // console.log(pune);
    // const airportInPune =await pune.createAirport({name : 'Pune International Airport',code :'PNE',cityId :2});
    // console.log(airportInPune);

    //  const airportInPune =await Airports.findByPk(2);
    //  const pune =await city.findByPk(2);
    //  const respone =await pune.removeAirport(airportInPune);
    //  console.log(respone);

    // await city.destroy({
    //     where:
    //         { id: 2 }
    // });

    // const mumbai =await city.findByPk(3);
    // const respone =await mumbai.createAirport({name : 'Mumbai International Airport',code :'MBI',cityId :3})

    // const bengaluru =await city.findByPk(6);
    // await bengaluru.createAirport({name : 'Bengaluru International Airport',code :'BLR',cityId :6});
    // await bengaluru.createAirport({name : 'Kampegoda International Airport',code :'KPD',cityId :6});
    //await city.destroy({where :{id :6}});

    const response=await flights.create({name :'Solapur-Pune flight',sourceAirport:'Solapur',destinationAirport: 'Pune'});
    console.log(response);
});

