const express = require('express');
var cors = require('cors');

class Server {

    constructor( ){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        this.middlewares();
        this.routes();
    }

    //Este middleware es el que toma la carpeta con el 
    //index para renderizar
    middlewares(){

        //CORS
        this.app.use (cors() );

        //Lectura y parseo del body
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes(){
       this.app.use(this.usuariosPath , require('../routes/user.routes'))
    }

    listen(){
        this.app.listen( this.port , () => {
            console.log( `Servidor escuchando en el puerto ${ this.port }` );
        })
    }
}

module.exports = Server