import React, { Component } from 'react';
import './fontawesome-all';
import './MainHome.css';
class MainHome extends Component{
    render(){
return( <div class="main-home-window">
        <ul className="main-home">
            <li className="text1"><br/>Welcome back to Trello! </li>
            <li className="text2"><br/>Login to Trello</li>
            <li className="text3"> <br/><a href="#"><button><i class="fab fa-google"></i> Login with Google</button></a><br/></li>
            <li className="text"><br/><a href="#"><i className="far fa-envelope"></i>Login with Email and Password</a></li>  
            <li className="text"><br/><a href="#">Login with SSO</a></li>  
                            
        </ul>
        </div>
 ); }
}
export default MainHome;
