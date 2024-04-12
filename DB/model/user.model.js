import mongoose from "mongoose"
import { INTEGER } from "sequelize"
export const schema =mongoose.Schema({

     name:String,
     email:String,
     password:String,
     age:String,
     gender:String,
     phone:String,
    
})
export const usermodel =mongoose.model("user",schema)