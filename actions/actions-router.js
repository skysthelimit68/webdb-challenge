const router = require('express').Router();

const Actions = require('./actions-model.js');

router.get('/', (req, res) => {
    Actions.find()
    .then( actions => {
        res.status(200).json(actions)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})


router.post('/', (req, res) => {
    const newAction = {
        description: req.body.description,
        note : req.body.note,
        completed : false,
        project_id : req.body.project_id
    }
    Actions.addAction(newAction)
    .then( id => {
        res.status(201).json(id)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})



module.exports = router