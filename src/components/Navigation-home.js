import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants";
const NavigationHome = () =>(
    <ul className="main-home">
    <li className="text1"><Link to={routes.HOME}><br/>Welcome back to Trello! </Link></li>
    <li className="text2"><Link to={routes.SIGN_IN}><br/>Login to Trello</Link></li>
    <li className="text3"><a href="#"><button><i className="fab fa-google"></i></button></a><br/><Link to={routes.SIGN_IN}> Login with Google</Link></li>
    <li className="text"><a href="#"><i className="far fa-envelope"></i></a><Link to={routes.SIGN_IN}>Login with Email and Password</Link></li>  
    <li className="text"><br/><a href="#"></a><Link to={routes.SIGN_IN}>Login with SSO</Link></li>  
                    
</ul>
)

export default NavigationHome;