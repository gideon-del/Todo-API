const fs = require("fs");
const path = require("path");
// const todos = [
//   {
//     id: 1,
//     name: "Get Job",
//     status: false,
//     deleted: false,
//   },
// ];
function userExists(id) {
  return fs.existsSync(path.join(__dirname, `id${id}.json`));
}
function readTodosFile(id) {
  const todoFs = fs.readFileSync(path.join(__dirname, `id${id}.json`));
  return JSON.parse(todoFs.toString());
}
async function getTodos(id) {
  if (userExists(id)) {
    return await readTodosFile(id);
  } else {
    return { error: "Invalid Todo id" };
  }
}
async function writeTodosToFile(userId, data) {
  fs.writeFile(
    path.join(__dirname, `id${userId}.json`),
    JSON.stringify(data),
    (err) => {
      if (err) throw err;
    }
  );
}
async function getTodo(userId, id) {
  if (userExists(id)) {
    const todos = await readTodosFile(userId);
    return todos.filter((todo) => todo.id === id);
  } else {
    return { error: "User does not exist" };
  }
}
async function changeTodo(userId, id, data) {
  const todos = await getTodos(userId);
  if (!Array.isArray(todos)) {
    return todos;
  }
  const todoIndex = todos.findIndex((todo) => todo.id == id);

  if (todoIndex < 0) {
    return { error: "Todo does not exists for the specified user" };
  }
  todos[todoIndex] = { ...todos[todoIndex], ...data };
  await writeTodosToFile(userId, todos);
  return todos;
}
async function createTodo(userId, data) {
  let todos = getTodos(userExists);
  if (!Array.isArray(todos)) {
    todos = [];
  }

  todos.push({
    name: data.name,
    status: false,
    id: todos.length + 1,
    deleted: false,
  });
  await writeTodosToFile(userId, todos);
  return todos;
}
module.exports = {
  getTodos,
  getTodo,
  changeTodo,
  createTodo,
};
