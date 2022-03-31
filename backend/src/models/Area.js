import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const Area = database.define('Area', {

    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    allowed: {
        type: Sequelize.INTEGER,
    },
    title: {
        type: Sequelize.STRING,
    },
    cover: {
        type: Sequelize.STRING,
    },
    days: {
        type: Sequelize.STRING,
    },
    start_time: {
        type: Sequelize.TIME,
    }, 
    end_time: {
        type: Sequelize.TIME,
    }
},
{
        tableName: 'area',
        timestamps: false
});

