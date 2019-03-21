import React, {Component} from 'react';
import classes from './Checkout.css';
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';


class Checkout extends Component {

    onCheckoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    onCheckoutContinuedHandler = () => {
        this.props.history.push('/checkout/contact-data');
    };

    render() {
        let summary = <Redirect to="/"/>;
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
            summary =
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        onCheckoutCancelled={this.onCheckoutCancelledHandler}
                        onCheckoutContinued={this.onCheckoutContinuedHandler}/>
                    <Route path={this.props.match.path + '/contact-data'}
                           component={ContactData}/>
                </div>;
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};

export default connect(mapStateToProps)(Checkout);