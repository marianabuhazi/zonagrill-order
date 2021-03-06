const express =require('express');
const bodyParser= require('body-parser');
const server=express();
const mongoose= require('mongoose')
const path = require("path")
require('dotenv').config();

const port = process.env.PORT || 8000;


const adminRoutes=require('./routes/admin-routes')
const orderRoutes=require('./routes/order-routes');


server.use(bodyParser.json());

server.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    next();
})

server.use(express.static(path.join(__dirname, "client", "build")))

server.use('/api/admin',adminRoutes);
server.use('/api/order',orderRoutes);
server.use('/api/confirmation',orderRoutes);
server.use((error, req, res, next)=>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message:error.message} || "An unknown error occurred!")
})

server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

mongoose
    .connect(process.env.URI, { useNewUrlParser: true })
    .then(()=>{
        server.listen(port)
        console.log("Server listening successfully!")
    })
    .catch(err => {
        console.log(err)
    });
