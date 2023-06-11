import React, {useState, useEffect} from 'react'
import auth from '../auth/auth'
import {withRouter} from 'react-router-dom'
import "./Ready.css"

const Ready = (props) => {
    const [ready, setReady]= useState([])
    const [orderCount, setOrderCount]=useState(0)
    
    useEffect(()=>{
        const sendRequest =async ()=>{
            try{
                const response =await fetch('/api/admin/ready')
                const responseData= await response.json()
                setReady(responseData.orders)
            }
            catch (err){
                console.log(err.message)
            }
        }
        const getOrderCount = async () => {
            try{
                const response= await fetch(`/api/admin/orderCount/ready`, {
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                const responseData=await response.json()
                setOrderCount(responseData.orderCount);
                console.log(responseData.message)
            }
            catch (err){
                console.log(err)
            }
        }
        sendRequest()
        getOrderCount()
    }, [ready])

    const deleteOrder = async (id) => {
        try{
            const response= await fetch(`/api/admin/ready/${id}`, {
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
    const pendingOrder = async (id) => {
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
            <button className="btn" id="black"onClick={
                ()=>{
                    auth.logout(()=>{
                        props.history.push("/admin/login")
                    })
                }
            }>
                LOGOUT
            </button>
            <button className="btn" id="blue" onClick={
                ()=>{
                    props.history.push("/admin/519924812089420/orders")
                }
            }>
                PENDING ORDERS
            </button>
            <h1 className="header">Ready Orders: {orderCount}</h1>
            <div className="orderContainer">
            {!ready ? <h2 className="announcement">No ready orders at this time!</h2> : ready.map(o=>{
                return(
                <div className="order" key={o._id}>
                    <br/>
                    <p><span id="bold">Name:</span> {o.lname}, {o.fname}</p>
                    <p><span id="bold">Entree:</span> {o.entree}</p>
                    <p>Appetizer: {o.appetizer}</p>
                    <p>Drink: {o.drink}</p>
                    <p>Dessert: {o.dessert}</p>
                    <p>Comments: {o.comments}</p> 
                    <button className="btn" id="blue" onClick={()=>pendingOrder(o._id)}>PENDING</button> 
                    <button className="btn" id="red" onClick={()=>deleteOrder(o._id)}>DELETE</button>    
                </div>  
            )}) }
        </div>
        </div>
    )
}

export default withRouter(Ready)
