const express = require("express");
const morgan = require("morgan");
const todoRouter = require("./routes/todo.route");

const app = express();
app.use(express.json());
app.use(morgan("combined"));
app.use("/todo", todoRouter);
module.exports = app;
