const express = require('express');
const helmet = require('helmet');

const projectRouter = require('../projects/projects-router.js')
const actionRouter = require('../actions/actions-router.js')

const server = express();
server.use(express.json());
server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)

server.use(helmet());

module.exports = server;