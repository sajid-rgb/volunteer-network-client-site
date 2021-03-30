import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { HideContext } from '../../App';
const Header = () => {
    const [isHide,setIsHide] = useContext(HideContext)
    return (
        <div className='d-flex justify-content-md-between container'>
            <div className='mt-3 text-primary'>
                <h4 className='text-white'>VOLUNTEER</h4>
                <h5  className='text-primary'>NETWORK</h5>
                
            </div>
            <ul className='d-flex flex-column flex-md-row' style={{listStyle: 'none',textDecoration:'none'}}>
            

                <li className='mr-3 mt-3 '><Link to="/home" className='text-white' onClick={()=>setIsHide(false)}>Home</Link></li>
                <li className='mr-3 mt-3  text-white'><Link  to="/donation" className='text-white'  >Donation</Link></li>
                <li className='mr-3 mt-3  text-white'><Link  to="/events" className='text-white' onClick={()=>setIsHide(false)}>Events</Link></li>
                <li className='mr-3 mt-3  text-white'><Link to="/blog" className='text-white' onClick={()=>setIsHide(false)}>Blog</Link></li>
                <button as={Link}  className='btn btn-primary  mr-3 mt-1' style={{height:'50px'}}><Link to='/registration' className='text-white' onClick={()=>setIsHide(false)}>Register</Link></button>
                <Link to='/admin' className='text-white'><button className='btn btn-light mr-3 mt-1' style={{height:'50px'}} onClick={()=>setIsHide(false)}>Admin</button> </Link>
            
            </ul>
        </div>
    );
};

export default Header;