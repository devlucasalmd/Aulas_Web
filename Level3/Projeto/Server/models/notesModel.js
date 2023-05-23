const { Model, DataTypes} = require("sequelize");
const sequelize = require ("../config/database");

class Notes extends Model{}

Notes.init (
    {
        date: {
            type: DataTypes.DATE,
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: "notes",
        timestamps: false,
    }
);

module.exports = Notes;