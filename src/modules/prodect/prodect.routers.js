import {Router} from "express"
const noteroutert=Router()
import { addprodect,deletprodect,getallprodect,updateprodect} from './prodect.controler.js'



noteroutert.post('/products',addprodect );
  
  
  noteroutert.delete('/products/:id', deletprodect);
  
  noteroutert.patch('/products/:id', updateprodect);
  
  noteroutert.get('/products',getallprodect );
export default noteroutert
