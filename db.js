const {Sequelize} = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  operatorsAliases: false
});

// async function connect() {
//   console.log('Checking database connection...');
//   try {
//     await sequelize.authenticate();
//   } catch (error) {
//     process.exit(1);
//   }
// }
