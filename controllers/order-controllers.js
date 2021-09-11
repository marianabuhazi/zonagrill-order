const HttpError=require('../models/http-err')
const {validationResult}=require('express-validator')

const DUMMY_ORDERS=[
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

const submitOrder= (req,res,next)=>{
    const errors= validationResult(req)
    if(!errors.isEmpty()){
        throw new HttpError('Please make sure all required fields are filled and valid.',422);
    }
    const { id, email, fname, lname, appetizer, drink, comments, ready} = req.body;
    const newOrder={
        id,
        email,
        fname,
        lname,
        appetizer,
        drink,
        comments, 
        ready
    }
    DUMMY_ORDERS.push(newOrder);
    res.json({DUMMY_ORDERS})
    res.status(201)

}

const userOrder= (req,res,next)=>{
    const orderId=req.params.oid;
    const order=DUMMY_ORDERS.find(o=>{
        return o.id===orderId
    })
    if(DUMMY_ORDERS.length===0 || !order){
        const error= new HttpError('There was an error confirming your order. Try again!',404);
        return next(error);
    }
    res.json({message:order})
}

exports.submitOrder=submitOrder;
exports.userOrder=userOrder;