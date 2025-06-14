module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Course", {
    cid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    duration: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    categoryid: { type: DataTypes.INTEGER }
  }, {
    tableName: "course",
    timestamps: false
  });
};
