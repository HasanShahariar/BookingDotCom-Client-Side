
import React, { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./ServiceDetails.css";
const ServiceDetails = () => {
  const { serviceId } = useParams();
  const addressRef = useRef();
  const [service, setService] = useState([]);
  const [insertStatus, setinsertStatus] = useState(false);
  const { user } = useAuth();
  // console.log(user.uid);

  useEffect(() => {
    fetch(`https://mysterious-beyond-02516.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  // console.log(service);
  const handlePlaceOrder = (e) =>{
    console.log("handlePlaceOrder");
    const address = addressRef.current.value;
    service.userId = user.uid;
    service.orderId = service._id;
    delete service._id;
    service.address = address;
    service.status = "Pending";

    // console.log(newUser);
    fetch('https://mysterious-beyond-02516.herokuapp.com/orders',{
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(service)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.insertedId){
      alert("Successfully added",data.insertedId)
      setinsertStatus(true)
      e.target.reset();
    }
    // const addedUser = data;
    // const userList = [...user,addedUser]
    // setUser(userList)
  })
    e.preventDefault();
  }


  return (
    <div className="container d-flex justify-content-center">
      {service.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div >
          <div className="card">
          <img src={service.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3>{service.Name}</h3>
            <p className="card-text">{service.Description}</p>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
        <div>
          <form className="d-flex flex-column" onSubmit={handlePlaceOrder}>
            <input type="text" ref={addressRef} placeholder="Address" />
            <input className="btn btn-primary" type="submit" value="Place Order" />
          </form>
        </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
