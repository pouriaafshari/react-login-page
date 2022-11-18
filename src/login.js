import './login.css';
import logo from './images/syncee-logo-300px.png';

function login() 
{
  return (
    <div id='login-content'>
      <div id='left-part'>
        <div id='input-part'>
          <img src={logo} alt='syncee logo'/>
          <div>Login</div>
          <div>See your growth and get consulting support!</div>
          <button>Sign in with Google</button>
          <span>or sign in with Email</span>
          <div>
            <div>Email:</div>
            <input/>
          </div>
          <div>
            <div>Password:</div>
            <input/>
          </div>
          <div>
            <input type={'checkbox'} name='rememberme' id='rememberme'/>
            <a href=''>forgot my password</a>
          </div>
          <button>Login</button>
          <br/>
          <span>Not registered yet?<a href=''>create an account</a></span>
        </div>
      </div>

      <div id='right-part'></div>
    </div>
  );
}

export default login;
