let express = require('express');
const router = express.Router();
let validateSession = require('../middleware/validate-session');
const Sequence = require('../models/sequence');
const SequencePose = require('../models/sequencePose');

///CREATE
router.post('/create', validateSession, function (req, res) {
   Sequence.create({
        owner: req.user.id,
        title: req.body.title,
        posesInSequence: req.body.posesInSequence,
        userId: req.user.id,

    })
        .then(
            function createSequence(sequence) {
 
                res.json({
                    sequence: sequence,
                    message: 'Sequence added',
                })
            }
        )
        .catch(err => res.status(500).json({ error: err }))
});

///UPDATE 
// router.put('/update/:entryId', validateSession, function (req, res) {  
//     const updateSequence = {
//         title: req.body.title,
//         posesInSequence: req.body.posesInSequence,
//     };

//     const query = { where: { id: req.params.entryId, owner: req.user.id } };
//     Sequence.update(updateSequence, query)
//         .then((sequences) => res.status(200).json(sequences)) 
//         .catch((err) => res.status(500).json({ error: err }))
// });

///ADD A POSE 
router.put('/addpose/:sequenceId/:poseId', validateSession, function (req, res) {  
    const addPose = {
        // title: req.body.title,
        posesInSequence: req.body.posesInSequence,
    };
    // const query = { where: { id: req.params.entryId, owner: req.user.id } };
    const query = { where: { id: req.params.id } };
    // Sequence.update(addPose, query)
    //     .then((sequences) => res.status(200).json(sequences)) 
    //     .catch((err) => res.status(500).json({ error: err }))
    SequencePose.create({sequenceId:req.params.sequenceId, poseId:req.params.poseId}
        ).then(result=>res.json(result))
});

// add a pose 2 - attempting
// router.post("/addpose", validateSession, function(req, res) {
//     const addPose = {
//         title: req.body.title,
//         posesInSequence: req.body.posesInSequence,
//     }
//     const query = {
//         where: {
//             id: req.params.entryId,
//             owner: req.user.id
//         }
//     }
//     Sequence.create(addPose)
//     .then((pose) =>
//     res.status(200).json({
//         pose: pose
//     })).catch((err) =>
//     res.status(500).json({
//         error: err,
//     }))

// })

//DELETE SEQUENCE ENTRY
router.delete('/delete/:id', validateSession, function (req,res) {
    const query = {where: {id: req.params.id}};
    Sequence.destroy(query)
    .then(() => res.status(200).json({ message: 'Sequence Deleted'}))
    .catch((err) => res.status(500).json({error: err}))
});


//FIND ALL SEQUENCES
router.get('/', (req, res) => {
    Sequence.findAll({
        // where: {standing: true}
    })
        .then(sequences => res.status(200).json(sequences))
        .catch(err => res.status(500).json({ error: err }))
});

module.exports = router;