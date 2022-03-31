import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const UnitVehicle = database.define('UnitVehicle', {

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
    color: {
        type: Sequelize.STRING,
    },
    plate: {
        type: Sequelize.STRING
    }
},
{
        tableName: 'unitvehicles',
        timestamps: false
});

