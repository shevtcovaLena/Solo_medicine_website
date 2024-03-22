const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

// const renderTemplate = require('../lib/renderTemplate');
// const Register = require('../views/components/Register');

const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  const { name, email, password, admin } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ err: 'Такой пользователь уже существует!' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: hash, admin });
      req.session.admin = newUser.admin;
      req.session.name = newUser.name;
      req.session.userId = newUser.id;
      req.session.save(() => {
        res.json({ msg: 'Пользователь зарегистрирован!' });
      });
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.json({ err: 'Такой пользователь не найден!' });
    } else {
      const checkPass = await bcrypt.compare(password, user.password);
      if (!checkPass) {
        res.json({ err: 'Неверный пароль!' });
      } else {
        req.session.admin = user.admin;
        req.session.name = user.name;
        req.session.userId = user.id;
        req.session.save(() => {
          res.json({ msg: 'Вы успешно авторизованы!' });
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.json({ err: 'Ошибка при авторизации!' });
  }
});

module.exports = router;

module.exports = router;
