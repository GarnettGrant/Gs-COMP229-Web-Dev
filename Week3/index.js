
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => { //Middleware?
  res.send('Hello World!');
});

app.get('/Info', (req, res) => { //Middleware?
    res.send('Hello INFOOOOO World!');
  });

app.get('/Aboutus', (req, res) => { //Middleware?
    res.send('Hello ABOUT USSSS World!');
  });  

app.get('/Contact', (req, res) => { //Middleware?
    res.send('Hello CONTACCTTT World!');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});