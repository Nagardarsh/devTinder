//importing express from node modules
const express = require("express");

//instance of an express js application
const app = express();

// request handler
app.get("/user", (req, res) => {
    //this is how you read the query parameter
    console.log(req.query);
    res.send({firstName: "Darshana", lastName: "Nagar"});
});

app.get("/user/:userId", (req, res) => {
    //this is how you read the param
    console.log(req.params);
    res.send({firstName: "Darshana", lastName: "Nagar"});
});

app.get("/user/:userId/:name/:password", (req, res) => {
    //this is how you read the param
    console.log(req.params);
    res.send({firstName: "Darshana", lastName: "Nagar"});
});

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000");
});