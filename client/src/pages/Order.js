import React from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/order/OrderHeader'
import OrderForm from '../components/order/OrderForm.js'

    
    // const [valid, setValid] = useState(false)
    
    // setValid(validate(order[props.qType],props.validators))
    
    // const completeOrderHandler = () => {
    //     completeOrder=order;
    // }


const Order = ({setOrder}) => { 
    return (
        <div className="body">
        <Header name="Thermofisher Corporate Event"/>
        <OrderForm setOrder={setOrder}/>
        <Link to="/admin/login">Admin Login</Link>
        </div>
    )
}

export default Order
