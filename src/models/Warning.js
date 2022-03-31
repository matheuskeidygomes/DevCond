import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const Warning = database.define('Warning', {

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
    },
    id_unit: {
        type: Sequelize.INTEGER,
    },
    title: {
        type: Sequelize.STRING,
    }, 
    status: {
        type: Sequelize.STRING,
    },
    datecreated: {
        type: Sequelize.DATEONLY,
    },
    photos: {
        type: Sequelize.STRING
    }
},
{
        tableName: 'warnings',
        timestamps: false
});

