import React, { Component } from 'react';
import './fontawesome-all';
import './MainHome.css';
class MainHome extends Component{
    render(){
return(
        <ul className="navbar-registered">
            <li className="text1">Welcome back to Trello! </li>
            <li className="text2">Login to Trello</li>
            <li className="text3"> <a href="#"><i class="fab fa-google"></i> Boards</a></li>
            <li className="button-group"><a href="#"><i class="fab fa-trello"></i>Login with Email and Password</a>    </li>  
            <li className=""><a href="#"><i class="fab fa-trello"></i>Login with SSO</a></li>  
                            
        </ul>
 ); }
}
export default MainHome;