'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fee.belongsToMany(models.User, {through: 'Fee_User'})
    }
  }
  Fee.init({
   name: DataTypes.STRING,
   email: DataTypes.STRING,
   unitPrice: DataTypes.INTEGER,
   oldNumber: DataTypes.FLOAT,
   newNumber: DataTypes.FLOAT,
   




  }, {
    sequelize,
    modelName: 'Fee',
  });
  return Fee;
};