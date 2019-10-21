const express = require('express');

const app = express();

//middleware
app.use((req,res,next) => {
  console.log('catched in the middleware');
  next();
});

app.get('/',(req,res) => {
  console.log('getting root');
  console.log(req.query);
  console.log(req.params);
  const user = {
    name : 'Enver',
    surname : 'Yilmaz'
  }
  res.send(user);
  //res.send('Hellooo');
});

app.get('/v2/:id',(req,res) => {
  console.log('getting root');
  console.log(req.query);
  console.log(req.params);
  res.status(404).send("not found");
});

app.get('/profile',(req,res) => {
  res.send('getting profile');
});

app.post('/profile',(req,res) => {
  console.log('getting update');
  const user = {
    name : 'POST Ercu',
    surname : 'Yilmaz'
  }
  res.send(user);
  //res.send('Hellooo');
});

app.listen(3000);