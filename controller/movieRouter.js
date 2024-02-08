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

router.post("/movie-search",async(req,res)=>{
    let input=req.body
    let data=await movieModel.find(input)
    res.json(data)
})

router.get("/movie-view",async(req,res)=>{
    let data=await movieModel.find()
    res.json(data)
})

module.exports=router