import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Event from '../Event/Event';
const Events = ({sEvent}) => {
    const {name,imageURL}= sEvent
    return (
        <div className='col-md-4 g-4 mt-3'>
             <div className="card">
            <img src={imageURL} alt="" className="card-img-top " style={{height:'300px'}}/>
               <div className="card-body">
                   <Link to={'/event/'+name}><h4 className="card-title text-center text-dark">{name}</h4></Link>
               </div>
           </div>
        </div>
    );
};

export default Events;