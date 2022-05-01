const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const createTables = require("./models/createTables");
const routers = require('./modules/user.router');
const app = express();

const port = 3000;
createTables();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/v1/user', routers);

app.listen(port, () =>
    console.log('Example app listening on port 3000!'),
);

module.exports = app;
