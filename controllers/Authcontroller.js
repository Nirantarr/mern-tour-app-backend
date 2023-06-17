import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const RegisterUser=async(req,res)=>{
    try {
        const salt= bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            photo:req.body.photo,
            role:req.body.role
        })
       const user= await newUser.save();
       res.status(200).json({
        success:true,
        message:"New user added successfully",
        data:user
       })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"failed to create"
        })
    }
}

export const LoginUser=async(req,res)=>{
    try {
        const email = req.body.email;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        // If user exists check password
        const checkPassword =await bcrypt.compare(req.body.password,user.password);
        // Password is incorrect
        if(!checkPassword){
         return res.status(401).json({
            success:false,
            message:"Incorrect email or password"
         })
        }
        const {password,role,...rest} = user._doc
        // create jwt token
          const token = jwt.sign({
            id:user._id, role:user.role
          },process.env.JWT_SECRET_KEY,{expiresIn:'15d'})  

        //   set token in browser cookies and send response to client
        res.cookie('accessToken',token,{
            httpOnly:true,
            expires:token.expiresIn
        }).status(200).json({
            success:true,
            message:"Successful login",
            token,
            role,
            data:{...rest}
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"failed to login"
        })
    }
}