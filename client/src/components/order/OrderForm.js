import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
import submitted from './Submitted'
import './OrderForm.css'
import { appetizerList, entreeList, drinksList,  dessertList } from '../../data/french-group'

const OrderForm = (props) => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [fname, setFName] = useState();
    const [lname, setLName] = useState();
    const [appetizer, setAppetizer] = useState();
    const [entree, setEntree] = useState();
    const [drink, setDrink] = useState();
    const [dessert, setDessert] = useState();
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
            'phoneNumber':phoneNumber,
            'fname':fname,
            'lname':lname,
            'appetizer':appetizer,
            'entree':entree,
            'drink':drink,
            'dessert': dessert,
            'comments':comments
        }
        if(phoneNumber===undefined || fname===undefined || lname===undefined 
            || appetizer===undefined || entree===undefined || drink===undefined || dessert===undefined){
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
                    phoneNumber:newOrder.phoneNumber,
                    fname:newOrder.fname,
                    lname:newOrder.lname,
                    appetizer:newOrder.appetizer,
                    entree:newOrder.entree,
                    drink:newOrder.drink,
                    dessert:newOrder.dessert,
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
            <h2 className="subtitle">Introduction</h2>
            <p className="disclaimer">Zona Grill Venezuelan Food is happy to serve you at this event! In order to expedite our service we ask that you submit your order in advance using the form below. 
            <br/><br/>
                {/* Orders will only be accepted until <span className="deadline">June 14, 2023 @ 6pm.</span> */}
            </p>
            <hr/><br/>
            <h2 className="subtitle">1. Personal Information</h2>
            <label className="">You must fill out all required (<span className="star"> *</span> ) fields to proceed.</label>
            <div className="section">
                <div className="question">
                    <label className="label">
                        Phone Number
                        <span className="star"> *</span>
                    </label>
                    <input className="input" type="text" onChange={e=>setPhoneNumber(e.target.value)}></input>
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
            <h2 className="subtitle">2. Order</h2>
            <div className="section">
            {/* <label className="label">Check out our menu for ingredients and images:</label>
                <a target="_blank" rel="noopener noreferrer" href="http://zonagrill.us/menu" className="btn" id="btnMenu">Zona Grill Menu</a> */}
                <div className="question">
                    <label className="label">
                        Choose an appetizer
                        <span className="star"> *</span>
                    </label>
                    <select className="input" onChange={e=>setAppetizer(e.target.value)}>
                        {
                            appetizerList.map((option)=>{
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
                            entreeList.map((option)=>{
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
                            drinksList.map((option)=>{
                                return <option key={option}>{option}</option>
                            })
                        }
                    </select>
                </div>
                <div className="question">
                    <label className="label">
                        Choose a dessert
                        <span className="star"> *</span>
                    </label>
                    <select className="input" onChange={e=>setDessert(e.target.value)}>
                        {
                            dessertList.map((option)=>{
                                return <option key={option}>{option}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <br/>
            <h2 className="subtitle">3. Comments </h2>
            <div className="question">
                <label className="label">
                 Use this space to make any modifications to your order, or leave a note to the chef.
                </label>
                <input className="input" type="text" onChange={e=>setComments(e.target.value)}></input>
            </div>
            <br/>
            <hr/><br/>
            <h2 className="subtitle">Warning!</h2>
            <p className="deadline">Please revise your order before submitting to avoid mistakes. Only submit one form per person.<br/></p>
            <label>If you had issues using this form, email zonagrillmiami@gmail.com.</label><br/><br/>
            <button className="submit" onClick={submitOrder}>SUBMIT</button> 
        </form>
        </div>
    )
}

export default withRouter(OrderForm)
