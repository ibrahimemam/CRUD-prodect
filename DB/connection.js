import mongoose from "mongoose"
 
export function dbconnection(){
  return mongoose.connect('mongodb://0.0.0.0:27017/crud').then(()=>{
    console.log('connect done')

  }).catch((err)=>{
    console.log('not connect')
  })
}