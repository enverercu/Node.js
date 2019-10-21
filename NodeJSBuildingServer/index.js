const script2 = require ('./script2.js');

const f = require('fs').readFile;

const http = require('http');//create module 

const a = script2.largeNumber;
const b = 5;

const user = {

  name : 'Enver',
  surname : 'Yilmaz'

}

const server = http.createServer((request,response)=>{
  
  //console.log('headers',request.headers);
  console.log('method',request.method);
  console.log('url',request.url);
  
  response.setHeader('Content-Type','application/json');
  response.end(JSON.stringify(user));
  //response.setHeader('Content-Type','text/html');
  //response.end('<h1>Hellooooo</h1>');
})

server.listen(3000);

//const server = http.createServer(()=>{
//  console.log('I hear you, thanks for the request');
//})

//setTimeout(()=>{
//  console.log(a+b);
//}, 300)



