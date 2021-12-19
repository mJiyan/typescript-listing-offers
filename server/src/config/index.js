require('dotenv').config();

const { DB_URI, PORT, PRIVATE_KEY } = process.env;

const api = {
  port: PORT || 8081,
  jwtSecretKey: PRIVATE_KEY,
  dbUri: DB_URI,
}


module.exports = {api};