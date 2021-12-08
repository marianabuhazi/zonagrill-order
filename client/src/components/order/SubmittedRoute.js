import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import submitted from '../order/Submitted'
const SubmittedRoute = ({component: Component, ...rest}) => {
    return (
            <Route {...rest} render={
                (props)=>{
                if(submitted.IsSubmitted()){
                    return <Component {...props}/>
                }
                else{
                    return <Redirect to="/api/order"/>
                }
                }
            }/>
    )
}

export default SubmittedRoute

