const express=require("express")
const movieModel=require("../model/movieModel")
const router=express.Router()

router.post("/movie-add",async(req,res)=>{
    let data=req.body
    let movie=new movieModel(data)
    let result=await movie.save()
    res.json({
        status:"success"
    })
})
module.exports=router