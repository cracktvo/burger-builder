import React, {Component} from 'react';
import classes from './Checkout.css';
import {Route} from "react-router-dom";

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
    state = {
        ingredients: null,
        price: 0
    };

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){
            if(param[0] === 'price'){
                price = param[1];
            }else{
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, price: price});
    }

    onCheckoutCancelledHandler= () =>{
        this.props.history.goBack();
    };

    onCheckoutContinuedHandler= () =>{
        this.props.history.push('/checkout/contact-data');
    };

    render(){
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    onCheckoutCancelled={this.onCheckoutCancelledHandler}
                    onCheckoutContinued={this.onCheckoutContinuedHandler}/>
                    <Route path={this.props.match.path + '/contact-data'}
                           render={(props)=>(
                               <ContactData
                                   ingredients={this.state.ingredients}
                                   price={this.state.price}
                                   {...props}
                               />)}
                    />
            </div>
        );
    }
}

export default Checkout;