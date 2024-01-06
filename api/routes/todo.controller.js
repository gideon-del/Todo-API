const { getTodos } = require("../models/todo.model");

function httpGetTodos(req, res) {
  const { id: todoId } = req.body;
  if (!todoId) {
    return res.status(400).json({
      error: "Todo id not provided",
    });
  }
  if (isNaN(todoId)) {
    return res.status(400).json({
      error: "Invalid todo id",
    });
  }
  const todos = getTodos(Number(todoId));
  return res.status(200).json(todos);
}

module.exports = {
  httpGetTodos,
};
