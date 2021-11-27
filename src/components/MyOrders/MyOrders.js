import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Service from '../Service/Service/Service';
import SingleOrder from '../SingleOrder/SingleOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth();
    const userId = user.uid;

    useEffect(() => {
        fetch(`https://mysterious-beyond-02516.herokuapp.com/orders/${userId}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [userId]);
    console.log(orders);

    return (
        <div className="container mt-3">
            {
                orders.map((order) => (
                    <SingleOrder key={order._id} order={order}></SingleOrder>
                  ))
            }
        </div>
    );
};

export default MyOrders;