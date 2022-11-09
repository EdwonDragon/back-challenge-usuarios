"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('testing_ali_fullstack', 'testing', 'Pruebas%ALI%2020', {
    host: 'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
    // logging: false,
});
exports.default = db;
//# sourceMappingURL=connection.js.map