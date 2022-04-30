const express = require('express');
const database = require('./database/db');
const app = express();

const port = 3000;
database()

app.listen(port, () =>
    console.log('Example app listening on port 3000!'),
);

