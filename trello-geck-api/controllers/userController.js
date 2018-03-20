/**
 * User controller
 */
const userModel  = require("../models/UserSchema");



const users = {}; //initialize our user object

/**
 * User Login
 */
users.login = (req, res) =>{
    
   const { email, password} = req.body;
   //Check if there are upcoming data
   if(!email || !password){
     res.status(400);
     res.send({ errors:{authErrors:{message:"Email or password incorrect"}}});
   }

   userModel.findOne({email:email})
   .then(user => {             
       if(user && userModel.isValidPassword(password)){
           res.json({user:userModel.toAuthJSON(user) });
       }else{
           res.status(400).json({"errors": {authErrors:{message:"Invalid Credentials"}}});
       }
   })
  

}

/**
 * IN case we want to close sesssion via server
 */
users.logout = (req, res) =>{
    res.status(200).send({auth:false,token:null});
}


/**
 * User register
 */
users.saveUser = (req, res) =>{
    //pick up variables
    const { email, username, password } = req.body;
    const passwordHash = userModel.setPassword(password);
    const nUser = new userModel({email:email, username:username, passwordHash:userModel.getPasswordHash()});   
  //save user
    nUser
        .save()
        .then(user =>{
            res.json({ token:userModel.toAuthJSON(user)});})
        .catch(error => res.status(400).json(error)) ;      
}



    
module.exports = users;