const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./projectsRouter.js');
const tasksRouter = require('./tasksRouter.js');
const resourcesRouter = require('./resourcesRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/tasks', tasksRouter);
server.use('/api/resources', resourcesRouter);

module.exports = server;
