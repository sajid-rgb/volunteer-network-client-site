import React, { useState } from 'react';
import {Link} from 'react-router-dom'
const Registration = () => {
    const [admin,setAdmin] = useState({
        name:'',
        email:'',
        date:'',
        organize:''
    })
    const [isGo,setIsGo] = useState(false)
    const handleOnBlur = (e)=>{
        if(e.target.name==='name'){
            console.log(e.target.value);
           const newAdmin = {...admin}
            newAdmin.name = e.target.value
            setAdmin(newAdmin)
        }
        if(e.target.name==='email'){
            console.log(e.target.value);
            const newAdmin = {...admin}
            newAdmin.email= e.target.value
            setAdmin(newAdmin)
        }
        if(e.target.name==='date'){
            console.log(e.target.value);
            const newAdmin = {...admin}
            newAdmin.date = e.target.value
            setAdmin(newAdmin)
        }
        if(e.target.name==='organize'){
            console.log(e.target.value);
            const newAdmin = {...admin}
            newAdmin.organize = e.target.value
            setAdmin(newAdmin)
        }
}

        const handleSubmit = (e) =>{
            if(admin.name && admin.email && admin.date && admin.organize)
            {
                fetch('http://localhost:5000/addAdmin',{
                method:'POST',
                headers:{
                    'Content-Type':'Application/json'
                },
                body:JSON.stringify(admin)
            }
            )
        setIsGo(true)
        }
            // e.preventDefault()
}
       
    return (
        <div className='mt-5 text-center'>
            <h3 className='text-center text-info'>Register As a Volunteer</h3>
            <form action="" className='form-group w-50 mx-auto'>
            <input type="text" className='form-control' placeholder='Full name' name='name' onBlur={handleOnBlur} required/><br/>
                <input type="text" className='form-control' placeholder='Username or Email' name='email' onBlur={handleOnBlur} required/><br/>
                <input type="date" className='form-control' placeholder='Date' onBlur={handleOnBlur} name='date' required/><br/>
                <input type="text" className='form-control' placeholder='Description' onBlur={handleOnBlur} name='des' required/><br/>
                <input type="text" className='form-control' placeholder='Organize book at the library' name='organize' onBlur={handleOnBlur} required/>
                <button  className="btn btn btn-primary mt-3" onClick={handleSubmit}><Link to='/admin' className='text-white'>Registration</Link></button>
            </form>
        </div>
    );
};

export default Registration;