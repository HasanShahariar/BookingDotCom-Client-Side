import React, { useEffect, useState } from 'react';

const ManageSingleOrder = ({ order }) => {
    const [orders, setOrders] = useState([])


    const { Name, Description, img, _id,status } = order;

    const handleDeleteOrder = (id) => {

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

    const handleAcceptOrder = (id) =>{
        const url = `https://mysterious-beyond-02516.herokuapp.com/order/${id}`;
        fetch(url, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert("Update Successful")
            }
        })
       
    }
    return (

        <div className="service">
            <img className="size" src={img} alt="" />
            <h2>{Name}</h2>
            <p className="px-3">{Description}</p>
            <div className="d-flex justify-content-evenly">
            
            <button onClick={() => handleAcceptOrder(order._id)} className="btn btn-success mb-3 ml-2">
                Accept
            </button>
            <button onClick={() => handleDeleteOrder(order._id)} className="btn btn-danger mb-3">
                Delete
            </button>
            </div>
            <p className="text-info">Order Status: {status}</p>
        </div>

    );
};

export default ManageSingleOrder;