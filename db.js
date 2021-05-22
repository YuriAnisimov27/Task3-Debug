const { Sequelize } = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize(
//   process.env.DB_URL,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "postgres",
//     operatorsAliases: false,
//   }
// );

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
  operatorsAliases: false,
});

async function connent() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connent();

module.exports = sequelize;
