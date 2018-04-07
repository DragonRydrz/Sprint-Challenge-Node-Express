const express = require('express');
const router = express.Router();
const aM = require('../data/helpers/actionModel.js');

router.get('/', (req, res) => {
  aM
    .get()
    .then(actions => {
      res.json(actions);
    })
    .error(error => {
      res.status(500).json(error);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  aM
    .get()
    .then(actions => {
      const requestedAction = actions.filter(
        action => action.id === Number(id)
      )[0];
      requestedAction
        ? res.json(requestedAction)
        : res.status(404).json({ message: 'Requested action does not exist.' });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
