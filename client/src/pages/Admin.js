import React, {useState, useEffect} from 'react'
import auth from '../components/auth/auth'
import {withRouter} from 'react-router-dom'
import "../components/admin/Ready.css"

const Admin = (props) => {
    const [orders, setOrders]=useState([])
    const [orderCount, setOrderCount]=useState(0)
    const [appetizerCount, setAppetizerCount] = useState(0)
    const [drinkCount, setDrinkCount] = useState(0)
    const [dessertCount, setDessertCount] = useState(0)
    const [entreeCount, setEntreeCount] = useState(0)
    const [appetizer, setAppetizer] = useState("Appetizer")
    const [entree, setEntree] = useState("Entree")
    const [drink, setDrink] = useState("Drink")
    const [dessert, setDessert] = useState("Dessert")
    const [hide, setHide] = useState(true)

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
        const getOrderCount = async () => {
            try{
                const response= await fetch(`/api/admin/orderCount/pending`, {
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                const responseData=await response.json()
                setOrderCount(responseData.orderCount);
            }
            catch (err){
                console.log(err)
            }
        }
        sendRequest();
        getOrderCount();
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
        }
        catch (err){
            console.log(err)
        }
    }
    const getAppetizerCount = async (option, item) => {
        try{
            const response= await fetch(`/api/admin/orderCount/${option}/${item}`, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const responseData=await response.json()
            setAppetizerCount(responseData.orderCount);
        }
        catch (err){
            console.log(err)
        }
    }
    const getEntreeCount = async (option, item) => {
        try{
            const response= await fetch(`/api/admin/orderCount/${option}/${item}`, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const responseData=await response.json()
            setEntreeCount(responseData.orderCount);
        }
        catch (err){
            console.log(err)
        }
    }
    const getDrinkCount = async (option, item) => {
        try{
            const response= await fetch(`/api/admin/orderCount/${option}/${item}`, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const responseData=await response.json()
            setDrinkCount(responseData.orderCount);
        }
        catch (err){
            console.log(err)
        }
    }

    const getDessertCount = async (option, item) => {
        try{
            const response= await fetch(`/api/admin/orderCount/${option}/${item}`, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const responseData=await response.json()
            setDessertCount(responseData.orderCount);
        }
        catch (err){
            console.log(err)
        }
    }
       
    return (
        <div>
            <button className="btn" id="black" onClick={
                ()=>{
                    auth.logout(()=>{
                        props.history.push("/admin/login")
                    })
                }
            }>
                LOGOUT
            </button>
            <button  className="btn" id="green" onClick={
                ()=>{
                    props.history.push("/admin/519924812089420/ready")
                }
            }>
                READY ORDERS
            </button>
            <h1 className="header">Pending Orders: {orderCount}</h1>
            <br/>
            <select className="input" id="margin" onChange={e=>{setAppetizer(e.target.value); setHide(true);}}>
            <option disabled selected>Appetizer</option>
                        {
                            ["None", "Hot Dog", "Tequeños"].map((option)=>{
                                return <option key={option}>{option}</option>
                            })
                        }
            </select>
            <select className="input" id="margin" onChange={e=>{setEntree(e.target.value); setHide(true);}}>
            <option disabled selected>Entree</option>
                        {
                            ["None",
                            "Cachapa: Guayanés Cheese",
                            "Mixed Cachapa: Guayanés Cheese & Shredded Beef",
                            "Mixed Cachapa: Guayanés Cheese & Shredded Chicken",
                            "Mixed Cachapa: Guayanés Cheese & Grilled Pork",
                            "Caraqueña: Beef Patty",
                            "Caraqueña: Grilled Chicken",
                            "Caraqueña: Grilled Pork",
                            "Brutal",
                            "Patacón: Shredded Beef",
                            "Patacón: Shredded Chicken",
                            "Patacón: Grilled Pork",
                            "Arepa: Reina Pepia",
                            "Arepa: Shredded Beef",
                            "Arepa: Shredded Chicken",
                            "Arepa: Grilled Pork",
                            "Arepa: Shredded White Cheese",
                            "Arepa: Shredded Gouda Cheese",
                            "Arepa: Soft Guayanés Cheese",
                            "Arepa: Pelua",
                            "Arepa: Pelua Vieja",
                            "Arepa: Catira",
                            "Arepa: Catira Vieja",
                            "Arepa: Sifrina",
                            "Pepito: Steak",
                            "Pepito: Grilled Chicken",
                            "Pepito: Mixed"
                            ].map((option)=>{
                                return <option key={option}>{option}</option>
                            })
                        }
                </select>
                <select className="input" id="margin" onChange={e=>{setDrink(e.target.value); setHide(true);}}>
                <option disabled selected>Drink</option>
                        {
                            ["None", "Water bottle",
                            "Coke",
                            "Zero",
                            "Sprite",
                            "Passion Fruit Juice", 
                            "Papelón con Limón (Brown Sugar Lemonade)",
                            "Strawberry Frescolita"].map((option)=>{
                                return <option key={option}>{option}</option>
                            })
                        }
                </select>
                <select className="input" id="margin" onChange={e=>{setDessert(e.target.value); setHide(true);}}>
                <option disabled selected>Dessert</option>
                        {
                            ["None","Tres Leches Cake", "Italian Brownie"].map((option)=>{
                                return <option key={option}>{option}</option>
                            })
                        }
                </select>
            <button className="btn" id="gray"onClick={()=>{setHide(false); getDessertCount("dessert", dessert); getDrinkCount("drink", drink); getEntreeCount("entree", entree); getAppetizerCount("appetizer", appetizer);}}>QUERY</button> 
            {!hide && orderCount>0 ? <div id="margin" className='count'><p><span id="bold">{appetizer}</span>: {appetizerCount}</p><p><span id="bold">{entree}</span>: {entreeCount}</p><p><span id="bold">{drink}</span>: {drinkCount}</p><p><span id="bold">{dessert}</span>: {dessertCount}</p></div> : null}
            <div className="orderContainer">
            {!orders? <h2 className="announcement">No pending orders at this time!</h2> : orders.map(o=>{
                return(
                <div className="order" key={o._id}>
                    <p>Name: {o.lname}, {o.fname}</p>
                    <p>Entree: {o.entree}</p>
                    <p>Appetizer: {o.appetizer}</p>
                    <p>Drink: {o.drink}</p>
                    <p>Dessert: {o.dessert}</p>
                    <p>Comments: {o.comments}</p>
                    <button className="btn" id="green"onClick={()=>readyOrder(o._id)}>READY</button> 
                </div>  
            )}) }
            </div>
        </div>
    )
}

export default withRouter(Admin)
