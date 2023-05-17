const bcrypt = require('bcrypt');
const { User, Card } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await User.bulkCreate(
      [
        {
          city: 'spb',
          name: 'Tony',
          password: await bcrypt.hash('123', 10),
          Cards: [
            {
              name: 'FOREST',
              url: 'https://spellmarket.ru/image/cache/image/images/one-en/forest-245x341.jpg',
              price: 31,
              destruction: 'NM',
            },
            {
              name: 'PLAINS',
              url: 'https://spellmarket.ru/image/cache/image/images/one-en/plains-245x341.jpg',
              price: 52,
              destruction: 'NM',
            },
            {
              name: 'SWAMP',
              url: 'https://spellmarket.ru/image/cache/image/images/one-en/swamp-245x341.jpg',
              price: 37,
              destruction: 'NM',
            },
          ],
        },
        {
          city: 'moscow',
          name: 'John',
          password: await bcrypt.hash('321', 10),
          Cards: [
            {
              name: 'MOUNTAIN',
              url: 'https://spellmarket.ru/image/cache/image/images/one-en/mountain-245x341.jpg',
              price: 32,
              destruction: 'NM',
            },
          ],
        },
      ],
      {
        include: [Card],
      }
    );
  },

  async down() {
    await User.destroy({ truncate: { cascade: true } });
  },
};
