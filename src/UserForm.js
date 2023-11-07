import React from 'react'


const UserForm = () => {
  return (
      
    <div className='container-fluid'>
      <div className='row'>
      <div className='col-lg-6'>
      <img src="https://images.unsplash.com/photo-1616036740257-9449ea1f6605?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2V0JTIwYmVhY2h8ZW58MHx8MHx8fDA%3D&w=1000&q=80" height="385" width="100%" alt='sunset_image' ></img>
     </div>


        <div className='col-lg-6 input-form'>
        
        <form>
        <h1>Join Our Newsletter </h1>
      <label className='label_mail'>Email</label><br/>
      <input type='text'name='email' className='input_mail'/><br/>
      <label className="label_number">Mobile Phone Number</label><br/>
      <input type='text'name='Mobile Phone Number' className='input_number'/><br/>
      <button type='Subscribe' className='button'>Subscribe</button><br/>
      </form>
      </div>
     
    
    </div>
    </div>
  )
}

export default UserForm
