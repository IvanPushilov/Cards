const cardsApiRouter = require("express").Router();

const CardViev = require("../../components/Card");
const { Card, User, Order, Basket } = require("../../db/models");

cardsApiRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, url, price, destruction } = req.body;

    // достаём объявление из БД
    const card = await Card.findOne({
      where: {
        id,
        // Проверка на IDOR
        userId: req.session.userId,
      },
      include: [
        {
          model: User,
        },
      ],
    });

    // изменить и сохранить изменения в БД
    card.name = name;
    card.url = url;
    card.price = price;
    card.destruction = destruction;

    await card.save();

    res.json({
      success: true,
      html: res.renderComponent(
        CardViev,
        { card, showButtons: true },
        { doctype: false }
      ),
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// Нужно будет защитить от IDOR - удаление и редактирование
cardsApiRouter.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const removedCount = await Card.destroy({
    // проверка на атаку IDOR. Удаляем только совет от клиента.
    where: { id, userId: req.session.userId },
  });

  // removedCount - количество удалённых записей
  if (removedCount === 0) {
    res
      .status(404)
      .json({
        success: false,
        message: "Нет записи для удаления либо нет доступа",
      });
  } else {
    // зависит от реализации, что мы отправляем в json
    res.json({ success: true });
  }
});
cardsApiRouter.post("/:id/bas", async (req, res) => {
  try {
    const id = Number(req.params.id);
    let order = await Order.findOne({
      where: { userId: req.session.userId, status: true },
    });
    if (!order) {
      order = await Order.create({
        userId: req.session.userId,
        status: true,
      });
    }
    console.log(order, "order");

    await Basket.create({
      orderId: order.id,
      cardId: id,
    });

    const arrBasket = await Basket.findAll({ where: { orderId: order.id } });
    res.json(arrBasket);
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = cardsApiRouter;
