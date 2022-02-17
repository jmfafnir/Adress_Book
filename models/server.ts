import express, {Application} from 'express';

import userRaoutes from '../routes/contactsRoute';
import cors from 'cors';


import db from '../db/connection';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        contacts: '/api/Adress_Book'

    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '23000';

        /**Conectando base de datos */
        this.dbConnection();

        /**Aqui defino mis middlewares */
        this.middlewares();

        /**Aqui defino las rutas de la api */
        this.routes();
    }

    async dbConnection() {

        try {

           await db.authenticate(); 
           console.log('Database online')
            
        } catch (error) {
            throw new Error("error");
        }

    }

    middlewares(){

        //configurando cors

        this.app.use( cors());

        //leyendo el body de la solicitud 

        this.app.use(express.json());
        
        //Manejo carpeta publica

        this.app.use(express.static('public'));


    }

    routes(){

        this.app.use( this.apiPaths.contacts, userRaoutes )
    }


    listen() {

        this.app.listen(this.port ,() => {
            console.log('Servidor Corriendo en el puerto ' + this.port);
        })
    }
}

export default Server;