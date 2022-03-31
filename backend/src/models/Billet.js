import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const Billet = database.define('Billet', {

    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    id_unit: {
        type: Sequelize.INTEGER,
    },
    title: {
        type: Sequelize.STRING,
    },
    fileurl: {
        type: Sequelize.STRING
    }
},
{
        tableName: 'billets',
        timestamps: false
});

