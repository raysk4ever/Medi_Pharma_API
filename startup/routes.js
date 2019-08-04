const express = require("express");
const Report = require("../routes/report");

module.exports = function(app) {
  app.use(express.json());

  app.use("/api/report", Report);
};
