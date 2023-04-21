import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateRondoGuide() {
  const [detail1, setdetail1] = useState('');
  const [detail2, setdetail2] = useState('');
  const [detail3, setdetail3] = useState('');
  const [categories, setCategories] = useState({});
  const [image, setImage] = useState(null);

  const navigateTo = useNavigate();

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setCategories((prevCategories) => {
      return {
        ...prevCategories,
        [name]: value,
      };
    });
  }

  function handleImageChange(event) {
    setImage(event.target.files[0]);
  }

  function register(event) {
    event.preventDefault();

    const rondoData = {
      detail3,
      detail1,
      detail2,
      categories,
      image,
    };

    localStorage.setItem('rondoData', JSON.stringify(rondoData));

    navigateTo('/')

    alert('Rondo Editted!'); 
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
            <span className="details">detail1</span>
            <input type="text" placeholder="Enter your detail1"  name="detail1"   required/>
          </div>
          <div className="input-box">
            <span className="details">detail2</span>
            <input type="text" placeholder="Enter your detail2"  name="detail2"   required/>
          </div>
          <div className="input-box">
            <span className="details">detail3</span>
            <input type="text" placeholder="Enter your detail3" name="detail3"    required/>
          </div>
  
        <div className='sort'>
            <div className='sort1'>
       <label className="checkbox">
       <input type="checkbox" name="option1" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">option1</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="option2" onChange={handleInputChange} />
      <span className="checkmark"></span>
      <span className="label-text">option2</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="option3" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">option3</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="option4" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">option4</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="option5" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">option5</span>
    </label>
    </div>
    <div className='sort2'><label className="checkbox">
       <input type="checkbox" name="option6" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">option6</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="option7" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">option7</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="option8" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">option8</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="option9" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">option9</span>
    </label>
    <label className="checkbox">
       <input type="checkbox" name="option10" onChange={handleInputChange}/>
      <span className="checkmark"></span>
      <span className="label-text">option10</span>
    </label>

    </div>
    <div className='upload'> 
    <span className="label-text">Image</span>
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
