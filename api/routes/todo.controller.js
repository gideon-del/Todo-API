const {
  getTodos,
  getTodo,
  changeTodo,
  createTodo,
} = require("../models/todo.model");

async function httpGetTodos(req, res) {
  const { userId } = req.body;
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
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      error: "Todo id not provided",
    });
  }

  const todo = await getTodo(id);

  if (!Array.isArray(todo)) {
    return res.status(404).json(todo);
  }
  return res.status(200).json(...todo);
}
async function httpChangeTodo(req, res) {
  const { id, ...data } = req.body;

  if (!id) {
    return res.status(400).json({
      error: "Todo id not provided",
    });
  }
  if (!data) {
    return res.status(400).json({ error: "No data in body" });
  }
  const transformedTodo = await changeTodo(id, data);
  if (!Array.isArray(transformedTodo)) {
    return res.status(400).json(transformedTodo);
  }
  return res.status(200).json(transformedTodo);
}
async function httpPostTodo(req, res) {
  const { userId, ...data } = req.body;
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
  await createTodo(userId, data);
  return res.status(200).json({ ok: true });
}
module.exports = {
  httpGetTodos,
  httpGetTodo,
  httpChangeTodo,
  httpPostTodo,
};
