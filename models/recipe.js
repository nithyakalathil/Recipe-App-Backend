const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
       "name":{type:String,required:true},
            "id":{type:String,required:true},
            "ingr":{type:String,required:true},
            "image":{type:String,required:true}
    }
)


let recipemodel=mongoose.model("recipees",schema)
module.exports={recipemodel}