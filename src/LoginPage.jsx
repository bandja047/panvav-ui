import React from 'react';
import { Link,  useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    const onHandleForm =()=>{

       
        navigate("/qcr")
    }

    return (
        <div className="container">

     <form className='sign-form' onSubmit={onHandleForm}>
        <div className="brand-logo"></div>
        <div className="brand-title">PANVAC</div>
        <div className="inputs">
          <label>EMAIL</label>
          <input className='input-sign' type="email" placeholder="example@test.com" />
          <label>PASSWORD</label>
          <input className='input-sign' type="password" placeholder="Min 6 charaters long" />
          <div className='not-account'> you don't have an account? <Link to="register" className='link' >click here</Link></div>
          <button type="submit">LOGIN</button>
     
        </div>
        </form>
        </div>
       
            
      
    );
};

export default LoginPage;