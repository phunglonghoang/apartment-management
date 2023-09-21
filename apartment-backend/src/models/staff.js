'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Staff.belongsTo(models.User)
    }
  }
  Staff.init({
    staffType: {
      type: DataTypes.STRING
    },
    salaryBasic: {
      type: DataTypes.STRING
    },
    OT: {
      type: DataTypes.FLOAT
    },
    bonus:{
      type: DataTypes.STRING
    },
    userId:{
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Staff',
  });
  return Staff;
};