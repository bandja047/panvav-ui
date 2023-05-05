import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
      <div className='container'>
 <form className='sign-form'>
        <div className="brand-logo"></div>
        <div className="brand-title">PANVAC</div>
        <div className="inputs">
          <label>EMAIL</label>
          <input className='input-sign' type="email" placeholder="example@test.com" />
          <label>PASSWORD</label>
          <input className='input-sign' type="password" placeholder="Min 6 charaters long" />
          <div className='not-account'> you have an account? <Link to="/login" className='link' >click here to sign in</Link></div>
          <button type="submit">REGISTER</button>
     
        </div>
        </form>
      </div>
       
            
      
    );
};

export default RegisterPage;