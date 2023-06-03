const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Noticias = sequelize.define('Noticias', {
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
        image:{
            type: Sequelize.STRING,
        },
        category:{
            type: Sequelize.STRING,
            allowNull: false
        },
        url:{
            type: Sequelize.STRING,
        }
    },    
);

module.exports = Noticias;