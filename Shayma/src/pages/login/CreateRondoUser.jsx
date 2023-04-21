import React, { Fragment, useState } from 'react'


function CreateRondoUser() {
  const [formData, setFormData] = useState({name: '', email: '',phone: '',email: '', gender: ''});

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/messages.json', formData)
      .then(response => {
        console.log(response);
        setFormData({name: '', email: '',phone: '',email: '', gender: ''});
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };
  
  return (
    <Fragment>
       <div className="reg">
     <div className="container1">
    <div className="title">Rondo Admin</div>
    <div className="content">
      <form  method="POST" encType="multipart/form-data">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" name="Fname"  onChange={handleChange}  required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="email" placeholder="Enter your email" name="email" onChange={handleChange}  required/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="tel" placeholder="Enter your number"  name="phone" onChange={handleChange} required/>
          </div>
          <div className="input-box">
            <span className="password">Password</span>
            <input type="password" placeholder="Enter your password"  name="password"  onChange={handleChange} required/>
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1" value="male"  onChange={handleChange}/>
          <input type="radio" name="gender" id="dot-2" value="female" onChange={handleChange}/>
          <input type="radio" name="gender" id="dot-3" value="others" onChange={handleChange}/>
          <span className="gender-title">Gender</span>
          <div className="category">
            <label htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label htmlFor="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
            </label>
          </div>

        </div>
        <div className="button">
              <input type="submit" value="Next" onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  </div>
  </div>
    </Fragment>
  )
}

export default CreateRondoUser