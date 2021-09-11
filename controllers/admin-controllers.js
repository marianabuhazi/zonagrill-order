const HttpError=require('../models/http-err')
const {validationResult}=require('express-validator')

const DUMMY_USER={
    username:'yackselys',
    password:'test'
}
let DUMMY_ORDERS=[
    {
        id:'1',
        email:'marian@gmail.com',
        fname:'marian',
        lname:'abuhazi',
        appetizer:'tequeños',
        entree:'none',
        drink:'sprite',
        comments:'',
        ready:'ready'
    },
    {
        id:'2',
        email:'sweet@gmail.com',
        fname:'sweet',
        lname:'caroline',
        appetizer:'tequeños',
        entree:'none',
        drink:'sprite',
        comments:'',
        ready:'pending'
    },
    {
        id:'3',
        email:'merts@gmail.com',
        fname:'marian',
        lname:'abuhazi',
        appetizer:'tequeños',
        entree:'none',
        drink:'sprite',
        comments:'',
        ready:'ready'
    }
  
]

//returns all ordered labeled as ready
const readyOrders= (req,res,next)=>{
    let orders=[]
    DUMMY_ORDERS.find(o=>{
        if(o.ready==='ready'){
            orders.push(o);
        }   
    })
    if(orders.length===0){
        const error= new HttpError('No ready orders found',404);
        return next(error);
    }
    res.json({orders})
}

const pendingOrders= (req,res,next)=>{
    let orders=[]
    DUMMY_ORDERS.find(o=>{
        if(o.ready==='pending'){
            orders.push(o);
        }   
    })
    if(orders.length===0){
        const error= new HttpError('No pending orders found',404);
        return next(error);
    }
    res.json({orders})
}

const deleteOrder= (req,res,next)=>{
    const orderId= req.params.oid
    DUMMY_ORDERS=DUMMY_ORDERS.filter(o=>{ 
        return o.id!==orderId 
    }
    )
    if(DUMMY_ORDERS.length===0){
        const error= new HttpError('No ready orders found',404);
        return next(error)
    }
    res.json({DUMMY_ORDERS})
}

const modifyOrder= (req,res,next)=>{
    const orderId= req.params.oid
    const orderToChange= DUMMY_ORDERS.find(o=>{ 
        return o.id===orderId 
    } )
    if(!orderToChange){
        const error= new HttpError('No order has been found',404);
        return next(error)
    }
    const orderToChangeIndex= DUMMY_ORDERS.findIndex(o=>{ 
        o.id===orderId 
    } )
    orderToChange.ready==="ready" ? orderToChange.ready="pending" : orderToChange.ready="ready"

    DUMMY_ORDERS[orderToChangeIndex]=orderToChange

    res.json({DUMMY_ORDERS})
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