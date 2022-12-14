import React, { useState } from 'react';
import validator from 'validator';

import './login.css';
import logo from './images/syncee-logo-300px.png';
import googlelogo from './images/google.png';
import elem1 from './images/elem1.png';
import elem2 from './images/elem2.png';
import elem3 from './images/elem3.png';
import elem4 from './images/elem4.png';
import elem5 from './images/elem5.png';
import show from './images/show.png';
import hide from './images/hide.png';

var validEmail = false;
var validPW = false;
var submitEmail = "";
var submitPword = "";

function Login() 
{
  const [emailError, setEmailError] = useState('');
  const [emailtitleClass, setemailTitleClass] = useState('input-title');
  const [emailinputClass, setemailInputClass] = useState('input');
  const validateEmail = (e) => 
  {
    var email = e.target.value

    if (validator.isEmail(email)) 
    {
      setEmailError('');
      setemailTitleClass('input-title');
      setemailInputClass('input');
      submitEmail = email;
      validEmail = true;
    } 
    else 
    {
      setEmailError('* Enter valid Email !');
      setemailTitleClass('input-title title-error');
      setemailInputClass('input input-error');
      validEmail = false;
    }

    
    for (let i = 0; i < email.length; i++)
    {
      if (email.charCodeAt(i) > 122 || email.charCodeAt(i) < 32 || email.match(/[\\\{\}\[\]\'\"\;\:]/))
      {
        setEmailError('* Enter valid characters only ! ');
        setemailTitleClass('input-title title-error');
        setemailInputClass('input input-error');
        validEmail=false;
      }
    }

    CheckLoginButton();
  }

  const [pwordError, setPwordError] = useState('');
  const [pwordtitleClass, setpwordTitleClass] = useState('input-title');
  const [pwordinputClass, setpwordInputClass] = useState('input');
  const validatePword = (e) => 
  {
    const pw = e.target.value;
    var error_text = "* ";
    var strong = true;
    var valid = true;

    // Check for only valid characters
    for (let i = 0; i < pw.length; i++) 
    {
      if (pw.charCodeAt(i) > 122 || pw.charCodeAt(i) < 32 || pw.match(/[\\\{\}\[\]\'\"\;\:]/))
      {
        setPwordError(error_text = '* Enter valid characters only ! ');
        setpwordTitleClass('input-title title-error');
        setpwordInputClass('input input-error');
        valid = false;
      }
    }


    if (valid && pw.length < 5)
    {
      setPwordError(error_text += 'at least 5 characters. ');
      setpwordTitleClass('input-title title-error');
      setpwordInputClass('input input-error');
      strong = false;
    }
    if (valid && pw.match(/[a-z]/) == null)
    {
      setPwordError(error_text += 'need a lower case letter. ');
      setpwordTitleClass('input-title title-error');
      setpwordInputClass('input input-error');
      strong = false;
    }
    if (valid && pw.match(/[A-Z]/) == null)
    {
      setPwordError(error_text += 'need an upper case letter. ');
      setpwordTitleClass('input-title title-error');
      setpwordInputClass('input input-error');
      strong = false;
    }
    if (valid && pw.match(/[0-9]/) == null)
    {
      setPwordError(error_text += 'must include number. ');
      setpwordTitleClass('input-title title-error');
      setpwordInputClass('input input-error');
      strong = false;
    }
    if (valid && pw.match(/[!@#$%^&*]/) == null)
    {
      setPwordError(error_text += 'must include a special character. ');
      setpwordTitleClass('input-title title-error');
      setpwordInputClass('input input-error');
      strong = false;
    }

    if (valid && strong)
    {
      setPwordError('');
      setpwordTitleClass('input-title');
      setpwordInputClass('input');
      
      submitPword = pw;
      validPW = true;
    }
    else
    {
      validPW = false;
    }
    
    CheckLoginButton();
  }

  const [Show, setShow] = useState(false);
  const ShowHide = () =>
  {
    setShow(!Show);
  }

  const CheckLoginButton = () =>
  {
    if (validPW && validEmail)
    {
      document.getElementById('login-button').disabled=false;
      document.getElementById('login-button').onclick = () => {SubmitData(); window.location = "/view";}
    }
    else
    {
      document.getElementById('login-button').disabled=true;
    }
  }

  const SubmitData = () => 
  {
    localStorage.setItem("Email", submitEmail);
    localStorage.setItem("Pword", submitPword);
    localStorage.setItem("Remember", document.getElementById('rememberme').checked);
  }


  return (
    <>
      <div id='bg'></div>
      <div id='login-content'>
        <div id='left-part'>
          <div id='input-part'>
            <img onClick={() => {window.location.href="https://syncee.co/"}} src={logo} alt='syncee logo' id='logo'/>
            <div id='title'>Login</div>
            <button id='google-button' onClick={() => {window.location.href="https://www.google.com/account/about/?hl=en-US"}}><img src={googlelogo} />Sign in with Google</button>
            <div id='or'><span>or sign in with Email</span></div>
            <div>

              <div className={ emailtitleClass } >Email*</div>
              <input placeholder='mail@website.com' className={ emailinputClass } onChange={(e) => validateEmail(e)} />
              <span className='error-text'>{emailError}</span>
            
            </div>
            <div>

              <div className={ pwordtitleClass }>Password*</div>
              <input placeholder='Min. 5 character' type={Show ? 'text' : 'password'} className={ pwordinputClass } onChange={(e) => validatePword(e)} />
              {Show ? (
                <img onClick={ShowHide} src={ hide } id='show-pword' />
              ) : (
                <img onClick={ShowHide} src={ show } id='show-pword' />
              )}
              <span className='error-text'>{pwordError}</span>

            </div>
            <div id='pword-options'>
              <input type={'checkbox'} name='rememberme' id='rememberme'/>
              <a href='' id='forgot-pword'>Forget password?</a>
            </div>
            <button id='login-button' disabled={true}>Login</button>
            <br/>
            <span id='not-registered'>Not registered yet?<a href=''>create an account</a></span>
          </div>
        </div>
        <link to={{pathname:"./"}} />

        <div id='right-part'>
          <img src={elem5} alt='speakers' className='right-part-image' id='elem5'/>
          <img src={elem4} alt='speakers' className='right-part-image' id='elem4'/>
          <img src={elem3} alt='speakers' className='right-part-image' id='elem3'/>
          <img src={elem2} alt='speakers' className='right-part-image' id='elem2'/>
          <img src={elem1} alt='speakers' className='right-part-image' id='elem1'/>
        </div>
      </div>
    </>
  );
}

export default Login;
