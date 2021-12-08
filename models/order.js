const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    email:{ type: String, required:true },
    fname:{ type: String, required:true },
    lname:{ type: String, required:true },
    appetizer:{ type: String, required:true },
    entree:{ type: String, required:true},
    drink:{ type: String, required:true },
    comments:{type:String},
    ready:{ type: String, required:true}
})

module.exports = mongoose.model('Order', orderSchema)