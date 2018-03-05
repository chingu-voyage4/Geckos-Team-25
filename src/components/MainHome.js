import React, { Component } from 'react';
import './fontawesome-all';
import './MainHome.css';
class MainHome extends Component{
    render(){
return(
        <ul className="main-home">
            <li className="text1">Welcome back to Trello! </li>
            <li className="text2">Login to Trello</li>
            <li className="text3"> <a href="#"><button><i class="fab fa-google"></i>Login with Google</button></a></li>
            <li className="text"><a href="#"><i class="fas fa-email"></i>Login with Email and Password</a></li>  
            <li className="text"><a href="#">Login with SSO</a></li>  
                            
        </ul>
 ); }
}
export default MainHome;