const {
  getTodos,
  getTodo,
  changeTodo,
  createTodo,
} = require("../models/todo.model");

async function httpGetTodos(req, res) {
  const { userId } = req.params;
  if (!userId) {
    return res.status(400).json({
      error: "user id not provided",
    });
  }
  if (isNaN(userId)) {
    return res.status(400).json({
      error: "Invalid user id",
    });
  }

  const todos = await getTodos(Number(userId));
  if (!Array.isArray(todos)) {
    return res.status(400).json(todos);
  }
  return res.status(200).json(todos);
}
async function httpGetTodo(req, res) {
  const { userId, id } = req.params;
  if (!userId) {
    return res.status(400).json({
      error: "user id not provided",
    });
  }
  if (!id) {
    return res.status(400).json({
      error: "Todo id not provided",
    });
  }
  if (isNaN(userId)) {
    return res.status(400).json({
      error: "Invalid todo id",
    });
  }
  if (isNaN(id)) {
    return res.status(400).json({
      error: "Invalid todo id",
    });
  }
  const todo = await getTodo(userId, +id);

  if (!Array.isArray(todo)) {
    return res.status(404).json(todo);
  }
  return res.status(200).json(...todo);
}
async function httpChangeTodo(req, res) {
  const { userId, id } = req.params;
  const { ...data } = req.body;
  if (!userId) {
    return res.status(400).json({
      error: "user id not provided",
    });
  }
  if (!id) {
    return res.status(400).json({
      error: "Todo id not provided",
    });
  }
  if (isNaN(userId)) {
    return res.status(400).json({
      error: "Invalid todo id",
    });
  }
  if (isNaN(id)) {
    return res.status(400).json({
      error: "Invalid todo id",
    });
  }
  if (!data) {
    return res.status(400).json({ error: "No data in body" });
  }
  const transformedTodo = await changeTodo(userId, id, data);
  if (!Array.isArray(transformedTodo)) {
    return res.status(400).json(transformedTodo);
  }
  return res.status(200).json(transformedTodo);
}
async function httpPostTodo(req, res) {
  const { userId } = req.params;
  const { ...data } = req.body;
  if (!userId) {
    return res.status(400).json({
      error: "user id not provided",
    });
  }

  if (isNaN(userId)) {
    return res.status(400).json({
      error: "Invalid todo id",
    });
  }
  if (!data) {
    return res.status(400).json({ error: "No data in body" });
  }
  const todos = await createTodo(userId, data);
  return res.status(200).json(todos);
}
module.exports = {
  httpGetTodos,
  httpGetTodo,
  httpChangeTodo,
  httpPostTodo,
};
