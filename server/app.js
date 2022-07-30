const express = require('express');
const {sequelize} = require('./models')
const {DataTypes} = require("sequelize");

const app = express();

app.use(express.json())

app.listen({port:3000}, async () => {
    await sequelize.authenticate();
});

