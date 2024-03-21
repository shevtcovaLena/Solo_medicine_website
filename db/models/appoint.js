const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Appoint extends Model {
    static associate(models) {
      this.belongsTo(models.Service, { foreignKey: 'service_id' });
      this.belongsTo(models.User, { foreignKey: 'user_id' })
    }
  }
  Appoint.init({
    user_id: DataTypes.INTEGER,
    doctor: DataTypes.STRING,
    time: DataTypes.STRING,
    service_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Appoint',
  });
  return Appoint;
};
