require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function runConnection() {
  try {
    await sequelize.authenticate();
    console.log("The database connection was successful.");
  } catch (error) {
    console.error("Unable to connect to database:", error);
  }
}

runConnection();

module.exports = sequelize;
