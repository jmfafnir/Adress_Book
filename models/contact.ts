import { DataTypes } from "sequelize";
import db from "../db/connection";

const Contact = db.define('Contact',{

    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    cell_phone_number: {
        type: DataTypes.INTEGER
    },
    phone_number: {
        type: DataTypes.INTEGER
    },
    adress: {
        type: DataTypes.STRING
    },
    user_name: {
        type: DataTypes.STRING
    }

})

export default Contact;