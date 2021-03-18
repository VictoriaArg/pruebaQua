const server = require('express').Router();
const dataFilter = require('../helper/dataFilter');

server.get('/hello', (req, res) => res.send('Hello Uruguay!'));

server.get('/', (req, res) => {
    (function() {
        try { 
            const data = dataFilter.dataFilter()
            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).json({message: err})
            }
        } catch (error) {
            console.log('No file data', error)
        }
    })()
   
});

module.exports = server;
