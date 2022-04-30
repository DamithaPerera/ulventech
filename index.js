const express = require('express');
const createTables = require("./models/createTables");
const app = express();

const port = 3000;
createTables();

app.listen(port, () =>
    console.log('Example app listening on port 3000!'),
);

