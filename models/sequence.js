const { DataTypes } = require("sequelize");
const db = require("../db");
const Sequence = db.define('sequence', {
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    posesInSequence: {
        type: DataTypes.JSON,
        allowNull: true
    }
})
module.exports = Sequence;


  // sequence: {
        //     type: DataTypes.ARRAY,
        //     allowNull: true
        // },