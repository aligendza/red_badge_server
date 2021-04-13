const { DataTypes } = require("sequelize");
const db = require("../db");
    const Pose = db.define('pose', {
        nameEng: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nameSans: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imgUrl: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        poseCat: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    module.exports = Pose;
