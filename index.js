// const express = require("express");
// const express = require("express")
import express  from "express"
// const mongoose = require("mongoose");
import mongoose from "mongoose";
const cors = require("cors");
const { config } = require("dotenv");
const {connection} =require("./config/db")
require("dotenv").config()
const Router = require("./controller/data.controller")
const app = express();
app.use(express.json());


app.get("/", (req, res)=>{
    res.send("Connection is established! Welcomen to Homepage")
})


app.use(express.urlencoded({extends: true}))
app.use(express.json())
app.use("/api", Router);



app.listien(process.env.PORT,async()=>{
    try{
        await connection;
        console.log(`mongo DB is connected to${process.env.mongoURL}`);
        // let 
    }catch(err){
        console.log(err)
        console.log("Error in Mongo Connection");
    }
})