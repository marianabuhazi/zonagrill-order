import React from 'react'
import Header from '../components/order/OrderHeader'
import OrderForm from '../components/order/OrderForm.js'
import "./Order.css";

const Order = ({setOrder}) => { 
    return (
        <div>
            <a href="/admin/login"><button className="btn">ADMIN LOGIN</button></a><br/><br/><br/>
            <Header name="SEAFRIGO Group Corporate Event"/><br/><br/>
            <OrderForm setOrder={setOrder}/>
        </div>
    )
}

export default Order
