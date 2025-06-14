module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Category", {
    categoryid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false }
  }, {
    tableName: "category",
    timestamps: false
  });
};
