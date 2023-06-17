import jwt from 'jsonwebtoken'

export const verifyToken =(req,res,next)=>{
    const token =req.cookies.accessToken
    if(!token){
        return res.status(401).json({
            success:true,
            message:"Not Authorised"
        })
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err){
            return res.status(401).json({
                success:false,
                message:"Token in Invalid"
            })
        }
        req.user =user;
        next();
    })
}
export const verifyTokenAdmin =(req,res,next)=>{
    const token =req.cookies.accessToken
    if(!token){
        return res.status(401).json({
            success:true,
            message:"Not Authorised"
        })
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err){
            return res.status(401).json({
                success:false,
                message:"Token in Invalid"
            })
        }
        if(user.role !=="admin"){
            return  res.status(401).json({
                success:false,
                message:"You are not the Admin"
            })
        }
        req.user =user;
        next();
    })
}

export const verifyuser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id===req.params.id || req.user.role==="admin"){
            next();
        }else{
             return   res.status(401).json({
                success:false,
                message:"You are not authenticated"
            })
        }
    })
}
export const verifyAdmin=(req,res,next)=>{
    verifyTokenAdmin(req,res,next,()=>{
        if(req.user.role==="admin"){
            next();
        }else{
          return res.status(401).json({
                success:false,
                message:"You are not authenticated"
            })
        }
    })
}