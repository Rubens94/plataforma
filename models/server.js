const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
require('dotenv').config();

const { dbConnection } = require('../database/config');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = createServer( this.app );

        this.paths = {

            plataforma: '/api/plataforma'
        }

        this.dbConnection();

        this.middlewares();

        this.routes();
    }

    async dbConnection() {
        await dbConnection()
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