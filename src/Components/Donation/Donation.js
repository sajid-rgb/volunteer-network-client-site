import React, { useContext } from 'react';
import { HideContext } from '../../App';

const Donation = () => {
    const [isHide,setIsHide] = useContext(HideContext)
    return (
        <div className='mt-5'>
            {
                isHide && <form action="" className='w-50 mx-auto text-center'>
                    <label className='text-white'>Enter Amount Here</label><br/>
                <input type="text" className="form-control" placeholder='Enter Amount' required/> <br/>
                <input type="text" className="form-control" placeholder='Your Full Name' required/> <br/>
                <input type="text" className="form-control" placeholder='Your Address' required/>  <br/>
                <input type="text" className="form-control" placeholder='Why You Love Us........' required/>  <br/>
                <button className='btn btn-success w-50'>Submit</button>
                </form>
            }
        </div>
    );
};

export default Donation;