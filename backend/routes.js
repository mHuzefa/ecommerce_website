const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const shopRouter = require('./routes/ShopRoutes')
const locationRouter = require('./routes/LocationRoutes')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/locations', locationRouter)
app.use('/shops', shopRouter)

module.exports = app;
