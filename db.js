const Sequelize = require('sequelize');
// const models = require('./models');

const db = new Sequelize('yoga-flow', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});
module.exports = db
// sequelize.authenticate().then(
//     function() {
//         console.log('Connected to yoga-flow postgress database');
//     },
//     function(err){
//         console.log(err);
//     }
// );
// const User = require('./models/user')
// const Pose = require ('./models/pose')
// const Sequence = require ('./models/sequence')
// // const Position = require ('./models/position')

// Pose.hasMany(Sequence);
// Sequence.belongsToMany(Pose);

// User.hasMany(Sequence);
// Sequence.belongsTo(User);

// // Sequence.hasMany(Position)
// // Position.belongsTo(Sequence)

// module.exports = {
// User,
// Pose,
// Sequence
// };
