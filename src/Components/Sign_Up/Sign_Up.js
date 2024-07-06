import React from 'react'
import './Sign_Up.css'

function Sign_Up() {
  return (
    <div className="container">
        <div className="container__h1">
            <h1>Sign Up</h1>
        </div>
        
        <div className="container__p">
            <p>Already a member?</p>
            <a href="#">Login</a>
        </div>
        <form className="form__group">
            <div className="container__section">
                <label for="role">Role</label>
                <select id="role" name="role">   
                <option disabled selected value>Select Role</option>
                <option value="Doctor">Doctor</option>
                <option value="Patient">Patient</option>
                </select>
            </div>
            
            <div className="container__section">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required/>
            </div>

            <div className="container__section">
                <label for="phone">Phone</label>
                <input type="number" id="phone" name="phone" required/>
            </div>

            <div className="container__section">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </div>

            <div className="container__section">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required/>
            </div>
            
            <div className="container__buttons">
                <button type="submit" class="button__blue">Submit</button>
                <button type="reset" class="button__red">Reset</button>
            </div>
        </form>
    </div>
  )
}

export default Sign_Up
