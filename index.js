const express = require('express');
const db = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 7733;

db.connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log('Connected to the DB'))
    .catch(err => console.log(err));

db.Promise = global.Promise;

app.use((req, res, next) => {
    // allow code from any origin to access a resource
    res.header("Access-Control-Allow-Origin", "*");
    //response header that indicates which HTTP headers can be used during the actual request
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());

//???
app.use('/api', routes);


app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});