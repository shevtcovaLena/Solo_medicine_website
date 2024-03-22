const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const Doctors = require('../views/Doctors');
const { Doctor, Service } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const { name } = req.session;
  const response = await Doctor.findAll({
    include: {
      model: Service,
      attributes: ['title'],
    },
  });
  const data = response.map((el) => el.get({ plain: true }));
  console.log(data);
  renderTemplate(Doctors, { name, data }, res);
});

module.exports = router;
