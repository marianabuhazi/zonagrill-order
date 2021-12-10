import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/order/OrderHeader'
import './Confirmation.css'

const Confirmation = ({order}) => {
    return (
        <div>
            <Header name="Thermofisher Corporate Event"/> 
            {order && <div  key={order.id}>
            <h1 className='thankYou'>Thank you for ordering, {order.fname}!</h1>
            <h3 className='screenshot'>Take a screenshot of your order to show at the window.</h3>
                <div className="receipt">
                    <h1 className='title'>RECEIPT</h1>
                    <h2 className='items'>Name: {order.lname}, {order.fname}</h2>
                    <h2 className='items'>Entree: {order.entree}</h2>
                    <h2 className='items'>Appetizer: {order.appetizer}</h2>
                    <h2 className='items'>Drink: {order.drink}</h2>
                    <h2 className='items'>Comments: {order.comments}</h2>
                    <br/>
                </div>
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
