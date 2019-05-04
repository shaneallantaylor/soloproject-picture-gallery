const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3030;
const db = require('./queries');

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/api/show', db.getPictures);

app.post('/api/upload', db.uploadPicture);

app.post('/api/delete', db.deletePicture);

app.post('/api/update', db.updatePicture);


app.listen(port, () => console.log(`App is up and listening on port ${port}!`));