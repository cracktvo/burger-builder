import React, {Component} from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        adress: {
            street: '',
            postalCode: ''
        }
    };

    orderHandler = (event) =>{
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max Rodriguez',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '42323',
                    country: 'UAE'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(response => {console.log(response)})
            .catch(error => console.log(error))
            .finally(() => {this.setState({ loading: false, purchasing: false })});
    };

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>
                    Enter your Contact Data
                </h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
                    <input className={classes.Input} type="email" name="email" placeholder="Your email"/>
                    <input className={classes.Input} type="text" name="street" placeholder="Street"/>
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;