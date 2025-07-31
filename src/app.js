// console.log("Starting a new project");

//importing express from node modules
const express = require("express");

//instance of an express js application
const app = express();

//request handler
app.use("/", (req, res) => {
    res.send("Hello Anuj Pandey, Lots of love from Darshana. Kisses on yours lips and cheeks, My June... !!!!");
});

app.use("/hello", (req, res) => {
    res.send("Hello hello hello");
});

app.use("/test", (req, res) => {
    res.send("Hello from the test!");
});

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000");
});