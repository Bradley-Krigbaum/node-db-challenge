const express = require('express');
const knex = require('knex');

const db = require('../data/config/config.js');

const router = express.Router();


router.get('/', (req, res) => {
  db('resources')
  .then(data => {
    res.json(data); 
  })
  .catch (error => {
    res.status(500).json({ message: 'Failed to retrieve data', error });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('resources').where({ id }).first()
  .then(data => {
    res.json(data);
  }) 
  .catch (error => {
    res.status(500).json({ message: 'Failed to retrieve data', error });
  });
});

router.post('/', (req, res) => {
  const fruitData = req.body;
  db('resources').insert(fruitData)
  .then(ids => {
    db('resources').where({ id: ids[0] })
    .then(newResources => {
      res.status(201).json(newResources);
    });
  })
  .catch (error => {
    console.log('POST error', err);
    res.status(500).json({ message: "Failed to store data", error });
  });
});

module.exports = router;