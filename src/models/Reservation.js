import { Sequelize } from 'sequelize';
import { database } from '../instances/mysql.js';

export const Reservation = database.define('Reservation', {

    id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
    },
    id_unit: {
        type: Sequelize.INTEGER,
    },
    id_area: {
        type: Sequelize.INTEGER,
    },
    reservation_date: {
        type: Sequelize.DATE,
    }

},
{
        tableName: 'reservations',
        timestamps: false
});

