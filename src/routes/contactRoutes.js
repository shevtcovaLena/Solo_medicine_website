const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const Contact = require('../views/Contact');

const router = express.Router();

router.get('/', async (req, res) => {
  const { name } = req.session;
  renderTemplate(Contact, { name }, res);
});

module.exports = router;