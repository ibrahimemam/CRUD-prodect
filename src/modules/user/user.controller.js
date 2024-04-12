import {usermodel} from  '../../../DB/model/user.model.js'
import bcrypt from "bcrypt"

 const signup =async (req, res) => {
  try {
    const newUser = new usermodel(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
const signin =async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usermodel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Sign in successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



const update=async (req, res) => {

  let user=await usermodel.findByIdAndUpdate(req.params.id,req.body,{new:true})
  res.json({message:'sucsess',user})
}


const deleteuser= async (req, res) => {
  let user=await usermodel.findByIdAndDelete(req.params.id,)
  if(user) return res.json({message:'sucsess',user})
  res.json({message:" product not none"})
}


const allget=async (req, res) => {
  try {
    const users = await usermodel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
const search =async (req, res) => {
  try {
    const { name, maxAge } = req.query;
    const users = await usermodel.find({ name: new RegExp(`^${name}`, 'i'), age: { $lt: maxAge } });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
  export{
    signup,signin,update,deleteuser,allget,search
  }




