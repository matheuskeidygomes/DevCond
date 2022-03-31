import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const WallLike = database.define('WallLike', {

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
    },
    id_wall: {
        type: Sequelize.INTEGER,
    },
    id_user: {
        type: Sequelize.INTEGER,
    }
},
{
        tableName: 'walllikes',
        timestamps: false
});

