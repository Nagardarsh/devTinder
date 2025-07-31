// console.log("Starting a new project");

//importing express from node modules
const express = require("express");

//instance of an express js application
const app = express();

//request handler
app.use("/hello", (req, res) => {
    res.send("Hello hello hello");
});
//this will only handle GET call to /user
app.get("/user", (req,res) => {
    res.send({firstNmae: "Darshana", lastName: "nagar"});
})

app.post("/user", (req,res) => {
    console.log("Save Data to the DB ");
    res.send("data succesfully saved to the DB");
});

app.delete("/user", (req,res) => {
    res.send("Deleted data succesfully ");
});
//this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
    res.send("Hello from the test!");
});

app.use("/", (req, res) => {
    res.send("Hello Darshana!!!!");
});

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000");
});