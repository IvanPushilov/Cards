// const React = require("react");
// const ReactDOMServer = require("react-dom/server");
const basketRouter = require("express").Router();
const Baskets = require("../../components/Basket");
const { Card, User } = require("../../db/models");

basketRouter.get("/basket", async (req, res) => {
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
    res.send(res.renderComponent(Baskets, { cards }));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



// basketRouter.get("/basket", (req, res) => {
//   const element = React.createElement(Baskets);
//   const html = ReactDOMServer.renderToStaticMarkup(element);
//   res.send(`<!DOCTYPE html>${html}`);
// });

module.exports = basketRouter;
