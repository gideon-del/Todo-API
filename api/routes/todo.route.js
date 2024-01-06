const express = require("express");
const { httpGetTodos } = require("./todo.controller");
const todoRouter = express.Router();
todoRouter.get("/", httpGetTodos);
module.exports = todoRouter;
