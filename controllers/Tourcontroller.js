import Tour from '../models/Tour.js'

//create new tour
export const createTour=async(req,res)=>{
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save();
        res.status(200).json({success:true,message:"successfully created",data:savedTour});
    } catch (error) {
        res.status(500).json({success:false,message:"failed to create, Try again"});
    }
}

//update tour

export const updateTour=async(req,res)=>{
    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({
            success:true,
            message:"successfully Updated",
            data:updatedTour
        });
    } catch (error) {
        res.status(500).json({success:false,message:"failed to update, Try again"});
    }
}
export const deleteTour=async(req,res)=>{
    const id = req.params.id;
    try {
        await Tour.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"successfully Deleted"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to Delete"
        })
    }
}
export const getSingleTour=async(req,res)=>{
    const id = req.params.id;
    try {
        const SingleTour = await Tour.findById(id).populate("reviews")
        res.status(200).json({
            success:true,
            message:"successfully fetched",
            data:SingleTour
        });
    } catch (error) {
        res.status(500).json({success:false,message:"failed to fetch, Try again"});
    }
}
export const getAllTour=async(req,res)=>{
    try {
        const AllTour = await Tour.find().populate("reviews")
        res.status(200).json({
            success:true,
            message:"successfully fetched",
            data:AllTour
        });
    } catch (error) {
        res.status(500).json({success:false,message:"failed to fetch, Try again"});
    }
}
export const getAllTourPage=async(req,res)=>{
    // For pagination
    const page = parseInt(req.query.page);
    try {
        const AllTour = await Tour.find().populate("reviews").skip(page*5).Limit(8);
        res.status(200).json({
            success:true,
            message:"successfully fetched",
            data:AllTour
        });
    } catch (error) {
        res.status(500).json({success:false,message:"failed to fetch, Try again"});
    }
}

export const getTourBySearch=async(req,res)=>{
    const city = new RegExp(req.query.city,'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);
    try {
        const tours= await Tour.find({city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}})
        res.status(200).json({
            success:true,
            message:"successfully fetched",
            data:tours
        })
    } catch (error) {
        res.status(500).json({success:false,message:"failed to fetch, Try again"});
    }
}

export const getFeaturedTour=async(req,res)=>{
    try {
        const tours = await Tour.find({featured:true});
        res.status(200).json({
            success:true,
            message:"Successfully fetched",
            data: tours
        })
    } catch (error) {
       res.status(500).json({
        success:false,
        message:"failed"
       })        
    }
}

export const getTourCount = async(req,res)=>{
    try {
        const tour = await Tour.estimatedDocumentCount();
        res.status(200).json({
            success:true,
            data:tour
        })
    } catch (error) {
        res.status({
            success:false,
            message:"failed"
        })        
    }
}