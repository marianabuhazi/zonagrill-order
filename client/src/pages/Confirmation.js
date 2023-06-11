import React from 'react'
import Header from '../components/order/OrderHeader'
import './Confirmation.css'

const Confirmation = ({order}) => {
    return (
    <div>
        <Header name="SEAFRIGO Group Corporate Event"/> 
        <h1 className='thankYou'>We've received your order, {order.fname}!</h1>
        <h2 className='screenshot'>Take a screenshot of this receipt for your records.</h2>

        <div class="container">
            <div class="receipt_header">
            <h1>ORDER CONFIRMATION<span>Zona Grill</span></h1>
            <h2 id="capitalize">Name: {order.lname}, {order.fname}<span>Tel: {order.phoneNumber}</span></h2>
            </div>
            <div class="receipt_body">
                <div class="items">
                    <table>
                        <thead>
                            <th>OPTION</th>
                            <th>ITEM</th>
                        </thead>
                
                        <tbody>
                            <tr>
                                <td>APP.</td>
                                <td>{order.appetizer}</td>
                            </tr>
                            <tr>
                                <td>ENT.</td>
                                <td>{order.entree}</td>
                            </tr>
                            <tr>
                                <td>DRI.</td>
                                <td>{order.drink}</td>
                            </tr>
                            <tr>
                                <td>DES.</td>
                                <td>{order.dessert}</td>
                            </tr>
                        </tbody>

                        <tfoot>
                            <tr>
                                <td>Comments</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td>{order.comments ? order.comments : "None"}</td>
                                <td></td>
                            </tr>
                        </tfoot>

                    </table>
                </div>

            </div>
                <h3>Thank You!</h3>
            </div>
    </div>
    
    )
}

export default Confirmation
