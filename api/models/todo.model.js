const todos = [
  {
    id: 1,
    name: "Get Job",
    status: false,
    deleted: false,
  },
];

function getTodos(id) {
  return todos.filter((todo) => todo.id === id) || [];
}

module.exports = {
  getTodos,
};
