const express = require('express');
const {mongodbConnect} = require("./config/dbConnection")
const router = require("./src/auth/auth.route")
const dotenv = require('dotenv');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

dotenv.config();
const app = express();

//Middleware
app.use(express.json());

const PORT= process.env.PORT;
// Mongo connect 
mongodbConnect();
app.use("/auth",router)

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);   
});

// const userSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, unique: true },
//     password: { type: String, unique: true },
// });
// const User = mongoose.model('User', userSchema);

// //registration
// app.post('/api/register', async(req,res)=>{
//    try{
//     const {name,email,password}= req.body;

//    const user = await User.findOne({email});
//    if(user){
//     res.json(`user already exists`);
//    }
   
//    const hashPassword = await bcrypt.hash(password,10);

//    const newHashUser = new User({name, email, password:hashPassword});
//     const test = await newHashUser.save();
//     console.log(test);
    

//    res.json(`user registered succesfully`);
//         }catch (err){
//             res.json('Error Found')
//            }
// });


//login
// app.post('/api/login', async (req, res) => {
//     try {
//     const { email, password } = req.body;

//      const user = await User.findOne({ email });
//         if (!user){
//         res.status(400).json({ message: 'Invalid user details' });
//     }
//     const userFound = await bcrypt.compare(password, user.password);
//         if (!userFound) return res.json('Invalid details');

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//         res.json({ token });
//     } catch (err) {
//         res.json('Server error');
//     }  
// });

