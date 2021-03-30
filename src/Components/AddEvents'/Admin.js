import React, { useEffect, useState } from 'react';
import AdminCard from '../Admin/AdminCard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Admin = () => {
    const [admins,setAdmin] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://glacial-mountain-57084.herokuapp.com/admin')
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data)
            setLoading(false)
        })
    })
    return (
        <div className='container mx-auto mt-5 bg-white '>
            <Link to='/events'>Add Event</Link>
            <h4 className='text-center'>Volunteer Register List</h4>
            {
                loading ? <div class="text-center">
                <div class="spinner-border text-success" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>:<div><tr className='d-flex justify-content-around bg-light' style={{backgroundColor:'whiteSmoke',height:'55px',borderRadius:'10px'}}>
                    <th className='mt-3 text-muted'>Name</th>
                    <th className='mt-3 text-muted' >Email Id</th>
                    <th className='mt-3 text-muted'>Registration date</th>
                    <th className='mt-3 text-muted'>Volunteer list</th>
                    <th className='mt-3 text-muted'>Action</th>
                </tr>
            {
                admins.map(admin=><AdminCard admin={admin}></AdminCard>)
            }
            </div>
            }
            
        </div>
    );
};

export default Admin;