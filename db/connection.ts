import { Sequelize } from 'sequelize'


const db = new Sequelize('adressbook','jmramirez','manuel.jose23',{
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
})

export default db;