const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


// Express Route
const employeeRouter = require('./routes/employee.route')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors())

app.use('/employee', employeeRouter)

module.exports = app;