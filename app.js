const express = require("express");
// Express is a node.js web app framework that provides features for building web and mobile apps.
// Used to build single, multi and hybrid page app. Manages servers and routes. SSD, Middleware, Routing, Templating, Debugging
const bodyParser = require("body-parser");
// Body parser is user to process data sent in a HTTP request body. It parses JSON, Text, URL-encoded and raw datasets over HTTP request body
const cors = require("cors");
// Cross Origin Resourse Sharing - policy
// Error obtained after sending Preflight request by browser: No 'Access-Control-Allow-Origin' header is present on the requested resource
// Hence,'cors' module is used to send an Access-Control-Allow-Origin header with a value of "*" on all HTTP requests through CORS policy.
const userRouter = require("./routes/users/users");

const PORT = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // Returns middleware that only parses urlencoded bodies
app.use(bodyParser.json()); // Returns middleware that only parse JSON
app.use("/users", userRouter); // everytime I go to /users I want to build my router

app.listen(PORT, () => console.log("Server running on Port", PORT));
