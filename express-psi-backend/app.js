const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// sprint 1
const taxisRouter = require('./routes/taxis');
const driversRouter = require('./routes/drivers');
const initRouter = require('./routes/init');
const pricesRouter = require('./routes/prices');

// sprint 2
const shiftsRouter = require('./routes/shifts');
const taxiOrdersRouter = require('./routes/taxiOrders');
const ridesRouter = require('./routes/rides');

// sprint 3
const reportsRouter = require('./routes/reports');

const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://psi09:psi09@cluster0.4ljcrkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// sprint 1
app.use('/taxis', taxisRouter);
app.use('/drivers', driversRouter);
app.use('/init', initRouter);
app.use('/prices', pricesRouter);

// sprint 2
app.use('/shifts', shiftsRouter);
app.use('/taxiOrders', taxiOrdersRouter);
app.use('/rides', ridesRouter);

// sprint 3
app.use('/reports', reportsRouter);

module.exports = app;
