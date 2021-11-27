import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  // const { detailsId } = useParams();
  const { Name, Description, img, _id } = service;
  const url = `/service/${_id}`;
  return (
    <div className="service">
      <img className="size" src={img} alt="" />
      <h2>{Name}</h2>
      <p className="px-3">{Description}</p>
      <button className="btn btn-info mb-3">
        <Link to={url}>Book Now</Link>
      </button>
    </div>
  );
};

export default Service;
