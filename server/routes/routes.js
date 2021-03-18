const { Router } = require("express");
const router = Router();
const server = require('express').Router();

server.get('/hello', (req, res) => res.send('Hello Uruguay!'));

server.get('/', (req, res) => {
    

})

module.exports = server;
