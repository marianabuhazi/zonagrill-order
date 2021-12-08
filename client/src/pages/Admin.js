import React, {useState, useEffect} from 'react'
import auth from '../components/auth/auth'
import {withRouter} from 'react-router-dom'

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
            <button onClick={
                ()=>{
                    auth.logout(()=>{
                        props.history.push("/admin/login")
                    })
                }
            }>
                Logout
            </button>
            <button onClick={
                ()=>{
                    props.history.push("/admin/519924812089420/ready")
                }
            }>
                Ready Orders
            </button>
            <h1>Pending Orders</h1>
            <br/>
            {!orders? <h3>No pending orders at this time</h3> : orders.map(o=>{
                return(
                <div key={o._id}>
                    <p>ORDER#{o._id}</p>
                    <p>NAME: {o.lname}, {o.fname}</p>
                    <p>ENTREE: {o.entree}</p>
                    <p>APPETIZER: {o.appetizer}</p>
                    <p>DRINK: {o.drink}</p>
                    <p>COMMENTS: {o.comments}</p>
                    <br/>
                    <button onClick={()=>readyOrder(o._id)}>Ready</button>    
                </div>  
            )}) }
        </div>
    )
}

export default withRouter(Admin)
