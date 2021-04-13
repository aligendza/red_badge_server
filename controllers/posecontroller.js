let express = require('express');
const router = express.Router();
let validateSession = require('../middleware/validate-session');
const Pose = require ('../models/pose');
///CREATE
router.post('/create', validateSession, function (req, res) {
   Pose.create({
        // owner: req.user.id,
        nameEng: req.body.nameEng,
        nameSans: req.body.nameSans,
        imgUrl: req.body.imgUrl,
        poseCat: req.body.poseCat,
       
    })
        .then(
            function createSuccess(pose) {
 
                res.json({
                    pose: pose,
                    message: 'Pose added',
                })
            }
        )
        .catch(err => res.status(500).json({ error: err }))
});

///UPDATE 
router.put('/update/:entryId', validateSession, function (req, res) {  
    const updatePose = {
        nameEng: req.body.nameEng,
        nameSans: req.body.nameSans,
        imgUrl: req.body.imgUrl,
        poseCat: req.body.poseCat,
    };

    const query = { where: { id: req.params.entryId, owner: req.user.id } };
    Pose.update(updatePose, query)
        .then((poses) => res.status(200).json(poses)) 
        .catch((err) => res.status(500).json({ error: err }))
});


//DELETE POSE ENTRY
router.delete('/delete/:id', validateSession, function (req,res) {
    const query = {where: {id: req.params.id}};
    Pose.destroy(query)
    .then(() => res.status(200).json({ message: 'Pose Removed'}))
    .catch((err) => res.status(500).json({error: err}))
});


//FIND ALL POSES
router.get('/', (req, res) => {
    Pose.findAll({
        // where: {standing: true}
    })
        .then(poses => res.status(200).json(poses))
        .catch(err => res.status(500).json({ error: err }))
});


module.exports = router;