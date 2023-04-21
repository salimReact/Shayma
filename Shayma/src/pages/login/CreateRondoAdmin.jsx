import React, { Fragment, useState } from 'react'


function CreateRondoAdmin() {
  
  return (
    <Fragment>
       <div className="reg">
     <div className="container1">
    <div className="title">Rondo Admin</div>
    <div className="content">
      <form  method="POST" encType="multipart/form-data">
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