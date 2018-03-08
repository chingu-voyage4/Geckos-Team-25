import React, { Component } from 'react';
import './fontawesome-all';
import './login.css'
class Login_Form extends Component{
    render(){
return(
        <form className="login-form">
          <div>
           <h1 id="login-form-header">Create a Trellogeck App  Account</h1>
           <p> or <a href="#">or sign in to your account</a></p>
            </div>          
           <div>
           <label htmlFor="name">Name<br/><br/></label>
           <input type="text" name="user_name" id="name" />
           </div>
           <br/>    
           <div>
           <label htmlFor="email">Email<br/><br/></label>
           <input type="email" name="user_email" id="email"  />
           </div>
           <br/>
           <div>
           <label htmlFor="password">Password<br/><br/></label>
           <input type="password" name="user_password" id="password" min="6" />
           </div>
           <br/>
           <div>
           <input class="submit-form" type="submit" value="Create New Account" /><br/><br/>
           </div>
           <br/>
           <div>
           <button><i className="fab fa-google"></i>  Sign up with Google</button>
           </div>
           <p> By creating an account or using our services you agree if anything breaks, its on you ;) </p>
        
        </form>
      
 ); }
}
export default Login_Form;
