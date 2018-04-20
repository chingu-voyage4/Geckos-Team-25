import React, { Component } from 'react';
import './Boards.css'
import {background} from './background pics/BulkData';

import { Link } from "react-router-dom";
import * as routes from "../constants";
import SignUp from './signUp';


// Really should have come up with a better name but this is the main page displaying the diffrent Boards 
// to go into the diffrent sub boards
export class Boards extends Component{
   constructor(props){
    super(props);
// A placeholder that should remain just to work as filler
// Board array should be changed to a map later on or an object to tidy things up a bit and allow easier exporting 
// to the other componnets or to the API to the database for storage
    this.state={ board : ["Welcome!, take a tour", "Make super bomb pancakes"]   };
    this.handleCreate=this.handleCreate.bind(this);
//Still I have no clue what is going on here but it makes the this statement work as it is suppose to 
    
   }
// this is what is displaying    
    render(){

        return(
            <div className="display-boards">
            <div> <i className="far fa-user"></i><strong id="personal-boards-heading">Personal Boards</strong></div>
                <div className="personal-boards">
                    <DisplayBoards boards={this.state.board}/>
                    {this.createBoards()}
                    {this.handleCreate()}

                </div>
            </div>
        );
    }

   

   handleCreate(){
    
       return (
            <CreateModal/>

        );
    
    }
    createBoards(event){
        // when this Element is created a new div componet is rendered 
        

        return (
                <div id="create-modal" onClick={this.handleCreate()}>
                    <p >Create new board</p>
                   
                </div> 
        );
        
    
    }
    }



 // Create PopUp
 class CreateModal extends React.Component {
    constructor(props){
        super(props);

        this.state={
            boardName:"",
            boardBackgrounds:""
        }
        this.handleCreateModal=this.handleCreateModal.bind(this);
    } 

    handleCreateModal(e){
        this.setState({
            boardName:e.target.value,
        })
    }

    render(){
    return(
         <div className="create-modal-render">
             <div className="CreateModal-Naming">
                 <input type="text/submit" placeholder="Add board title" value={this.state.boardName} onChange={this.handleCreateModal}/>
             </div>
             <div className="CreateModal-background"></div>
         </div>

     );
    }
 }   
// Component to Display Boards
function DisplayBoards(props){
   const styles={
       display:"flex",
   }     
    //Iterating over the Diffrent Names of the Boards and then making them each a dic Component
    return (
<div style={styles}>
    {props.boards.map(n => 
            <div className="regular-board back-ground-image"><p>{n}</p></div>  
        )}
        </div>
    );
}

 