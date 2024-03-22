// * На главную попадаем ЕСЛИ пользователь ЕСТЬ
// * Если нет, то на логин ИЛИ регистрацию

function secureRout(req, res, next) {
  if (!req.session.name) {
    next();
  } else {
    res.redirect('/');
  }
}

function checkUser(req, res, next) {
  if (req.session.name) {
    next();
  } else {
    res.redirect('/');
  }
}

module.exports = { secureRout, checkUser }
