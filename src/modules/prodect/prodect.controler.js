
import {prodectmodel} from  '../../../DB/model/prodect.moduel.js'

 const addprodect =async (req, res) => {
  try {
    const newProduct = new prodectmodel(req.body);
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
const updateprodect =async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await prodectmodel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: 'Product updated successfully', prodect: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
const deletprodect =async (req, res) => {
  try {
    const { id } = req.params;
    await prodectmodel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
const getallprodect =async (req, res) => {
  try {
    const products = await prodectmodel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
  
  export{
   addprodect,
   deletprodect,getallprodect,updateprodect
  }



  
 

