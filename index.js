// Package imports
const app = require('express');

// Server setup
const server = app;
const PORT = 3060;
const HOSTNAME = '192.168.3.81';

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running in ${HOSTNAME}: ${PORT}`);
});

// req = request, res = response
server.get('/', (req, res) => {
    return res.json({
        lname: 'Gemina',
        fname: 'Roniel',
        mnitial: 'T'
    });
});