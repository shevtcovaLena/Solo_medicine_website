const express = require('express');

const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

const router = express.Router();

router.get('/', (req, res) => {
  const { name } = req.session;
  renderTemplate(Home, { name }, res);
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('LeopardsCookie');
    res.redirect('/');
  });
});



module.exports = router;
