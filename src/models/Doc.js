import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const Doc = database.define('Doc', {

    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING,
    },
    fileurl: {
        type: Sequelize.STRING,
    }
},
{
        tableName: 'docs',
        timestamps: false
});

