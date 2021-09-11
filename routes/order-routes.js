const express =require('express')
const orderControllers=require('../controllers/order-controllers')
const {check}=require('express-validator')

const router= express.Router();

router.post('/', 
[
    check('fname').not().isEmpty(), 
    check('email').normalizeEmail().isEmail(),
    check('lname').not().isEmpty(), 
    check('appetizer').not().isEmpty(), 
    check('entree').not().isEmpty(), 
    check('drink').not().isEmpty(), 
    check('ready').not().isEmpty(), 
]
,orderControllers.submitOrder)
router.get('/:oid', orderControllers.userOrder)


module.exports= router;