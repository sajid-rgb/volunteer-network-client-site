import React, { useContext, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useParams } from 'react-router';
import { HideContext } from '../../App';
const Event = () => {
    const [isHide,setIsHide] = useContext(HideContext)
    const [loading, setLoading] = useState(true)
    const {name} = useParams()
    const [event,setEvent] = useState([])
    useEffect(()=>{
        fetch('https://glacial-mountain-57084.herokuapp.com/event/'+name)
        .then(res=>res.json())
        .then(data=>{
            setEvent(data[0])
            setLoading(false)
        })
    })
    return (
        <div className='text-center mt-5'>
             {
                loading ? <div className="d-flex justify-content-center w-100 mt-5">
                    <div class="spinner-grow text-white" style={{ width: '15rem', height: '15rem' }} role="status">
          </div>
                </div>:<div>
                <div className="card w-25 mx-auto border-rounded">
               <img src={event.imageURL} alt="" className="card-img-top img-fluid mx-auto"/>
               
           </div>
           <h1 className='text-center text-white'>{event.name}</h1>
           <button as={Link} to='/donation' className="btn btn-danger"onClick={()=>setIsHide(true)} ><Link to='/donation' className='text-white'>Add Donation</Link></button> 
                     </div>
            }
          
        </div>
    );
};

export default Event;