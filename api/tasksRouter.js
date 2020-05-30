const express = require('express');
const knex = require('knex');

const db = require('../data/config/config.js');

const router = express.Router();


router.get('/', (req, res) => {
  db('tasks')
  .then(data => {
    res.json(data); 
  })
  .catch (error => {
    res.status(500).json({ message: 'Failed to retrieve data', error });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('tasks').where({ id }).first()
  .then(data => {
    res.json(data);
  }) 
  .catch (error => {
    res.status(500).json({ message: 'Failed to retrieve data', error });
  });
});

router.post('/', (req, res) => {
  const fruitData = req.body;
  db('tasks').insert(fruitData)
  .then(ids => {
    db('tasks').where({ id: ids[0] })
    .then(newTasks => {
      res.status(201).json(newTasks);
    });
  })
  .catch (error => {
    console.log('POST error', err);
    res.status(500).json({ message: "Failed to store data", error });
  });
});

module.exports = router;