import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const UnitPet = database.define('UnitPet', {

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
    race: {
        type: Sequelize.STRING,
    }
},
{
        tableName: 'unitpets',
        timestamps: false
});

