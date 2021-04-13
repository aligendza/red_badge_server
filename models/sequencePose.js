const { DataTypes } = require("sequelize");
const db = require("../db");
const Pose = require("./pose");
const Sequence = require("./sequence");
const SequencePose = db.define('sequencePose', {
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
    posesInSequence: {
        type: DataTypes.JSON,
        references: {
            model: Pose,
            key: 'id'
        }
    }
})
// Pose.belongsToMany(Sequence, {through: SequencePose});
// Sequence.belongsToMany(Pose, {through: SequencePose});

module.exports = SequencePose;