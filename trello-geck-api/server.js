
/**
 * Entry API
 */
//******************** DEPENDENCIES ****************************
const express = require("express")///invoke express framework
const app = express();//define our app using express
const mongoose = require("mongoose");
const keys = require('./config/keys');
const Promise = require('bluebird');
const path = require("path");
mongoose.Promise = Promise;
const bodyParser = require("body-parser");//to parser incoming resquest bodies
const morgan = require("morgan");

//******************** CONNECTING TO MONGODB ************************
mongoose.connect(keys.MONGO_URI,{useMongoClient:false});
mongoose.connection.on("error",console.error);
mongoose.connection.once("open",function(){
    console.log("Successfully connected to the Database");
    
});


//#******************** MIDDLEWARES SETTING *********************
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));//Logger 


//******************** HANDLING ROUTES *************************
const routes = require("./routes");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const User = require('./models/UserSchema');

app.use("/",routes);//home route//
app.use("/api/user",authRoute);//authentication route
app.use("/api/user",userRoute);//user routes

//Default Users ...seeds
console.log(User.seed());

//*********Set the static asset whe is on production**************
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.resolve(__dirname, '../build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
    });
}

//######################### SERVER SETTING #####################
const port = process.env.PORT || 3001;
app.listen(port, ()=>{
 console.log(`Express Server running On port: ${port}`);
});