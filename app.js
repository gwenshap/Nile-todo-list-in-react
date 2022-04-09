const express = require("express");
const app = express();
const todoRoute =require('./routes/todoRoutes')
const errorMiddleware=require('./middleware/errors')

// Middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }));



// Connecnt routes
app.use("/api/v1", todoRoute);

// Middleware for error
app.use(errorMiddleware)

app.get('/', function (req, res) {
   
    res.status(200).send("Hello World");
    
 })
module.exports = app;