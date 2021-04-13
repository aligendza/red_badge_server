const { DataTypes } = require("sequelize");
const db = require("../db");
const User = require("./user");
const Sequence = require("./sequence");
const UserSequence = db.define('userSequence', {
    owner: {
        type: DataTypes.INTEGER,
       
    },
    sequenceId: {
        type: DataTypes.INTEGER,
        references: {
            model: Sequence,
            key: 'id'
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
})
User.belongsToMany(Sequence, {through: UserSequence});
Sequence.belongsToMany(User, {through: UserSequence});

module.exports = UserSequence;