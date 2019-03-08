import React from 'react';

import Aux from '../../../hoc/Auxiliary'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map();
    <li>Salad: 1</li>
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>

            </ul>
        </Aux>
    );
}