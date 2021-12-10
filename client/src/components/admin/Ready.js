import React, {useState, useEffect} from 'react'
import auth from '../auth/auth'
import {withRouter} from 'react-router-dom'
import "./Ready.css"

const Ready = (props) => {
    const [ready, setReady]= useState([])
    
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
        sendRequest()
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
            <button className="buttonB" onClick={
                ()=>{
                    props.history.push("/admin/519924812089420/orders")
                }
            }>
                Pending Orders
            </button>
            <h1 className="header">Ready Orders</h1>
            {!ready ? <h3>No ready orders at this time</h3> : ready.map(o=>{
                return(
                <div className="order" key={o._id}>
                    <br/>
                    <p>Name: {o.lname}, {o.fname}</p>
                    <p>Entree: {o.entree}</p>
                    <p>Appetizer: {o.appetizer}</p>
                    <p>Drink: {o.drink}</p>
                    <p>Comments: {o.comments}</p> 
                    {/* <button className="buttonR" onClick={()=>deleteOrder(o._id)}>Delete</button>     */}
                </div>  
            )}) }
        </div>
    )
}

export default withRouter(Ready)
