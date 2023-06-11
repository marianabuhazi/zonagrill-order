const HttpError=require('../models/http-err')
const {validationResult}=require('express-validator')
const Order = require('../models/order')

const submitOrder= async (req,res,next)=>{
    const errors= validationResult(req)
    if(!errors.isEmpty()){
        throw new HttpError('Please make sure all required fields are filled and valid.',422);
    }
    const { phoneNumber, fname, lname, appetizer, drink, dessert, entree,comments, ready} = req.body;
    const createdOrder = new Order({
        phoneNumber,
        fname,
        lname,
        appetizer,
        entree,
        drink,
        dessert,
        comments,
        ready
    })
    try{
        await createdOrder.save();
    }
    catch(err){
        const error= new HttpError("Creating order failed, please try again", 500)
        return next(error)
    }
    res.json({order:createdOrder})
    res.status(201)

}

const userOrder= async (req,res,next)=>{
    const orderId=req.params.oid;
    let order;
    try{
        order = await Order.findById(orderId)
    }
    catch(err){
        const error = new HttpError("Something went wrong while confirming your order", 500)
        return next(error)
    }
    if(!order){
        const error= new HttpError('There was an error and no order can be confirmed. Try again!',404);
        return next(error);
    }
    res.json({  order:order.toObject( { getters: true } )})
}

exports.submitOrder=submitOrder;
exports.userOrder=userOrder;