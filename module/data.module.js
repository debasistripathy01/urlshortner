

// const mongoose = require("mongoose");
import mongoose from "mongoose"

const urlSchema = mongoose.Schema({
    urlId: {
        type: String,
        required: true
    },

    origUrl: {
        type: String,
        required: true
    },
    origiUrl:{
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    clicks: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now()
    }
    
},{
    versionKey: false
})

const Data = mongoose.model("urlData",urlSchema )

module.exports={Data}