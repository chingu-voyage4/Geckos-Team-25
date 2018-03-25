import React, { Component } from "react";
import "./fontawesome-all";
import "./Navbar.css";
import {Boards} from "./Boards";
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
class Board_button extends React.Component {
  render(){
    return (
  <div className="board_button" >
 <input type="search" id="board-button-search" placeholder="Find boards by name..."/>
 <div className=" flexy recent-boards">
 Personal Boards
   <div className="flexy " >
    
   {/* {Boards.displayBoards()} */}
   </div>
 </div>
 <div className=" flexy ">
   Team Boards
   <div>
     
   </div>
 </div>
 <div className="flexy links">
   <a href="#" >Create new board...</a>
   <a href="#" >Always keep this menu open</a>
   <a href="#" >See closed boards...</a>
 </div>

                  </div>);
  }
}
class Search_modal extends React.Component {
  constructor(props){
    super(props);
    
  }

  render(){
    return(
      <div className="search-modal">
        <div className="flexy">
        <p><strong>Saved Searches</strong></p>
        <div>My cards <a href="#" id="myCard">@Me</a></div>
        </div>
      <hr></hr>
        <div className="flexy">
        Refine your search with operators like @member, #label, is:archived, and has:attachments. <a href="#" id="learn-more">Learn more…</a>
        </div>
        <div className="flexy">
        <strong>Looking for help using TrelloGeck?</strong>
        <p>Visit our <a href="#">help site</a> or read the <a href="#">getting started guide</a></p>
        </div>
      </div>
    );
  }


}
class Create_Popup extends React.Component{
  constructor(props){
    super(props);
      this.CreateBoard=props.CreateBoard;
      this.CreateTeam=props.CreateTeam;

  }

render(){

  return(
    <div className="plus-popup">
      <div className="plus-popup-heading">
        Create
        <hr/>
      </div>
      <div className=" plus-popup-create-board">
       <p><strong>Create Board...</strong></p>   
       <p>A bord is made up of cards ordered on lists.
         Use it to Manage projects, track information, or organize
         anything </p> 
      </div>
      <div className="plus-popup-create-team">
      <p><strong>Create Team...</strong></p>   
       <p>A team is a group of boards and people. USe it to
          organize your company,side hustle, family, or friends. </p> 

      </div>

    </div>

      
  );

}



}


export class Navbar extends Component{
  render(){
return(
      <ul className="navbar-registered">
          <li className="boards">
                <a className="board-button" href="#"><i className="fab fa-trello"></i> Boards</a>
                <div className="board-button-content">
                   <Board_button/>
                </div>
          </li>
          <li className="search"> <input id="sb" type="text" name="search" placeholder="Buscar lol search..."/>
                <Search_modal/>
          
          </li>
          <li className="logo"> <div><i className="fab fa-trello"></i>Trello Geck</div></li>
          <li className="button-group">
          <div className="plus"><i className="fas fa-plus"></i>
          <Create_Popup/>
          </div>
          <div className="info"><i className="fas fa-info-circle"></i>
          
          </div>
          <div className="bell"><i className="far fa-bell"></i>
          
          </div>
          <div className="profile-pic"><div>PH</div>
          
          </div>
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



