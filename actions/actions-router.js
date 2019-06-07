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

router.get('/:id', (req, res) => {
    Actions.findById(req.params.id)
    .then(action => {
        res.status(200).json(action)
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

router.put('/:id', (req, res) => {
    const changes = {
        description : req.body.description,
        note : req.body.note,
        completed: req.body.completed,
        project_id : req.body.project_id
    }
    Actions.updateAction(req.params.id, changes)
    .then( action => {
        res.status(200).json(action)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})

router.delete('/:id', (req, res) => {
    Actions.removeAction(req.params.id)
    .then( count => {
        res.status(200).json({message: `${count} record has been removed`})
    })
    .catch( error => {
        res.status(500).json(error)
    })
})


module.exports = router