import React, { Component } from 'react';
import './boards.css'


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
//Still I have no clue what is going on here but it makes the this statement work as it is suppose to 
    this.displayBoards=this.displayBoards.bind(this);
   }
// this is what is displaying    
    render(){

        return(
            <div className="display-boards">
            <div> <i className="far fa-user"></i><strong id="personal-boards-heading">Personal Boards</strong></div>
                <div className="personal-boards">
                    {this.displayBoards()}
                    {this.createBoards()}

                </div>
            </div>
        );
    }

    displayBoards(){
        
        //Iterating over the Diffrent Names of the Boards and then making them each a dic Component
        return (
        this.state.board.map(n => 
                <div className="regular-board back-ground-image"><p>{n}</p></div>  
            )
        );
    }

    createBoards(event){
        // when this Element is created a new div componet is rendered 


        return (
                <div id="create-modal">
                    <p>Create new board</p>
                </div> 
        );
        
    }
}




 