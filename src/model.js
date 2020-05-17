const { Model, DataTypes } = require('sequelize');

class Laugh extends Model {
  static init(sequelize) {
    super.init({
      laugh: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Laugh;