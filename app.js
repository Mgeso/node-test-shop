const morgan = require('morgan');
const mongoose = require('mongoose');
const express = require('express');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("connected to database"))
    .catch((error) => console.log(error));

const middleware = (app)=>{
app.use(morgan('dev'));
app.use(express.json());


// Routes which should handle requests
app.use('/orders', orderRoutes);

app.use('/products', productRoutes);
}

// app.use((req, res, next) => {
// const error = new error('Not found');
// error.status(404);
// next(error);
// });

// app.use((error, req, res, next) => {
// res.status(error.status || 500);
// res.json({
//     error: {
        //   message: error.message
// }
// });  
// });

module.exports= middleware;
