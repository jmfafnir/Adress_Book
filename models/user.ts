import { DataTypes } from "sequelize";
import db from "../db/connection";


const User = db.define('User',{
    user_name: {
        type: DataTypes.STRING
        /** agregar validaciones correspondiente */
    },
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
})

export default User;