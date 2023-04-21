import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function CreateRondoUser() {
  const [formData, setFormData] = useState({
    Fname: '',
    email: '',
    phone: '',
    password: '',
    gender: ''
  });

  const navigateTo = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    // Navigate to home page
    navigateTo('/');
    alert('User add!'); 

  };

  return (
    <Fragment>
    <div className="reg">
      <div className="container1">
        <div className="title">Rondo Admin</div>
        <div className="content">
          <form method="POST" encType="multipart/form-data">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="Fname"
                  value={formData.Fname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="tel"
                  placeholder="Enter your number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="password">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="gender-details">
              <input
                type="radio"
                name="gender"
                id="dot-1"
                value="male"
                onChange={handleChange}
                required
              />
              <input
                type="radio"
                name="gender"
                id="dot-2"
                value="female"
                onChange={handleChange}
                required
              />
              <input
                type="radio"
                name="gender"
                id="dot-3"
                value="others"
                onChange={handleChange}
                required
              />
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