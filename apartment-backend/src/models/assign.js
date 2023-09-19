'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Assign.init({
    task: DataTypes.STRING,
    description: DataTypes.STRING,
  
  }, {
    sequelize,
    modelName: 'Assign',
  });
  return Assign;
};