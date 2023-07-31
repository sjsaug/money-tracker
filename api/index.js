const express = require('express');
const app = express();
const cors = require('cors');
const Transaction = require('./models/transaction.js');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.get("/api/test", (req, res) => {
    res.json("test ok")
});

app.post("/api/transaction", async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL)
    const {price, name, datetime, description} = req.body;
    const transaction = await Transaction.create({price, name, datetime, description})

    res.json(transaction);
});

app.listen(4000);