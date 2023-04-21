import React, { Fragment,useState } from 'react'
import axios from 'axios';



export default function CreateRondoGuide() {
  function register(event) {
    event.preventDefault();
    
    const name = event.target.Fname.value;
    const description = event.target.Desctiption.value;
    const date = event.target.Date.value;
    const categories = {
      'Beauty': event.target.Beauty.checked,
      'Gaming': event.target.Gaming.checked,
      'High-tech': event.target['High-tech'].checked,
      'App mobiles': event.target['App mobiles'].checked,
      'Lifestyle': event.target.Lifestyle.checked,
      'Parents-Kids': event.target['Parents-Kids'].checked,
      'Travel': event.target.Travel.checked,
      'Food': event.target.Food.checked,
      'Animals': event.target.Animals.checked,
      'Humour': event.target.Humour.checked
    };
    const imageUrl = image;
  
    database.ref('rondoGuide').push({
      name,
      description,
      date,
      categories,
      imageUrl
    }).then(() => {
      console.log('Data added to Firebase Realtime Database');
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <Fragment>
  
      <div className="reg">
      <form encType="multipart/form-data" method='POST'  onSubmit={register}>
    <div className="container1">
   <div className="title">Create Rondo Guide</div>
   <div className="content">
       <div className="user-details">
          <div className="input-box">
            <span className="details">Name</span>
            <input type="text" placeholder="Enter your name" name="Fname"    required/>
          </div>
          <div className="input-box">
            <span className="details">Desctiption</span>
            <input type="text" placeholder="Enter your Desctiption"  name="Desctiption"   required/>
          </div>
          <div className="input-box">
            <span className="details">Date</span>
            <input type="text" placeholder="Enter your Date"  name="Date"   required/>
          </div>
          <div className="input-box">
            <span className="details">Name</span>
            <input type="text" placeholder="Enter your name" name="Fname"    required/>
          </div>
          <div className="input-box">
            <span className="details">Desctiption</span>
            <input type="text" placeholder="Enter your Desctiption"  name="Desctiption"   required/>
          </div>
          <div className="input-box">
            <span className="details">Date</span>
            <input type="text" placeholder="Enter your Date"  name="Date"   required/>
          </div>
        <div className='sort'>
            <div className='sort1'>
       <label className="checkbox">
       <input type="checkbox" name="Beauty" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">Beauty</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="Gaming" onChange={handleInputChange} />
      <span className="checkmark"></span>
      <span className="label-text">Gaming</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="High-tech" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">High-tech</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="App mobiles" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">App mobiles</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="Lifestyle" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">Lifestyle</span>
    </label>
    </div>
    <div className='sort2'><label className="checkbox">
       <input type="checkbox" name="Parents-Kids" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">Parents / Kids</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="Travel" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">Travel</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="Food" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">Food</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="Animals" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">Animals</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="Humour" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">Humour</span>
    </label>

    </div>
    <div className='upload'> 
    <input type="file" name="image" onChange={handleImageChange} />
</div>
    </div>
       </div>
       <div className="button">
       <button type='submit' className='Loginbutton'>register</button>
       </div>
   </div>
 </div>
 </form>

 </div></Fragment>
  )
}
