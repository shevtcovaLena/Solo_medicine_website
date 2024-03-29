const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const Appoints = require('../views/Appoints');
const { Appoint, Service, User } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const { name, admin, userId } = req.session;
  if (admin) {
    const response = await Appoint.findAll({
      include: [{
        model: Service,
        attributes: ['title'],
      },
      {
        model: User,
        attributes: ['name'], 
        required: false
      }],
      order: [
        ['id', 'ASC']
      ]
    });
    const data = response.map((el) => el.get({ plain: true }));
    renderTemplate(Appoints, {
      name, admin, userId, data,
    }, res);
  } else {
    const response = await Appoint.findAll({
      where: { user_id: null },
      include: {
        model: Service,
        attributes: ['title'],
      },
      order: [
        ['id', 'ASC']
      ]
    });
    const data = response.map((el) => el.get({ plain: true }));
    renderTemplate(Appoints, {
      name, admin, userId, data,
    }, res);
  }
});

router.put('/', async (req, res) => {
  try {
    const { appointID } = req.body;
    const { userID } = req.body;
    const appoint = await Appoint.update({ user_id: userID }, { where: { id: appointID } });
    res.json({ status: 'success' });
  } catch (error) {
    console.log(`Ошибка редактирования базы: ${error}`);
    res.json({ status: `Ошибка редактирования базы: ${error}` });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const appoint = await Appoint.update({ user_id: null }, { where: { id } });
    res.json({ status: 'success' });
  } catch (error) {
    console.log(`Ошибка отмены записи в базе: ${error}`);
    res.json({ status: `Ошибка отмены записи в базе: ${error}`});
  }
});

module.exports = router;
