const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3030;
const db = require('./queries');
// const pg = require('pg');
// const db = pgp(process.env.DB_URL);

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/show', db.getPictures, (req, res) => {
  res.json(res.locals.pictures);
});

// app.post('/addPic', )


app.listen(port, () => console.log(`App is up and listening on port ${port}!`));