const express = require('express');
const knex = require('knex');

const db = require('../data/config/config.js');

const router = express.Router();


router.get('/', (req, res) => {
  db('projects')
  .then(data => {
    res.json(data); 
  })
  .catch (error => {
    res.status(500).json({ message: 'Failed to retrieve data', error });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('projects').where({ id }).first()
  .then(data => {
    res.json(data);
  }) 
  .catch (error => {
    res.status(500).json({ message: 'Failed to retrieve data', error });
  });
});

router.post('/', (req, res) => {
  const projectData = req.body;
  db('projects').insert(projectData)
  .then(ids => {
    db('projects').where({ id: ids[0] })
    .then(newProject => {
      res.status(201).json(newProject);
    });
  })
  .catch (error => {
    console.log('POST error', error);
    res.status(500).json({ message: "Failed to store data", error });
  });
});

module.exports = router;