const express = require('express');
const cors = require('cors');
require("dotenv").config();


class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        //io.on('connection', () => { /* … */ });
        this.paths = { }
     
        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );
      

    }

    routes() {
            }

    listen() {
        this.server.listen( this.port, () => {
            console.log('🚀 Servidor corriendo en puerto 🚀', this.port );
        });
    }

}




module.exports = Server;