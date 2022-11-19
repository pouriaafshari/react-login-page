import './login.css';
import logo from './images/syncee-logo-300px.png';
import googlelogo from './images/google.png';
import elem1 from './images/elem1.png';
import elem2 from './images/elem2.png';
import elem3 from './images/elem3.png';
import elem4 from './images/elem4.png';
import elem5 from './images/elem5.png';


function login() 
{
  return (
    <div id='login-content'>
      <div id='left-part'>
        <div id='input-part'>
          <img src={logo} alt='syncee logo' id='logo'/>
          <div id='title'>Login</div>
          <button id='google-button'><img src={googlelogo} />Sign in with Google</button>
          <div id='or'><span>or sign in with Email</span></div>
          <div>
            <div className='input-title'>Email*</div>
            <input className='input' />
          </div>
          <div>
            <div className='input-title'>Password*</div>
            <input className='input' />
          </div>
          <div id='pword-options'>
            <input type={'checkbox'} name='rememberme' id='rememberme'/>
            <a href='' id='forgot-pword'>forgot my password</a>
          </div>
          <button id='login-button'>Login</button>
          <br/>
          <span id='not-registered'>Not registered yet?<a href=''>create an account</a></span>
        </div>
      </div>


      <div id='right-part'>
        <img src={elem5} alt='speakers' className='right-part-image' id='elem5'/>
        <img src={elem4} alt='speakers' className='right-part-image' id='elem4'/>
        <img src={elem3} alt='speakers' className='right-part-image' id='elem3'/>
        <img src={elem2} alt='speakers' className='right-part-image' id='elem2'/>
        <img src={elem1} alt='speakers' className='right-part-image' id='elem1'/>
      </div>
    </div>
  );
}

export default login;
