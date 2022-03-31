import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const AreaDisabledDay = database.define('AreaDisabledDay', {

    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    id_area: {
        type: Sequelize.INTEGER,
    },
    day: {
        type: Sequelize.STRING,
    }
},
{
        tableName: 'areadisableddays',
        timestamps: false
});

