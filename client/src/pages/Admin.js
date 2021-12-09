import React, {useState, useEffect} from 'react'
import auth from '../components/auth/auth'
import {withRouter} from 'react-router-dom'
import "../components/admin/Ready.css"

const Admin = (props) => {
    const [orders, setOrders]=useState([])
    useEffect(()=>{
        const sendRequest =async ()=>{
            try{
                const response =await fetch('/api/admin/pending')
                const responseData= await response.json()
                setOrders(responseData.orders)
            }
            catch (err){
                console.log(err.message)
            }
        }
        sendRequest()
    }, [orders])
    
    const readyOrder = async (id) => {
        try{
            const response= await fetch(`/api/admin/pending/${id}`, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const responseData=await response.json()
            console.log(responseData.message)
        }
        catch (err){
            console.log(err)
        }
    }
       
    return (
        <div>
            <button className="button" onClick={
                ()=>{
                    auth.logout(()=>{
                        props.history.push("/admin/login")
                    })
                }
            }>
                Logout
            </button>
            <button  className="buttonB" onClick={
                ()=>{
                    props.history.push("/admin/519924812089420/ready")
                }
            }>
                Ready Orders
            </button>
            <h1 className='header'>Pending Orders</h1>
            <br/>
            {!orders? <h3>No pending orders at this time</h3> : orders.map(o=>{
                return(
                <div className="order" key={o._id}>
                    <p>Name: {o.lname}, {o.fname}</p>
                    <p>Entree: {o.entree}</p>
                    <p>Appetizer: {o.appetizer}</p>
                    <p>Drink: {o.drink}</p>
                    <p>Comments: {o.comments}</p>
                    <button className="buttonG" onClick={()=>readyOrder(o._id)}>Ready</button> 
                </div>  
            )}) }
        </div>
    )
}

export default withRouter(Admin)
