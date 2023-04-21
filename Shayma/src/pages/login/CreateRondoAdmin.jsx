import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function CreateRondoAdmin() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

const navigateTo = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const rondo = {
      name,
      description,
      date
    };
    const rondoData = JSON.stringify(rondo);
    localStorage.setItem('rondo', rondoData);
    
    alert('Rondo added');

    navigateTo('/')
  }

  return (
    <Fragment>
      <div className="reg">
        <div className="container1">
          <div className="title">Rondo Admin</div>
          <div className="content">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Name</span>
                  <input type="text" placeholder="Enter your name" name="Fname" value={name} onChange={(event) => setName(event.target.value)} required/>
                </div>
                <div className="input-box">
                  <span className="details">Description</span>
                  <input type="text" placeholder="Enter your Description" name="Description" value={description} onChange={(event) => setDescription(event.target.value)} required/>
                </div>
                <div className="input-box">
                  <span className="details">Date</span>
                  <input type="text" placeholder="Enter your Date" name="Date" value={date} onChange={(event) => setDate(event.target.value)} required/>
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Add Rondo"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CreateRondoAdmin
