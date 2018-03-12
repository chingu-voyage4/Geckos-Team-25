import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants";
const NavigationHome = () =>(
    <ul className="main-home">
    <li className="text1"><Link to={routes.HOME}><br/>Welcome back to Trello! </Link></li>
    <li className="text2"><Link to={routes.SIGN_IN}><br/>Login to Trello</Link></li>
    <li className="text3"> <Link to={routes.SIGN_IN}><br/><a href="#"><button><i class="fab fa-google"></i> Login with Google</button></a></Link><br/></li>
    <li className="text"><Link to={routes.SIGN_IN}><br/><a href="#"><i className="far fa-envelope"></i>Login with Email and Password</a></Link></li>  
    <li className="text"><Link to={routes.SIGN_IN}><br/><a href="#">Login with SSO</a></Link></li>  
                    
</ul>
)

export default NavigationHome;