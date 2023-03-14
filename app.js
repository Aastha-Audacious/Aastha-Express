const express = require("express");
const app = express();
const port = 8080;

//middleware  --use,set
app.use(express.json());  //use in the word of express

//homepage routing
// app.methods("routing path", "handler/ controler")  //get, post, put, delete
app.get("/", (req, res)=>{
    res.status(200).send('<h1>Hello Aastha!</h1>');  //200 for 2
})

//From https://selfregistration.cowin.gov.in/
app.get("/api/v2/auth/generateMobileOTP", (req, res)=>{
    res.status(200).send({"contact no.":"mobile number"});  //200 for 2
})


//server listing/port
app.listen(port, ()=>{
    console.log("Server is running!"); 
})

// https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP  



