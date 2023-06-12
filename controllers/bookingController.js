import Booking from "../models/booking.js"

export const Createbooking=async(req,res)=>{
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save();
        res.status(200).json({
            success:true,
            message:"Booking Successfull",
            data:savedBooking
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to Book Tour"
        })
    }
}
export const GetSingleBooking=async(req,res)=>{
    const id = req.params.id
    try {
        const book  = await Booking.findById(id); 
        res.status(200).json({
            success:true,
            message:"Successfully fetched",
            data:book
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to fetched"
        })
    }
}
export const GetAllBooking=async(req,res)=>{
    try {
        const book  = await Booking.find(); 
        res.status(200).json({
            success:true,
            message:"Successfully fetched",
            data:book
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Failed to fetched"
        })
    }
}