const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Note = sequelize.define('Note', {
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },
    
);

module.exports = Note;