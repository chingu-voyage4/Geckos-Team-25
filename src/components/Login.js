import React, { Component } from 'react';
import './fontawesome-all';
import './login.css'


import { Link, withRouter } from "react-router-dom";
import * as routes from "../constants";
import validator from "validator";//form valitation
import axios from "axios";//handling requests/promise based HTTP client
import  {Navbar_Unreg} from './Navbar';


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

class Login_Form extends Component{

    constructor(props){
        //override
        super(props);
        //initial state
        this.state = {
            data:{
                email:'',
                password:''
            }, 
            errors:{},
            loading:false,
            isLoggedIn:false
        }

    }

    /**
     * Handling changes on inputs
     */
    onChange = e => {
            this.setState({data:{...this.state.data, [e.target.name]:e.target.value}});
    }

    /**
     * Handler submit event
     */
    onSubmit = (e) =>{

        e.preventDefault();
        const state = this.state.data;
        const errors = this.validateData(this.state.data);//form validation
        this.setState({errors:errors});//set state with any errors from form validation

        //check if no errors
        if(Object.keys(errors).length === 0){           
            this.setState({loading:true});//set state of loading property to true
            axios.post('/api/user/login', state)
            .then(res => {  
                this.setState({isLoggedIn:true});          
                this.props.history.push(routes.DASHBOARD);//Routing to dashboard pages
            })
            .catch(error => {
                //update state with errors from server
               
                this.setState({errors:error.response.data.errors, loading:false});
            });
        }    
    }

    isLoggedIn=() =>{
        return this.state.isLoggedIn;
    }

    /**
     * Form validations
     */
    validateData = data => {

        const errors = {};
        if(!validator.isEmail(data.email)) errors.email = "Invalid Email";    
        if(!data.password) errors.password = "Complete the password field";
        return errors;
    }

    /**
     * Render view
     */
    render(){
            const {errors, data, loading} = this.state;
         
            return( 
                <div>
                <Navbar_Unreg/>
                <Well>
                <Grid>
                    <Row className="show-grid" >     
                    <Col sm={6} md={12}>         
                <Form horizontal onSubmit={this.onSubmit}>
                {errors.authErrors && <Alert bsStyle="danger">
                    <h4>Oh, You Got an Error</h4>
                    <p>{errors.authErrors.message}</p>
                </Alert>}
                <Well>
                    <h1 id="login-form-header">Login to Trellogeck App</h1>
                    <p> or  <Link to ={routes.SIGN_UP}>Sign up to your account</Link></p>
                 </Well>   
                <FormGroup controlId="loginForm" validationState={errors.email ? "error" : null}>
                  <Col  sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <FormControl onChange={this.onChange} type="email" name="email" placeholder="Email" />
                    <ControlLabel>{errors.email}</ControlLabel>                   
                  </Col>
                </FormGroup>
              
                <FormGroup controlId="password" validationState={errors.password ? "error" : null}>
                  <Col sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl onChange={this.onChange} type="password" name="password"  placeholder="Password" />
                    <ControlLabel>{errors.password}</ControlLabel>
                  </Col>
                </FormGroup>        
                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">Login</Button>
                  </Col>
                </FormGroup>
              </Form>
              </Col>
              </Row>
              </Grid>
              </Well>
            </div>
            ); 
    }
}

export default withRouter(Login_Form);