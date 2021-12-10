const HttpError=require('../models/http-err')
const {validationResult}=require('express-validator')
const Order = require('../models/order')
require('dotenv').config();

const DUMMY_USER={
    username:process.env.USERNAME,
    password:process.env.PASSWORD
}

//returns all ordered labeled as ready
const readyOrders= async(req,res,next)=>{
    let orders;
    try{
        orders= await Order.find({ready:'ready'})
    }
    catch (err){
        const error= new HttpError('There was an error getting ready orders',500);
        return next(error);
    }
    if(orders.length===0){
        const error= new HttpError('No ready orders found',404);
        return next(error);
    }
    res.json({orders:orders})
}

const pendingOrders= async (req,res,next)=>{
    let orders;
    try{
        orders= await Order.find({ready:'pending'})
    }
    catch (err){
        const error= new HttpError('There was an error getting pending orders',500);
        return next(error);
    }
    if(orders.length===0){
        const error= new HttpError('No pending orders found',404);
        return next(error);
    }
    res.json({orders:orders})
}

const deleteOrder= async (req,res,next)=>{
    const orderId= req.params.oid
    let order;
    try{
        order= await Order.findById(orderId);
    }
    catch (err){
        const error= new HttpError('There was an error finding the order',500);
        return next(error);
    }
    try{
        await order.remove();
    }
    catch(err){
        const error= new HttpError('There was an error deleting the order',500);
        return next(error);
    }
    res.json("Order successfully deleted")
}

const modifyOrder= async (req,res,next)=>{
    const orderId= req.params.oid;
    let orderToChange;
    try{
        orderToChange= await Order.findById(orderId);
    }
    catch (err){
        const error= new HttpError('There was an error finding the order',500);
        return next(error);
    }
    if(!orderToChange){
        const error= new HttpError('No order has been found',404);
        return next(error)
    }
    try{
        orderToChange.ready==="ready" ? orderToChange.ready="pending" : orderToChange.ready="ready"
        await orderToChange.save();
    }
    catch (err){
        const error= new HttpError('There was an error modifying the order',500);
        return next(error);
    }
    res.json({order:orderToChange.toObject({getters:true})}).status(200)
}

const login= (req,res,next)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        throw new HttpError('Invalid input. Please fill out all the required fields', 422)
    }
    const {username, password}= req.body;
    if(DUMMY_USER.password===password && DUMMY_USER.username===username){
        return res.json({message:"Logged in!"})
    }
    else{
        throw new HttpError('Incorrect username or password', 401) 
    }
    
}

exports.readyOrders=readyOrders;
exports.pendingOrders=pendingOrders;
exports.deleteOrder=deleteOrder;
exports.modifyOrder=modifyOrder;
exports.login=login;