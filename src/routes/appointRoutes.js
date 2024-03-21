const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const Services = require('../views/Services');
const { Service } = require('../../db/models')

const router = express.Router();

router.get('/', async (req, res) => {
  const { name } = req.session;
  const data = await Service.findAll({ raw: true })
  renderTemplate(Services, { name, data }, res);
});

module.exports = router;