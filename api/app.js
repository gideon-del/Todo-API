const express = require("express");
const morgan = require("morgan");
const todoRouter = require("./routes/todo.router");

const app = express();
app.use(express.json());
app.use(morgan("combined"));
app.use("/todos", todoRouter);
module.exports = app;
