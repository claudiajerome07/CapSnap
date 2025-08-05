const User=require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser=async(req,res)=>{
    try{

        const {username,email,password}=req.body;

        const existingUser=await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser=new User({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });

    }catch(err){
        res.status(500).json({message:err.message});
    }
}

const loginUser=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({ message: 'Invalid credentails' });
        }

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email } });


    }catch(err){
        return res.status(500).json({message: err.message});
    }
}

module.exports = {
    registerUser,
    loginUser
};