module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Registration", {
    uid: { type: DataTypes.INTEGER, primaryKey: true },
    cid: { type: DataTypes.INTEGER, primaryKey: true },
    registrationdate: { type: DataTypes.DATE }
  }, {
    tableName: "registrations",
    timestamps: false
  });
};
