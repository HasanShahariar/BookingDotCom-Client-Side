import React, { useEffect, useState } from 'react';

const SingleOrder = ({ order }) => {
    const [orders, setOrders] = useState([])


    const { Name, Description, img, _id,status } = order;

    const handleDeleteUser = (id) => {

        var answer = window.confirm("Are you Sure? This Order will be deleted!");
        if (answer) {
            const url = `https://mysterious-beyond-02516.herokuapp.com/orders/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.deletedCount);
                if (data.deletedCount > 0) {
                    alert("Deleted Successfully");
                    // const remainingOrders = orders.toArray().filter(user => order._id !== id)
                    // setOrders(remainingOrders);
                }
            })
        }
        else {
            //Not deleted
        }
        
    }
    return (

        <div className="service">
            <img className="size" src={img} alt="" />
            <h2>{Name}</h2>
            <p className="px-3">{Description}</p>
            <button onClick={() => handleDeleteUser(order._id)} className="btn btn-danger mb-3 ">
                Delete
            </button>
            <p className="text-info">Order Status: {status}</p>
        </div>

    );
};

export default SingleOrder;