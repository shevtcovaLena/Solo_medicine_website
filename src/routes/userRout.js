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
      console.log('hash:', hash);
      const newUser = await User.create({ name, email, password: hash, admin });
      req.session.admin = newUser.admin;
      req.session.name = newUser.name;
      console.log(req.session);
      req.session.save(() => {
        res.json({ msg: 'Пользователь зарегистрирован!' });
      });
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = router;
