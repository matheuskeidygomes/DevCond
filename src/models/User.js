import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const User = database.define('User', {

    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    cpf: {
        type: Sequelize.STRING,
    }
},
{
        tableName: 'users',
        timestamps: false
});

