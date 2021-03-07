import React from 'react'
import "./alreadyLogin.css"

const AlreadyLogin = () => {
    return (
        <>
       
  <div className="container-fluid">
    <div className="container">
      <h3 className="text-center font-weight-bold " style={{marginTop: "30px"}}>Welcome back</h3>
      <hr style={{marginBottom: 50}} />
      <img src="pic1.png" className="mx-auto d-block" alt="Responsive image" />
      <h6>he*********23@gmail.com</h6>
      <h6>********9361</h6>
      <button type="submit" className="btn btn-primary mb-4 btn-block text-center" id="continue">Continue</button>
      <h6>We’ll call or text you to confirm your number. Standard message and data rates apply.</h6>
      <p className="text-muted " style={{paddingLeft: 30}}>Not you ? <a href="#" style={{color: 'black', textDecoration: 'underline', paddingLeft: 2}}>Use another account</a></p>
    </div>
   </div>
   <hr/>
    </>
        
    );
}

export default AlreadyLogin
