const routerMain = require('express').Router;
const Main = require('../../components/Main')

const { Card } = require('../../db/models');

routerMain.get('/', async (req, res) => {
  try {
    const cards = await Card.findAll({
    });
    res.status(200).renderComponent(Main, { cards, title: 'Main' });
  } catch ({ message }) {
    console.log({ message });
  }
});
