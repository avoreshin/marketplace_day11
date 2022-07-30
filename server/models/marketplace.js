'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class marketplaces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  marketplaces.init({
    title: DataTypes.STRING,
    photo: DataTypes.STRING,
    description: DataTypes.STRING,
    vendor_info: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'marketplaces',
    tableName: 'marketplaces'
  });
  return marketplace;
};