import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './fontawesome-all';
import './MainHome.css';
import NavigationHome from "./Navigation-home";
class MainHome extends Component{
    render(){
return( <div class="main-home-window">            
            <NavigationHome/>
        </div>
 ); }
}
export default MainHome;
