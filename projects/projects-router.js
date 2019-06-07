const router = require('express').Router();

const Projects = require('./projects-model.js');

router.get('/', (req, res) => {
    Projects.find()
    .then( projects => {
        res.status(200).json(projects)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})

router.get('/:id', (req, res) => {
    Projects.findById(req.params.id)
    .then( project => {
        res.status(200).json(project)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})


router.post('/', (req, res) => {
    const newProject = {
        name: req.body.name,
        description: req.body.description,
        completed: false
    }
    Projects.addProject(newProject)
    .then( id => {
        res.status(201).json(id)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})




module.exports = router