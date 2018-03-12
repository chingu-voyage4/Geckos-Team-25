import React, { Component } from 'react';
import './fontawesome-all';
import './signUp.css'

import { Link } from "react-router-dom";
import * as routes from "../constants";
class SignUp_Form extends Component{
    render(){
return(
        <form className="signUp-form">
          <div>
           <h1 id="signUp-form-header">Create a Trellogeck App  Account</h1>
           <p> or <Link to ={routes.SIGN_UP}> <a href="#">or sign in to your account</a></Link></p>
            </div>          
           <div>
           <label htmlFor="name">Name <br/></label>
           <input type="text" name="user_name" id="name" placeholder="MaNameYo"/>
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
           <input class="submit-form" type="submit" value="Create New Account" />  
           </div>
            
           <div>
           <button><i className="fab fa-google"></i>  Sign up with Google</button>
           </div>
           <p> By creating an account or using our services you agree if anything breaks, its on you ;) </p>
        
        </form>
      
 ); }
}

class Login_Form extends Component{
    render(){
return(
        <form className="signUp-form">
          <div>
           <h1 id="signUp-form-header">Create a Trellogeck App  Account</h1>
           <p> or <a href="#">or sign in to your account</a></p>
            </div>          
           <div>
           <label htmlFor="name">Name <br/></label>
           <input type="text" name="user_name" id="name" placeholder="MaNameYo"/>
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
           <input class="submit-form" type="submit" value="Create New Account" />  
           </div>
            
           <div>
           <button><i className="fab fa-google"></i>  Sign up with Google</button>
           </div>
           <p> By creating an account or using our services you agree if anything breaks, its on you ;) </p>
        
        </form>
      
 ); }
}
export default SignUp_Form;
