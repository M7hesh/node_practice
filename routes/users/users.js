const users = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../../queries/users");

users.get("/", getUsers); // hit http://localhost:3000/users with GET
users.get("/:id", getUser); // hit http://localhost:3000/users/3 with GET
users.post("/", createUser); // hit http://localhost:3000/users with POST
users.delete("/:id", deleteUser); // hit http://localhost:3000/users/3 with DELETE
users.post("/:id", updateUser); // hit http://localhost:3000/users/3 with PUT

module.exports = users;
