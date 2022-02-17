import dotenv from 'dotenv'
import Server from './models/server';

/*Configuracion de dotenv para cargar variables de entorno
segun metodologia The Twelve-Factor App methodology.
*/
dotenv.config();

const server = new Server();

server.listen();