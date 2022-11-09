import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('users_test_abel', {
    nombre: {
        type: DataTypes.STRING
    },
    segundoNombre: {
        type: DataTypes.STRING
    },
    apellidoPaterno: {
        type: DataTypes.STRING
    },
    apellidoMaterno: {
        type: DataTypes.STRING
    },
    fechaNacimiento: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
},

{
    tableName: 'users_test_abel'
 }
);

db.sync().then(() => {
    console.log('Todo bien');
 }).catch((error) => {
    console.error('No se creo : ', error);
 });

export default Usuario;