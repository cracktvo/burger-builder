import React, {Component} from 'react';
import classes from './Orders.css';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    };

    componentWillMount() {
        axios.get('./orders.json')
            .then((response)=>{
                const fetchedOrders = [];
                for(let key in response.data){
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({
                    orders:fetchedOrders
                });

            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                this.setState({
                    loading: false
                });
            })
    }

    render(){
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);