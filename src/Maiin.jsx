import React, { useState } from 'react';
import './Maiin.css'
import A from './assets/A.png'
import F from './assets/F.png'
import G from './assets/G.png'
import { MdKeyboardArrowLeft} from 'react-icons/md'



const Maiin = () => {
  const [page, setPage] = useState('forgot');

  const navigateTo = (newPage) => {
    setPage(newPage);
  };

  if (page === 'forgot') {
    return (
      <div className='forgot-parent'>
        <div className='forgot'>
            <div className='forgot-one'>
                <h3>Forgot Password</h3>
                <h3>Enter Email Address</h3>
                <input type='email' placeholder='exampl@gmail.com'/>
                <h5>Back to sign in</h5>
                <button onClick={() => navigateTo('verify')}>Send</button>
            </div>
            <div className='forgot-two'>
                <h6>or</h6>
                <div className='img'><img src={G} alt="img" style={{width: '20px'}}/><img src={F} alt="img"style={{width: '20px'}} /><img src={A} alt="img"style={{width: '20px'}} /></div>
                <p>Don't have an account?</p>
                <button>Sing Up</button>
            </div>
        </div>
      </div>
    );
  } else if (page === 'verify') {
    return (
      <div className='verify-parent'>
          <div className='verify'>
            <div className='sp'><button onClick={() => navigateTo('forgot')} id='back'> <MdKeyboardArrowLeft/> </button>
          <h2>Verification</h2></div>
          
          <h3>Enter Verification code</h3>
            <div id='code'><button>4</button>
            <button>8</button>
            <button>3</button>
            <button>9</button></div>
            <span><h5>If you din't receive a code!</h5><h5 style={{color: 'rgb(235, 114, 70)'}}>Resend</h5></span>
          <button onClick={() => navigateTo('new')}>Verify</button>
          </div>
      </div>
    );
  } else if (page === 'new') {
    return (
      <div className='new-parent'> 
        <div className='new'>
        <h1>New Password</h1>
        <form  >
          <label htmlFor="">Enter New Password</label>
          <input type="text" placeholder='8 symbls at least'/>
          <label htmlFor=""> Confirm Password</label>
          <input type="text" placeholder='********' />
        </form>
        <button onClick={() => navigateTo('forgot')}>Submit</button>
        </div>
      </div>
    );
  } else {
    return <NotFoundPage />;
  }
};

const NotFoundPage = () => {
  return <h1>Page Not Found</h1>;
};

export default Maiin;
