const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const Doctors = require('../views/Services');
const { Doctor } = require('../../db/models')

const router = express.Router();

router.get('/', async (req, res) => {
  const { name } = req.session;
  const data = await Doctor.findAll({ raw: true })
  renderTemplate(Doctors, { name, data }, res);
});

module.exports = router;