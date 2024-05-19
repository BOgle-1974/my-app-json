/*
mkdir my-app
cd my-app
npm init
npm i body-parser
npm i express
# edit package.json and add ', "start": "node app.js"' to scripts section
npm start
http://localhost:3000/
*/

const express = require('express');
var bodyParser = require('body-parser')
const app = express();
  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
    
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/processform', (req, res) => {
  console.log('Got GET:', req.query);
  const fullname = req.query.fullname;
  const streetname = req.query.streetname;
  res.send( "fullname and streetname are " + fullname + " , " + streetname );
  res.sendStatus(200);
});    

app.post('/processform', urlencodedParser, (req, res) => {
  console.log('Got POST:', req.body);
  const name = req.body.name;
  const maidenname = req.body.maidenname;
  res.send( "name and maidenname are " + name + " , " + maidenname ); 
  res.sendStatus(200);
});
  
app.listen(3000);