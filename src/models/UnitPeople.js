import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const UnitPeople = database.define('UnitPeople', {

    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    id_unit: {
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.STRING,
    },
    birthdate: {
        type: Sequelize.DATE,
    }
},
{
        tableName: 'unitpeoples',
        timestamps: false
});

