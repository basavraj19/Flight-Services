const express = require('express');

const app = express();

const { serverconfig, logger } = require('./config');

const router = require('./routers');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(serverconfig.PORT, async () => {
    logger.info(`Successfully stated the server on PORT ${serverconfig.PORT}`);
    console.log(`Successfully stated the server on PORT ${serverconfig.PORT}`);
});

