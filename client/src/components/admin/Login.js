import React, {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import auth from '../auth/auth'
import '../order/OrderForm.css'

const Login = (props) => {
    const PASS= 519924812089420
    const [user, setUser]=useState()
    const [pw, setPw]=useState()
    const [mess, setMess]=useState()

    const signIn= async (e) => {
        e.preventDefault()
        try{
            const response= await fetch('/api/admin/login', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    username:user,
                    password:pw
                })
            })
            const responseData=await response.json()
            if(responseData.message==="Logged in!"){
                setMess("Signing in...");
                auth.login(()=>{
                    props.history.push(`/admin/${PASS}/orders`)
                })
            }
            else{
                setMess(responseData.message);
            }
        }
        catch (err){
            setMess(err.message)
        }
    }

    return (
        <div>
            <h1>Admin Login</h1>
            <form className="admin">
                <label className="label">
                    Username
                    <span className="star"> *</span>
                </label>
                <input className="input" type="text" onChange={e=>setUser(e.target.value)} ></input>
                <br/>
                <label className="label">
                    Password
                    <span className="star"> *</span>
                </label>
                <input className="input" type="text" onChange={e=>setPw(e.target.value)}></input>
                <br/>
                <button onClick={signIn}>Sign in</button>
                <h3>{mess}</h3>
            </form> 
            <h5>This page is for admins only. If you are not an admin, please return to order</h5>
            <Link to="/order">Back to Order</Link>
        </div>
    )
}
export default withRouter(Login)