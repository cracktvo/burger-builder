import React, {Component} from 'react';
import classes from './Checkout.css';
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';


class Checkout extends Component{

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
                    ingredients={this.props.ings}
                    onCheckoutCancelled={this.onCheckoutCancelledHandler}
                    onCheckoutContinued={this.onCheckoutContinuedHandler}/>
                    <Route path={this.props.match.path + '/contact-data'}
                           component={ContactData}
                    />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
};

export default connect(mapStateToProps,null)(Checkout);