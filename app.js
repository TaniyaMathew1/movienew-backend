const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const movieRouter=require("./controller/movieRouter")

const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://taniya:taniya123@cluster0.zld0daa.mongodb.net/movieDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/api/movie",movieRouter)

app.listen(3001,()=>{
    console.log("server running")
})