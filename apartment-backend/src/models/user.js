'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDay:DataTypes.STRING,
    sex: DataTypes.STRING,
    joinDate:DataTypes.DATE,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.BLOB,
    room:DataTypes.STRING,
    acc_type:DataTypes.STRING,
    groupId:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};