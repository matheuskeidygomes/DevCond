import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const Wall = database.define('Wall', {

    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING,
    },
    body: {
        type: Sequelize.STRING,
    },
    datecreated: {
        type: Sequelize.DATE,
    }

},
{
        tableName: 'walls',
        timestamps: false
});

