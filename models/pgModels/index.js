const { DataTypes } = require("sequelize");
const {sequelize} = require("../../config/db");

const User = require("./User")(sequelize, DataTypes);
const Course = require("./Course")(sequelize, DataTypes);
const Category = require("./Category")(sequelize, DataTypes);
const Contact = require("./Contact")(sequelize, DataTypes);
const Registration = require("./Registration")(sequelize, DataTypes);

module.exports = {
  sequelize,
  User,
  Course,
  Category,
  Contact,
  Registration
};
