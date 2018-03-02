import React, { Component } from 'react';
import './fontawesome-all';
class Navbar extends Component{
    render(){
return(
        <ul>
            <li> <a href="#"><i class="fab fa-trello"></i>Boards</a></li>
            <li> <input type="search" name="search"/></li>
            <li> <div><i class="fab fa-trello"></i>Trello</div></li>
            <li> <i class="fas fa-plus"></i></li>
            <li><i class="fas fa-info-circle"></i></li>
            <li></li>
            <li></li>
        
                            
        </ul>
 ); }
}
export default Navbar;