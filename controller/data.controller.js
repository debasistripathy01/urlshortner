const nanoid  = require("nanoid")

import express  from "express";
require("dotenv").config();

const Router = express.Router()

const {Validate}  = require("../middleware/validate.middleware")
const {Data} = require("../controller/data.controller");
const middlewareWrapper = require("cors");


Router.post("/short", async(req, res)=>{
        const {origUrl} = req.body;
        const base = process.env.BASE;
        const urlId = nanoid();

        if(Validate(origUrl)){
            try{
                let url = await Data.findOne({origUrl});
                if(url){
                    res.json(url);
                }else{
                    const shortUrl = `${base}/${urlId}`


                    url = new  Data({
                        origUrl,
                        shortUrl,
                        urlId,
                        date: new Date(),
                    });
                    await url.save();
                    res.json(url)
                }

            }catch(err){
                console.log(err);
                console.log("error is in validation");

            }
        }
        else{
            res.status(400).json("Invalid Original URL")
        }
});

module.exports={Router}