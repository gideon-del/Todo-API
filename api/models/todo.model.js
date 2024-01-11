const todoModel = require("./todo.mongo");

async function getTodos(id) {
  const todos = await todoModel.find(
    {
      userId: id,
    },
    ["-__v"]
  );

  return todos;
}

async function getTodo(id) {
  const todos = await todoModel.findById(id, ["-__v"]);
  return [todos];
}
async function changeTodo(id, data) {
  const todo = await todoModel.findByIdAndUpdate(
    {
      _id: id,
    },
    {
      ...data,
    },
    {
      projection: ["-__v"],
    }
  );
  return [todo];
}
async function createTodo(userId, data) {
  let todos = await todoModel.create({
    name: data.name,
    userId: userId,
  });

  return !!todos;
}
module.exports = {
  getTodos,
  getTodo,
  changeTodo,
  createTodo,
};
