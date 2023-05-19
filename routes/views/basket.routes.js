const mainRouter = require("express").Router();
const Basket = require("../../components/Basket");
const { Card, User, Basket, Order } = require("../../db/models");

mainRouter.get("/basket", async (req, res) => {
    try {
      const cards = await Card.findAll({
        where:{userId: req.session.userId},
        order: [["createdAt", "DESC"]],
        include:[
          {
            model: User
          }
        ]
      });
      res.send(res.renderComponent(Basket, { cards }));
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });