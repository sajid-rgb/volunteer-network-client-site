import React from 'react';

const AdminCard = ({admin}) => {
    const {name,email,date,organize,_id} = admin
    const handleDelete = ()=>{
       fetch(`https://glacial-mountain-57084.herokuapp.com/admin/${_id}`,{
           method:'DELETE'
       })
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
       })
        
    }
    return (
        <div>
         
                <tr className='d-flex mt-3' style={{fontWeight:'bold'}}>
                    <td className='ml-0' style={{ width:'200px',textAlign:'justify'}}>{name}</td>
                    <td className='ml-4' style={{ width:'200px',textAlign:'justify'}}>{email}</td>
                    <td className='ml-5'>{date}</td>
                    <td className='' style={{marginLeft:'190px'}}>{organize}</td>
                    <td style={{marginLeft:'150px'}} ><button onClick={handleDelete} className='text-danger'  style={{border:'none',backgroundColor:'transparent'}}>Delete</button></td>
                </tr>
        </div>
    );
};

export default AdminCard;