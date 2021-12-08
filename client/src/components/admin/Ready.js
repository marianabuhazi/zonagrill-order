import React, {useState, useEffect} from 'react'
import auth from '../auth/auth'
import {withRouter} from 'react-router-dom'

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
                    props.history.push("/admin/519924812089420/orders")
                }
            }>
                Pending Orders
            </button>
            <h1>Ready orders here:</h1>
            {!ready ? <h3>No ready orders at this time</h3> : ready.map(o=>{
                return(
                <div key={o._id}>
                    <br/>
                    <p>ORDER#{o._id}</p>
                    <p>NAME: {o.lname}, {o.fname}</p>
                    <p>ENTREE: {o.entree}</p>
                    <p>APPETIZER: {o.appetizer}</p>
                    <p>DRINK: {o.drink}</p>
                    <p>COMMENTS: {o.comments}</p> 
                    <button onClick={()=>deleteOrder(o._id)}>Delete</button>    
                </div>  
            )}) }
        </div>
    )
}

export default withRouter(Ready)
