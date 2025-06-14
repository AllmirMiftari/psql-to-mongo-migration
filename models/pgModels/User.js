module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    uid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    role: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    contactid: { type: DataTypes.INTEGER }
  }, {
    tableName: "users",
    timestamps: false
  });
};
