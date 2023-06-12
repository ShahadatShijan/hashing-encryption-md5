const express = require("express");
const userRouter = require("./routes/user.route");
require("./config/db")
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(userRouter);


module.exports = app