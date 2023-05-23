const mainRouter = require("express").Router();
const Main = require("../../components/Main");
const MyCardsPage = require("../../components/MyCardsPage");
const { Card, User } = require("../../db/models");

mainRouter.get("/", async (req, res) => {
  try {
    const cards = await Card.findAll({
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
        },
      ],
    });
    res.send(res.renderComponent(Main, { cards }));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

mainRouter.get("/my-cards", async (req, res) => {
  try {
    const cards = await Card.findAll({
      where: { userId: req.session.userId },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
        },
      ],
    });
    res.send(res.renderComponent(MyCardsPage, { cards }));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

mainRouter.post("/my-cards", async (req, res) => {
  try {
    const cards = await Card.create({
      name: req.body.name,
      url: req.body.url,
      price: req.body.price,
      destruction: req.body.destruction,
      userId: req.session.userId,
    });
    res.redirect("/my-cards");
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
-mainRouter.post("/:id/delete", async (req, res) => {
  const id = Number(req.params.id);
  await Card.destroy({
    where: { id },
    userId: req.session.userId,
  });
  res.redirect("/");
});

module.exports = mainRouter;
