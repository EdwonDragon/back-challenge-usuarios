"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('users_test_abel', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    segundoNombre: {
        type: sequelize_1.DataTypes.STRING
    },
    apellidoPaterno: {
        type: sequelize_1.DataTypes.STRING
    },
    apellidoMaterno: {
        type: sequelize_1.DataTypes.STRING
    },
    fechaNacimiento: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    },
}, {
    tableName: 'users_test_abel'
});
connection_1.default.sync().then(() => {
    console.log('Todo bien');
}).catch((error) => {
    console.error('No se creo : ', error);
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map