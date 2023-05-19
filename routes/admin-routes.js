const express =require('express')
const adminControllers=require('../controllers/admin-controllers')
const {check}=require('express-validator')
const router= express.Router();

router.get('/ready', adminControllers.readyOrders)
router.get('/pending', adminControllers.pendingOrders)
router.post('/orderCount/:ready', adminControllers.orderCount)
router.post('/orderCount/:option/:item', adminControllers.itemCount)
router.post('/pending/:oid', adminControllers.modifyOrder)
router.post('/ready/:oid', adminControllers.deleteOrder)
router.post('/login', [check('username').not().isEmpty(), check('password').not().isEmpty()], adminControllers.login)

module.exports= router;