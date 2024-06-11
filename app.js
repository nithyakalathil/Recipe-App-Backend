const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const { recipemodel } = require("./models/recipe")


const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://nithya:nithya913@cluster0.r7eo1il.mongodb.net/recipeesdb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input=req.body
    let recipe=new recipemodel(input)
    recipe.save()
    res.json({status:"Success"})
    console.log(recipe)

    
})

app.get("/view",(req,res)=>{
    recipemodel.find().then((data)=>{
        res.json(data)
    })
})

app.listen(8082,()=>{console.log("server started")})