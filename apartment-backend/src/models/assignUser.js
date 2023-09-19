'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AssignUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AssignUser.init({
    asId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'AssignUser',
  });
  return AssignUser;
};