const express = require('express');
const cors = require('cors');
const { createServer } = require('http');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = createServer( this.app );

        this.paths = {

            plataforma: '/api/plataforma'
        }

        this.middlewares();

        this.routes();
    }

    middlewares() {

        this.app.use( cors() );

        this.app.use( express.json() );
    }

    routes() {

        this.app.use( this.paths.plataforma, require('../routes/plataforma'));
    } 

    listen() {
        this.server.listen( this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }
}

module.exports = Server;