const express = require('express');
const app = express();
var cors = require('cors');
const routes = require('./routes/routes')

app.use(cors({
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    origin: "http://localhost:3000"
  }));
  

app.use('/', routes);

app.listen(3001, () => console.log('Qua Excersice server listening on port 3001!'));