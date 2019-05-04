require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  max: 10
});




const getPictures = (req, res) => {
  pool.query('SELECT * FROM pictures ORDER BY id ASC', (err, results) => {
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    res.json(results.rows);
  })
};

const uploadPicture = (req, res) => {
  pool.query(`INSERT INTO pictures(title, url) VALUES($1, $2)`, req.body, (err, results) => {
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    res.json(results.rows);
  })
}

const updatePicture = (req, res) => {
  pool.query(`UPDATE pictures SET title = ($1) WHERE title = ($2)`, req.body, (err, results) => {
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    res.send('Sucess, we updated!');
  })
}

const deletePicture = (req, res) => {
  pool.query(`DELETE FROM pictures WHERE title = ($1)`, req.body, (err, results) => {
    if (err) {
      return console.error('Error executing query', err.stack)
    }
    res.json(results.rows);
  })
}

module.exports = {
  getPictures,
  uploadPicture,
  deletePicture,
  updatePicture
}