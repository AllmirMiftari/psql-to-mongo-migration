const { Sequelize } = require("sequelize");
const mongoose = require("mongoose");

// PostgreSQL connection
const sequelize = new Sequelize("coursesdb", "postgres", "postgresql123", {
  host: "localhost",
  dialect: "postgres"
});

// MongoDB connection
const mongo = async () => {
  await mongoose.connect("mongodb+srv://allmirmiftari321:UBAGT8ftlbgfucwC@cluster0.3holnjp.mongodb.net/coursesdb?retryWrites=true&w=majority&appName=Cluster0");
};

module.exports = { sequelize, mongo };
