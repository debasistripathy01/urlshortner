import {express}  from ("express");

const {Data} = require("../module/data.module") 
const modelRouter = express.Router();


modelRouter.get("/:urlId", async(req, res)=>{
    try{
        const url = await Data.findOne({urlId: req.params.urlId});
        if(url){
            await Data.updateOne({})
        }

    }catch(err){
        console.log(err)
        console.log("Error at ROuter of URL ID")
    }
})