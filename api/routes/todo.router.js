const express = require("express");
const {
  httpGetTodos,
  httpGetTodo,
  httpChangeTodo,
  httpPostTodo,
} = require("./todo.controller");
const todoRouter = express.Router();
todoRouter.get("/:userId", httpGetTodos);
todoRouter.post("/:userId", httpPostTodo);
todoRouter.get("/:userId/:id", httpGetTodo);
todoRouter.put("/:userId/:id", httpChangeTodo);
module.exports = todoRouter;
