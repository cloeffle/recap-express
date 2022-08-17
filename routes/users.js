const express = require('express');
const { protectedRoute } = require('../middlewares/protectedRoute');
const router = express.Router();
const { logger } = require('../middlewares/logger');
const { sendUser, createUser } = require('../controller/users');

// router.use(protectedRoute);

router.get('/', sendUser);

router.post('/', createUser);

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  console.log(username, password, id);

  res.json(`User with id ${id} has been updated.`);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json(`User with id ${id} has been deleted`);
});

module.exports = router;
