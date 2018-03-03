import React, { Component } from 'react';
import './fontawesome-all';
import './Navbar.css';
class Navbar extends Component{
    render(){
return(
        <ul className="navbar-registered">
            <li className="boards"><a href="#"><i class="fab fa-trello"></i> Boards</a></li>
            <li className="search"> <input id="sb" type="text" name="search" placeholder="Buscar lol search..."/></li>
            <li className="logo"> <div><i class="fab fa-trello"></i>Trello</div></li>
            <li class="button-group">
            <li className="plus"> <i class="fas fa-plus"></i></li>
            <li className="info"> <i class="fas fa-info-circle"></i></li>
            <li className="bell"> <i class="far fa-bell"></i></li>
            <li className="profile-pic"> <div ></div></li>
               </li>    
                            
        </ul>
 ); }
}
export default Navbar;