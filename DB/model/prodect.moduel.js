import mongoose from "mongoose"
export const schema =mongoose.Schema({

    title:String,
    desc:String,
    price:String
})
export const prodectmodel =mongoose.model("product",schema)