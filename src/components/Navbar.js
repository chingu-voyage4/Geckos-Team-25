import React, { Component } from "react";
import "./fontawesome-all";
import "./Navbar.css";

import { Link } from "react-router-dom";
import * as routes from "../constants";
import { Button } from "react-bootstrap";

/* export class Navbar extends Component {
  render() {
    return (
      <ul className="navbar-registered">
        <li className="boards">
          <a href="#">
            <i class="fab fa-trello" /> Boards
          </a>
        </li>
        <li className="search">
          {" "}
          <input
            id="sb"
            type="text"
            name="search"
            placeholder="Buscar lol search..."
          />
        </li>
        <li className="logo">
          {" "}
          <div>
            <i class="fab fa-trello" />Trello
          </div>
        </li>
        <li className="button-group">
          <div className="plus">
            {" "}
            <i className="fas fa-plus" />
          </div>
          <div className="info">
            {" "}
            <i className="fas fa-info-circle" />
          </div>
          <div className="bell">
            {" "}
            <i className="far fa-bell" />
          </div>
          <div className="profile-pic">
            {" "}
            <div />
          </div>
        </li>
      </ul>
    );
  }
}
*/
// this commented component above is the edited Navbar from our team 
// leader. The Navbar below will be used to navigate in the app

//**************************** *** *** ** ** ************************************************************** */
/************************** ****************** **  ** ****************************************************** */
/************************** ************************** ************************************************** */
class Board_button extends React.Component++ {
  render(){
    return (
  <div>
 <input type="search" id="board-button-search" placeholder="Find boards by name..."/>
 <div className="recent-boards">
   <div>

   </div>
 </div>
 <div className="personal-boards">
   <div>
     
   </div>
 </div>
 <div>
   <a href="#" >Create new board...</a>
   <a href="#" >Always keep this menu open</a>
   <a href="#" >See closed boards...</a>
 </div>

                  </div>);
  }
}


export class Navbar extends Component{
  render(){
return(
      <ul className="navbar-registered">
          <li className="boards"><a href="#"><i className="fab fa-trello"></i> Boards</a>
                <div className="board-button-content">
                   <Board_button/>
                </div>
          </li>
          <li className="search"> <input id="sb" type="text" name="search" placeholder="Buscar lol search..."/></li>
          <li className="logo"> <div><i className="fab fa-trello"></i>Trello Geck</div></li>
          <li className="button-group">
          <div className="plus"> <i className="fas fa-plus"></i></div>
          <div className="info"> <i className="fas fa-info-circle"></i></div>
          <div className="bell"> <i className="far fa-bell"></i></div>
          <div className="profile-pic"> <div ></div></div>
             </li>    
                          
      </ul>
); }
}





//**************************** *** *** ** ** ************************************************************** */
/************************** ****************** **  ** ****************************************************** */
/************************** ************************** ************************************************** */
export class Navbar_Unreg extends Component {
  render() {
    return (
      <ul className="navbar-unregistered">
        <li className="logo-unreg">
          <Link to={routes.HOME}>
            {" "}
            <div>
              <Button>Trello Geck</Button>
            </div>
          </Link>
        </li>

        <li className="search">
          {" "}
          <input
            id="sb"
            type="text"
            name="search"
            placeholder="Search..."
          />
        </li>

        <Button>
        <Link to={routes.SIGN_IN}>
          Login
        </Link>   
        </Button>   

        <Button >  
        <Link to={routes.SIGN_UP}>
          Sign-Up
        </Link>     
        </Button>
      </ul>
    );
  }
}



