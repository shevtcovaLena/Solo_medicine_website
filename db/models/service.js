'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      this.hasMany(models.Doctor, { foreignKey: 'service_id' })
    }
  }
  Service.init({
    title: DataTypes.STRING,
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};