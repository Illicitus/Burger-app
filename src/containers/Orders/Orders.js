import React, {Component} from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';


class Orders extends Component {
    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {

                const fetchOrders = [];

                for (let key in response.data) {
                    fetchOrders.push({
                        ...response.data[key],
                        id: key
                    })
                }

                this.setState({loading: false, orders: fetchOrders})
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}
                    />
                ))}
            </div>
        );
    }
}

export default Orders;