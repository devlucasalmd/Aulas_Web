const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Blog = sequelize.define('Blog', {
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
        }
    },    
);

module.exports = Blog;