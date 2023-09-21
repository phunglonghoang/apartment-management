'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fee_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fee_User.init({
    userId: DataTypes.INTEGER,
    feeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fee_User',
  });
  return Fee_User;
};