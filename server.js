const express =require('express');
const bodyParser= require('body-parser');
const server=express();
const mongoose= require('mongoose')

const adminRoutes=require('./routes/admin-routes')
const orderRoutes=require('./routes/order-routes');
const { restart } = require('nodemon');


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

server.use('/admin',adminRoutes);
server.use('/order',orderRoutes);
server.use('/confirmation',orderRoutes);
server.use((error, req, res, next)=>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message:error.message} || "An unknown error occurred!")
})

mongoose
    .connect('mongodb://marianabuhazi:K7cjS1MgUzhjrzQM@cluster1-shard-00-00.ojcwn.mongodb.net:27017,cluster1-shard-00-01.ojcwn.mongodb.net:27017,cluster1-shard-00-02.ojcwn.mongodb.net:27017/orders?ssl=true&replicaSet=atlas-hm7eer-shard-0&authSource=admin&retryWrites=true&w=majority')
    .then(()=>{
        server.listen(5000)
        console.log("Server listening successfully!")
    })
    .catch(err => {
        console.log(err)
    });
