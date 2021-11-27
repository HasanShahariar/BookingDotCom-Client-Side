import React from 'react';
import { Link } from 'react-router-dom';

const SingleExplore = ({ explore }) => {
    const { Name, img } = explore;
    return (
        <div className="service">
            <img className="size" src={img} alt="" />
            <h2>{Name}</h2>
            <button className="btn btn-info mb-3">
                <button className="btn btn-info" >Explore</button>
            </button>
        </div>
    );
};

export default SingleExplore;