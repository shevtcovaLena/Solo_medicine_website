'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
    }
  }
  Doctor.init({
    name: DataTypes.STRING,
    profession: DataTypes.STRING,
    text: DataTypes.TEXT,
    service_id: DataTypes.INTEGER,
    photo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};