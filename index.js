    const express       = require('express');
    const app           = express();
    const bodyParser    = require('body-parser');
    const PORT          = 3001
    const RouteUser     = require('./routes/User');

    app.use(bodyParser.json());
    app.use('/', RouteUser)

    app.listen(PORT, (req,res) => {
        console.log(`server run port ${PORT}`)
    })