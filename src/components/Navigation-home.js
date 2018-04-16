import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants";
import  Navbar from './Navbar';
import logo from "../logo.svg";

import { Jumbotron, Button } from "react-bootstrap";
const NavigationHome = () =>(
    <div>
          <Navbar />   
        <img src={logo} />
        <Jumbotron>
        <Link to={routes.HOME}><Button>Welcome back to Trello Geck App!</Button></Link>
            <ul className="main-home">                
                <li className="text2"><Link to={routes.SIGN_IN}><br/>Login to Trello Geck App</Link></li>
                <li className="text3"><a href="#"><button><i className="fab fa-google"></i></button></a><br/><Link to={routes.SIGN_IN}> Login with Google</Link></li>
                <li className="text"><a href="#"><i className="far fa-envelope"></i></a><Link to={routes.SIGN_IN}>Login with Email and Password</Link></li>  
                <li className="text"><br/><a href="#"></a><Link to={routes.SIGN_IN}>Login with SSO</Link></li>  
            </ul>
        </Jumbotron>
    </div>
)

export default NavigationHome;

