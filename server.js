const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');

const server = http.createServer(app);
/* app.get('/',(req,res) => {
    res.send('hello');
}) */
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.urlencoded({ extended: true}));

app.post('/myaction',(req,res) => {
    res.send('you send the name '+req.body.uname);
   
})

server.listen(3000);
console.log('server is running on port 3000');

