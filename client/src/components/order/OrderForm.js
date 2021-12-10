import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
import submitted from './Submitted'
import './OrderForm.css'

const OrderForm = (props) => {
    const [email, setEmail] = useState();
    const [fname, setFName] = useState();
    const [lname, setLName] = useState();
    const [appetizer, setAppetizer] = useState();
    const [entree, setEntree] = useState();
    const [drink, setDrink] = useState();
    const [comments, setComments] = useState();

    const confirmation = ()=>{
        submitted.submit(()=>{
            props.history.push("/confirmation")
        })
    }

    const submitOrder = async (e) =>{
        e.preventDefault()
        let newOrder={
            'id':1,
            'email':email,
            'fname':fname,
            'lname':lname,
            'appetizer':appetizer,
            'entree':entree,
            'drink':drink,
            'comments':comments
        }
        if(email===undefined || fname===undefined || lname===undefined 
            || appetizer===undefined || entree===undefined || drink===undefined){
            alert("Please fill out all the required fields")
        }
        else{
            try{
            const response= await fetch('/api/order', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    email:newOrder.email,
                    fname:newOrder.fname,
                    lname:newOrder.lname,
                    appetizer:newOrder.appetizer,
                    entree:newOrder.entree,
                    drink:newOrder.drink,
                    comments:newOrder.comments,
                    ready:"pending"
                })
            })
            const responseData=await response.json()
            console.log(responseData)
        }
        catch (err){
            console.log(err)
        }
            props.setOrder(newOrder)
            confirmation()
        }
        
    }
    return (
        <div>
            <form className="form">
            <h2 className="subtitle">1. Personal Information</h2>
            <label className="">You must enter valid information to proceed</label>
            <div className="section">
                <div className="question">
                    <label className="label">
                        eMail
                        <span className="star"> *</span>
                    </label>
                    <input className="input" type="text" onChange={e=>setEmail(e.target.value)}></input>
                </div>
                <div className="question">
                    <label className="label">
                        First Name
                        <span className="star"> *</span>
                    </label>
                    <input className="input" type="text" onChange={e=>setFName(e.target.value)}></input>
                </div>
                <div className="question">
                    <label className="label">
                        Last Name
                        <span className="star"> *</span>
                    </label>
                    <input className="input" type="text" onChange={e=>setLName(e.target.value)}></input>
                </div>
            </div>
            <br/>
            <h2 className="subtitle">2. Order Information</h2>
            <div className="section">
            <label className="label">Check out our menu for ingredients and images:</label>
                <a target="_blank" rel="noopener noreferrer" href="http://zonagrill.us/menu.html">Zona Grill Menu</a>
                <a target="_blank" rel="noopener noreferrer" href="http://zonagrill.us/gallery.html">Zona Grill Food Gallery</a>
                <br/>
                <label className="">Note: not all items on menu are available for selection</label>
                <div className="question">
                    <label className="label">
                        Choose an appetizer
                        <span className="star"> *</span>
                    </label>
                    <select className="input" onChange={e=>setAppetizer(e.target.value)}>
                        {
                            ["","None", "Hot Dog", "Tequeños"].map((option)=>{
                                return <option key={option}>{option}</option>
                            })
                        }
                    </select>
                </div>
                <div className="question">
                    <label className="label">
                        Choose an entree
                        <span className="star"> *</span>
                    </label>
                    <select className="input" onChange={e=>setEntree(e.target.value)}>
                        {
                            ["","None", "Beef Caraqueña", 
                            "Chicken Caraqueña",
                            "Chicken Pepito",
                            "Cachapa with cheese",
                            "Queen Pepia Arepa",
                            "Chicken Arepa",
                            "Grilled Pork Arepa",
                            "White Cheese Arepa",
                            "Gouda Cheese Arepa",
                            "Pelua Arepa",
                            "Catira Arepa"].map((option)=>{
                                return <option key={option}>{option}</option>
                            })
                        }
                    </select>
                </div>
                <div className="question">
                    <label className="label">
                        Choose a drink
                        <span className="star"> *</span>
                    </label>
                    <select className="input" onChange={e=>setDrink(e.target.value)}>
                        {
                            ["","None", "Water bottle",
                            "Coke",
                            "Zero",
                            "Sprite",
                            "Apple Postobon", 
                            "Strawberry Frescolita"].map((option)=>{
                                return <option key={option}>{option}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <br/>
            <h2 className="subtitle">3. Comments (optional)</h2>
            <div className="question">
                <label className="number">
                    Or phone number if you'd like us to call when the order is ready!
                </label>
                <input className="inputBox" type="text" onChange={e=>setComments(e.target.value)}></input>
            </div>
            <button className="submit" onClick={submitOrder}>Submit</button> 
        </form>
        </div>
    )
}

export default withRouter(OrderForm)
