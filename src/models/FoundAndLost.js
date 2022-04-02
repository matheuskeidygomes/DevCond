import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const FoundAndLost = database.define('FoundAndLost', {

    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    status: {
        type: Sequelize.STRING,
    },
    photo: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    local: {
        type: Sequelize.STRING,
    },
    datecreated: {
        type: Sequelize.DATEONLY,
    }
},
{
        tableName: 'foundandlost',
        timestamps: false
});

