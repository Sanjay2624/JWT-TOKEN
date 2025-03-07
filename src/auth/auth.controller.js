const {User} = require("../../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async(req,res)=>{
   try{
    const {name,email,password}= req.body;

   const user = await User.findOne({email});
   if(user){
    res.json(`user already exists`);
   }
   
   const hashPassword = await bcrypt.hash(password,10);

   const newHashUser = new User({name, email, password:hashPassword});
    const test = await newHashUser.save();
    console.log(test);   
    
   res.json(`user registered succesfully`);
        }catch (err){
            res.json('Error Found')
           }
};


const login = async (req, res) => {
    try {
    const { email, password } = req.body;

     const user = await User.findOne({ email });
        if (!user){
        res.status(400).json({ message: 'Invalid user details' });
    }
    const userFound = await bcrypt.compare(password, user.password);
        if (!userFound) return res.json('Invalid details');

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (err) {
        res.json('Server error');
    }  
};

module.exports = {
    login,register,
};