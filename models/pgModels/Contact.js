module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Contact", {
    contactid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    form: { type: DataTypes.TEXT, allowNull: false }
  }, {
    tableName: "contact",
    timestamps: false
  });
};
