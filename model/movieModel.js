const mongoose=require("mongoose")
const movieSchema=new mongoose.Schema(
    {
        movieName:String,
        actor:String,
        actress:String,
        director:String
    }
)
module.exports=mongoose.model("movie",movieSchema)