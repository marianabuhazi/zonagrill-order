const express =require('express');
const bodyParser= require('body-parser');
const server=express();

const adminRoutes=require('./routes/admin-routes')
const orderRoutes=require('./routes/order-routes')


server.use(bodyParser.json());
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

server.listen(5000)