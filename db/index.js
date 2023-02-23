const pgp = require("pg-promise")({}); // ususally we pass InitOptions
// const db = pgp("postgress://localhost:5432/grovers_groomers"); //default port is 5432
// const db = pgp("jdbc:postgresql://localhost:5432/grovers_groomers"); //default port is 5432
const databaseConfig = {
  host: "localhost",
  port: 5432,
  database: "grovers_groomers",
  user: "postgres",
  password: "postgres",
};
const db = pgp(databaseConfig);
module.exports = db;
