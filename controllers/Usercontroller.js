import User from '../models/User.js'

export const CreateUser=async(req,res)=>{
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(200).json({
            success:true,
            message:"User Created Successfully",
            data:savedUser
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"failed to create new user"
        })        
    }
}

export const UpdateUser=async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({
            success:true,
            message:"Successfully updated",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"failed to update user"
        })       
    }
}
export const DeleteUser=async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"Successfully Delted"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"failed to delete user"
        })       
    }
}
export const GetSingleUser=async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        res.status(200).json({
            success:true,
            message:"Successfully fetched",
            data:user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"failed to fetch user"
        })       
    }
}
export const GetAllUser=async(req,res)=>{
    try {
        const user = await User.find();
        res.status(200).json({
            success:true,
            message:"Successfully fetched",
            data:user
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"failed to fetch user"
        })       
    }
}