'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Order, Card}) {
      this.belongsTo(Order, {foreignKey:"orderId"});
      this.belongsTo(Card, {foreignKey: "cardId"});
    }
  }
  Basket.init({
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Orders",
        key: "id",
      },
     
    },
    cardId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Cards",
        key: "id",
      },
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};