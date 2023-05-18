const authApiRouter = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../../db/models");

// статусы
// 200 - ок
// 400 - ошибка клиента
// 500 - ошибка сервера
authApiRouter.post("/register", async (req, res) => {
  try {
    const { name, city, password, password2 } = req.body;

    // проверяем, что пароли совпадают
    if (password !== password2) {
      res.status(403).json({ success: false, message: "Пароли не совпадают" });
      return;
    }

    // проверяем, что в БД нет такого пользователя
    const existingUser = await User.findOne({ where: { name } });
    if (existingUser) {
      res
        .status(409)
        .json({
          success: false,
          message: "Пользователь с таким именем уже существует",
        });
      return;
    }

    // создаём пользователя в БД
    const user = await User.create({
      name,
      city,
      password: await bcrypt.hash(password, 10),
    });

    // авторизация - запоминаем пользователя
    // req.session - хранилище сессии, которое уникально для каждого браузера
    req.session.userId = user.id;

    res.status(201).json({ success: true });

    // res.redirect не работает на фечах. Редиректить нужно в клиентском скрипте
    // res.redirect('/');
  } catch (error) {
    // выводим ошибку в консоль
    console.error(error);

    // возвращаем клиенту ошибку (возможно легла БД или переполнился диск)
    res
      .status(500)
      .json({
        success: false,
        message: "Непредвиденная ошибка сервера. Попробуйте позже.",
      });
  }
});

authApiRouter.post("/login", async (req, res) => {
  const { name, password } = req.body;

  // ищем пользователя в БД
  const user = await User.findOne({ where: { name } });
  // password = '******'
  // user.password - хэш
  // compare - вернёт true если пароль правильный
  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.json({
      success: false,
      message: "Нет такого пользователя либо пароли не совпадают",
    });
    return;
  }

  // авторизация - запоминаем пользователя
  // express-session сам создаст session-id и файл [sid].json
  // положил туда userId
  req.session.userId = user.id;

  res.json({ success: true });
});

module.exports = authApiRouter;
