const express =require('express')
const adminControllers=require('../controllers/admin-controllers')
const {check}=require('express-validator')
const router= express.Router();

router.get('/ready', adminControllers.readyOrders)
router.get('/pending', adminControllers.pendingOrders)
router.get('/pending/:oid', adminControllers.modifyOrder)
router.get('/ready/:oid', adminControllers.deleteOrder)
router.post('/login', [check('username').not().isEmpty(), check('password').not().isEmpty()], adminControllers.login)

module.exports= router;