const express = require('express');
const router = express.Router();
const pM = require('../data/helpers/projectModel.js');

router.get('/', (req, res) => {
  pM
    .get()
    .then(projects => {
      res.json(projects);
    })
    .catch(error => res.status(500).json(error));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  pM
    .get()
    .then(projects => {
      const requestedProject = projects.filter(
        project => project.id === Number(id)
      )[0];
      if (requestedProject) {
        res.json(requestedProject);
      } else {
        res
          .status(404)
          .json({ message: `A project with ID ${id} was not found` });
      }
    })
    .catch(error => res.json(error));
});

router.get('/:id/actions', (req, res) => {
  const { id } = req.params;

  pM
    .getProjectActions(id)
    .then(projectActions => {
      if (projectActions[0]) {
        res.json(projectActions);
      } else {
        res.status(404).json({ message: `Project ID ${id} does not exist.` });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
