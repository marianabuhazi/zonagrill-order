import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
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
            <a href="/order"><button className="btn">BACK</button></a><br/><br/><br/>
            <h1 className="title">Admin Login</h1>
            <h2 className="adminDisclaimer">This page is for administrators only. If you are not an administrator, please return to order.</h2>
            <br/>
            <br/>
            <form className="admin">
                <h2 className="adminDisclaimer" id="alert">{mess}</h2>
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
                <input className="input" type="password" onChange={e=>setPw(e.target.value)}></input>
                <br/>
                <button className="btn" onClick={signIn}>SIGN IN</button>
                <br/><br/><br/>
            </form> 
        </div>
    )
}
export default withRouter(Login)