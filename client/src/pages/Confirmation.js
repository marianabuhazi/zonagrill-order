import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/order/OrderHeader'

const Confirmation = ({order}) => {
    return (
        <div>
            <Header name="Thermofisher Corporate Event"/> 
            <h1>Your order has been received. </h1>
            <h2>Here's your receipt</h2>
            {order && <div key={order.id}>
                    <h2>{order.id}</h2>
                    <h2>{order.email}</h2>
                    <h2>{order.fname}</h2>
                    <h2>{order.lname}</h2>
                    <h2>{order.entree}</h2>
                    <h2>{order.appetizer}</h2>
                    <h2>{order.drink}</h2>
                    <h2>{order.comments}</h2>
            </div>}
            {/* {orders.map(o=>{
                return(
                <div key={o.id}>
                    <h2>{o.id}</h2>
                    <h2>{o.email}</h2>
                    <h2>{o.fname}</h2>
                    <h2>{o.lname}</h2>
                    <h2>{o.entree}</h2>
                    <h2>{o.appetizer}</h2>
                    <h2>{o.drink}</h2>
                    <h2>{o.comments}</h2>
                </div>
            )}) } */}
            <Link to="/order">Back to Order</Link>
        </div>
    )
}

export default Confirmation
