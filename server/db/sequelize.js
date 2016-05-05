"use strict";

var Sequelize = require("sequelize");
var connection = new Sequelize(process.env.DATABASE, config.username, config.password, config);
