const express = require('express');
const {sequelize} = require('./models')
const {DataTypes} = require("sequelize");
const Marketplace = require("./models/marketplace")(sequelize, DataTypes);
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())

app.post('/cart', async(req, res) => {
    const {title, description, photo, vendor_info, price} = req.body
    try {
        const marketplace = await Marketplace.create({title, description, photo, vendor_info, price})
        return res.json(marketplace)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
})

app.get('/products', async(req, res) => {
    try {
        const marketplace = await Marketplace.findAll({})
        return res.json(marketplace)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
})

app.get('/products/:id', async(req, res) => {
    const id = req.params.id
    try {
        const marketplace = await Marketplace.findOne({
            where: {id}
        })
        return res.json(marketplace)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
})
app.listen({port:3000}, async () => {
    await sequelize.authenticate();
});

