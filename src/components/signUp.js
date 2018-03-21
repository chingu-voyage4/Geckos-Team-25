import React, { Component } from 'react';
import './fontawesome-all';
import './signUp.css'

import { Link } from "react-router-dom";
import * as routes from "../constants";
import axios from "axios";

import { 
    Button, 
    Form, 
    FormControl, 
    FormGroup, 
    Col,
    Grid,
    Row,
    Well,
    ControlLabel,
    Glyphicon,
    Alert
 } from "react-bootstrap";

class SignUp_Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:{
                username:'',
                email:'',
                password:''

            },
            loading:false,            
            errors:{},
            saved:false
        }
    }

    onChange = e => {
        this.setState({data:{...this.state.data,[e.target.name]:e.target.value}});
    }


    onSubmit = (e) => {
        e.preventDefault();
        const state = this.state.data;
        axios.post('api/user/register/',state)
        .then(res => {
            this.setState({saved:true});
            console.log(res);
        })
        .catch(error => {
            this.setState({errors:error.response.data.errors.errors})
        })

    }


    render(){

    const {errors, data, loading, saved} = this.state;
        
            return( 
               
              <div>
                <Well>
                    
                <Grid>
                    <Row className="show-grid" >     
                    <Col sm={6} md={12}>         
                <Form horizontal onSubmit={this.onSubmit}>
              
                <Well>
                    <h1 id="login-form-header">Sign Up to Trellogeck App</h1>
                    <p> or  <Link to ={routes.SIGN_IN}>Sign In to your account</Link></p>
                 </Well>   
                 <FormGroup controlId="logSinForm" validationState={errors.username ? "error" : null}>
                 {errors.username && <Alert bsStyle="danger">
                    <h4>Oh, You Got an Error</h4>
                   {Object.keys(errors).map((key) => 
                        <p key={key}>{errors[key].message}</p>                                 
                    ) }
                 </Alert> }
                {saved &&  <Alert bsStyle="success">
                    <h4>Oh, Great your Data Was Saved!</h4>                  
                </Alert> }
                  <Col  sm={2}>
                    Username
                  </Col>
                  <Col sm={10}>
                    <FormControl onChange={this.onChange} type="text" name="username" placeholder="username" />
                                   
                  </Col>
                </FormGroup>
                <FormGroup controlId="loginForm" validationState={errors.email ? "error" : null}>
                  <Col  sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <FormControl onChange={this.onChange} type="email" name="email" placeholder="Email" />
                                   
                  </Col>
                </FormGroup>
              
                <FormGroup controlId="password">
                  <Col sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl onChange={this.onChange} type="password" name="password"  placeholder="Password" />
                  
                  </Col>
                </FormGroup>        
                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">Sign Up</Button>
                  </Col>
                </FormGroup>
              </Form>
              </Col>
              </Row>
              </Grid>
              </Well> 
              </div>
                   
      
 ); }
}


export default SignUp_Form;
