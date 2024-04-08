const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://databaseuser:sadasdas@ragnarok364.mkbcdbm.mongodb.net/employee")

app.post("/Register",(req,res) =>{
    
})

app.listen(3001,() =>{
    console.log("server is running")
})