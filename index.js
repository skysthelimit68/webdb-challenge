const server = require('./api/server.js');

port = 4000;

server.listen(port, () => {
    console.log(`\n** API running on http://localhost:${port} **\n`)
})