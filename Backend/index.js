require ('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const {HoldingModel}= require("./Models/HoldingModel");
const { PositionModel } = require('./Models/PositionModel');
const app = express();
const {OrderModel} = require("./Models/OrderModel");

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.get("/allHolding", async(req,res)=>{
    let allholding = await HoldingModel.find({});
    res.json(allholding);
});

app.get("/allposition",async(req,res)=>{
    let allposition = await PositionModel.find({});
    res.json(allposition);
});

app.post("/newOrder",async(req,res)=>{
    let newOrder = new OrderModel({
        name: req.body.name,
        qty:req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();
    res.send("order saved");
});

app.listen(PORT,()=>{
    console.log("app started..!");
    mongoose.connect(uri);
    console.log("DB connected");
});