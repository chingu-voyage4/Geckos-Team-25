import React, { Component } from 'react';
import './fontawesome-all';
import './login.css'


import { Link } from "react-router-dom";
import * as routes from "../constants";


class Login_Form extends Component{
    render(){
return(
        <form className="login-form">
          <div>
           <h1 id="login-form-header">Login to Trellogeck App</h1>
           <p> or  <Link to ={routes.SIGN_UP}>or sign up to your account</Link></p>
            </div>          
           
                           
           <div>
           <label htmlFor="email">Email <br/></label>
           <input type="email" name="user_email" id="email" placeholder="MaNameYo@sometechcompany.com" />
           </div>
            
           <div>
           <label htmlFor="password">Password <br/></label>
           <input type="password" name="user_password" id="password" min="6" placeholder="Please enter a password" />
           </div>
            
           <div>
           <input className="submit-form" type="submit" value="Login" />  
           </div>
            
           <div>
           <button><i className="fab fa-google"></i>Login with Google</button>
           </div>
           <p> <a href="#">Forgot your Password?</a> </p>
        
        </form>
      
 ); }
}
export default Login_Form;