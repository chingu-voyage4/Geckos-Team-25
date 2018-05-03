import React, { Component } from 'react';
import './Boards.css'
import {background} from './BulkData';

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
    this.state={ board : [{name:"Welcome!, take a tour", background:"rgb(2, 106, 167)"},   
                          {name:"Make super bomb pancakes",background:"rgb(2, 106, 167)"}
                        ],
                 show  : false,   };
    this.handleCreate=this.handleCreate.bind(this);
    this.createPopupShow=this.createPopupShow.bind(this);
    this.handleUpdate=this.handleUpdate.bind(this);

    
   }
   handleUpdate(next){
    
       this.setState((currentState)=>{
         return{
             board: currentState.board.concat([   next   ])
}})

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
                    {console.log(this.state)}
                </div>
            </div>
        );
    }

  createPopupShow(){
      this.setState({
          show:!this.state.show
      });
  }

   handleCreate(){
    
       return (
            <CreateModal show={this.state.show} toggle={this.createPopupShow} submit={this.handleUpdate}/>

        );
    
    }
    createBoards(event){
        // when this Element is created a new div componet is rendered 
        

        return (

                <div id="create-modal"  onClick={this.createPopupShow}>
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
            name:"",
            background:""
        }
        this.handleCreateModal=this.handleCreateModal.bind(this);
        this.handleCreateModalPic=this.handleCreateModalPic.bind(this);
        this.handleCreateModalPic=this.handleCreateModalPic.bind(this);
        this.submitBoard=this.submitBoard.bind(this);
    } 
   


    handleCreateModal(e){
        this.setState({
            name:e.target.value
        });
    }
    handleCreateModalPic(pic) {
        this.setState({
           background: pic
        });
    }
    submitBoard(){
    
        return(
        <Boards newData={this.state}/>);

       
    }

    render(){
        if (!this.props.show){
            return null;
        }
    return(
         <div className="create-modal-render">
             <div className="create-modal-positioning">
             <div className="CreateModal-Naming">
                <input type="text" placeholder="Add board title" value={this.state.name} onChange={this.handleCreateModal}/>
                <button type="button" onClick={()=>this.props.submit({name:this.state.name,background:`url(${this.state.background})`}) }>Create Board</button>
                <button type="button" onClick={this.props.toggle}>X</button>
             </div>
             <div className="CreateModal-backgrounds">
                 {background.map((b)=>
                     <div className="backgrounds" onClick={()=> this.handleCreateModalPic(b)} style={{"backgroundImage":`url(${b})`, backgroundSize:'cover',height:"70px",width:"90px"}} ></div>
                 )}

             </div>
             </div>
         </div>

     );
    }
 }   
// Component to Display Boards
function DisplayBoards(props){
        
    //Iterating over the Diffrent Names of the Boards and then making them each a dic Component
    return (
<div className="boards" >
    {props.boards.map(n => 
            <div className="regular-board" style={{"background":n.background, backgroundSize:"cover",}} ><p>{n.name}</p></div>  
        )}
        </div>
    );
}

 