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
            <h3 className='screenshot'>Take a screenshot of your order for your records:</h3>
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
            <Link to="/order">Back to Order</Link>
        </div>
    )
}

export default Confirmation
