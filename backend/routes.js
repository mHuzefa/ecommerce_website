const express = require('express')
const app = express()
const shopRouter = require('./routes/ShopRoutes')
const locationRouter = require('./routes/LocationRoutes')

app.use('/', (req, res) => {
    res.send({ versions: 1.0})
})
app.use('/locations', locationRouter)
app.use('/shops', shopRouter)

module.exports = app;
