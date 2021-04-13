const User = require('./user')
const Pose = require('./pose')
const Sequence = require('./sequence')
const SequencePose = require('./sequencePose');
const UserSequence = require('./userSequence');
const db = require('../db');

Pose.hasMany(Sequence);
Pose.belongsToMany(Sequence, {through: SequencePose});
// Sequence.belongsToMany(Pose);

User.hasMany(Sequence);
User.belongsToMany(Sequence, {through: UserSequence});

module.exports = {
    User,
    Pose,
    Sequence
};