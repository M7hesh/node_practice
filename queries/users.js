const db = require("../db/index");

const getUsers = async (req, res, next) => {
  try {
    const users = await db.any("SELECT * FROM users");
    res.status(200).json({ users, status: "success", message: "All users" });
    next();
  } catch (err) {
    console.log(err.message);
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await db.one(`SELECT * FROM users WHERE id = $1`, [id]);
    res.status(200).json({
      user,
      status: "success",
      message: user ? "User found" : "Invalid ID",
    });
    next();
  } catch (err) {
    console.log(err.message);
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = await db.any(
      `INSERT INTO users (name, age) VALUES ($<name>, $<age>) RETURNING *`,
      {
        name: req.body.name,
        age: req.body.age,
      }
    );
    res.status(201).json({ user, status: "success", message: "User created" });
    next();
  } catch (err) {
    console.log(err.message);
  }
};

const updateUser = async (req, res, next) => {
  try {
    await db.any(
      "UPDATE users SET name = ${name}, age = ${age} WHERE id = ${id}",
      {
        name: req.body.name,
        age: req.body.age,
        id: req.params.id,
      }
    );
    res.status(200).json({ status: "success", message: "User updated" });
    next();
  } catch (err) {
    console.log(err.message);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await db.none("DELETE FROM users WHERE id = $1", [req.params.id]);
    res.status(200).json({ status: "success", message: "User deleted" });
    next();
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
