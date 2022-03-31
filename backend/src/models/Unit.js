import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const Unit = database.define('Unit', {

    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
    },
    id_owner: {
        type: Sequelize.INTEGER,
    }
},
{
        tableName: 'units',
        timestamps: false
});

