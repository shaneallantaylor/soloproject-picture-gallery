const pg = require('pg');
const conString = process.env.DB_STRING;
const client = new pg.Client(conString);

const getPictures = (req, res) => {
  client.connect((err) => {
    if (err) {
      return console.error('Could not connect to postgres', err);
    }
    client.query('SELECT * FROM pictures ORDER BY id ASC', (err, results) => {
      if (err) {
        throw err
      }
      res.status(200).json(results.rows)
    })
  })
};

module.exports = {
  getPictures
}