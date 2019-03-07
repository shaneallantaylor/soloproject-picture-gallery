require('dotenv').config();
const { Pool } = require('pg');
const conString = process.env.DB_STRING;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  max: 10
});




const getPictures = (req, res, next) => {
  pool.query('SELECT * FROM pictures ORDER BY id ASC', (err, results) => {
    console.log('we are inside the client.query!');
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    console.log('results.rows is', results.rows);
    res.json(results.rows);
    // next()
  })
};

const uploadPicture = (req, res) => {
  // const client = new pg.Client(conString);
  // client.connect((err) => {
  //   if (err) {
  //     return console.error('Could not connect to posgres', err);
  //   }
  //   client.query('STRING', (err, results) => {
  //     if (err) {
  //       throw err
  //     }
  //     res.status(200).send('Success!');
  //   })
  //   client.end();
  // })

}

module.exports = {
  getPictures,
  uploadPicture
}