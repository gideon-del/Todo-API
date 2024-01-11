const express = require("express");
const {
  httpGetTodos,
  httpGetTodo,
  httpChangeTodo,
  httpPostTodo,
} = require("./todo.controller");
const todoRouter = express.Router();
todoRouter.get("/", httpGetTodos);
todoRouter.post("/todo", httpPostTodo);
todoRouter.get("/todo", httpGetTodo);
todoRouter.put("/todo", httpChangeTodo);
module.exports = todoRouter;
