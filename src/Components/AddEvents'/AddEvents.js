import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL,setImageURL] = useState(null)
   const onSubmit = data => {
       const eventData ={
           name:data.name,
           imageURL:imageURL
       }
     const url = 'https://glacial-mountain-57084.herokuapp.com/addEvents'
     fetch(url,{
         method:'POST',
         headers:{
             'Content-Type':'application/json'
         },
         body:JSON.stringify(eventData)
     })
   };
  const handleImageUpload = (event)=>{
    console.log(event.target.files[0]);
    const imageData = new FormData()
    imageData.set('key','6d76573589b4c4c6e469c0754b0a8289')
    imageData.set('image',event.target.files[0])

    // axios.post('https://api.imgbb.com/1/upload', 
    // imageData)
    fetch('https://api.imgbb.com/1/upload',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:imageData
    })
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
}
    return (
        <div className='container text-center mt-5'>
          <h4 className='text-info'>This is Only for Developer</h4>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-center text-center ml-5">
      <input name="name" defaultValue="event list" ref={register} className='mt-3 w-25'/> 
      <input name="imageURL" type='file' onChange={handleImageUpload} className='mt-3 text-white ml-3'/> 
      </div>
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" className='mt-3' className='btn btn-success  mt-3 w-25 mr-4'/>
    </form>  */}
        </div>
    );
};

export default AddEvents;