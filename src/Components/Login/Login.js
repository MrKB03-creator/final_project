import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="container">
       <div className="container__h1">
            <h1>Login</h1>
       </div> 
       <div className="container__p">
                <p>Not a member?</p>
                <a href="#">Sign Up Here</a>
       </div>
         <form className="form__group">
                <div className="container__section">
                 <label for="email">Email</label>
                 <input type="email" id="email" name="email" required/>
                </div>
                <div className="container__section">
                 <label for="password">Password</label>
                 <input type="password" id="password" name="password" required/>
                </div>
                <div className="container__section-button">
                 <button type="submit" class="button__blue">Submit</button>
                 <button type="reset" class="button__red">Reset</button>
                </div>
            </form>
            <div className="forgot">
                <a href="#">Forgot Password?</a>
            </div>
    </div>
  )
}

export default Login
