import React from 'react'
import logo from '../../images/logo.png'
import './OrderHeader.css'

const OrderHeader = (props) => {
    return (
        <div>
            <img className="logo" src={logo} alt="Zona Grill logo" />
            <h2 className="eventName">{props.name}</h2>
        </div>
    )
}

export default OrderHeader
