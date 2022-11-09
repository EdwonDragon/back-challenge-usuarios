import { Sequelize } from 'sequelize';


const db = new Sequelize('testing_ali_fullstack', 'testing', 'Pruebas%ALI%2020', {
    host: 'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
    
    // logging: false,
}

);

export default db;
