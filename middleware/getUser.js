const { User } = require('../db/models');

async function getUser(req, res, next) {
  // если пользователь авторизован получаем его из БД
  const { userId } = req.session;
  // res.locals - хранилище запроса (существует только во время исполнения одного запроса)
  res.locals.user = userId && (await User.findByPk(userId));
  next();
}

module.exports = getUser;
