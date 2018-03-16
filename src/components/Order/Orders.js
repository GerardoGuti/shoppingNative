import React, { Component } from 'react';
import Axios from 'axios';
import Order from './Order';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }
    componentWillMount() {
        Axios.get('http://localhost:3000/api/order')
        .then(orders => this.setState({ orders: orders.data }))
        .catch();
    }
    render() {
        const content = ( 
            this.state.orders.map(order => <Order key={order._id} {...order} />)
        );
        
        return content;
    }
}

export default Orders;
