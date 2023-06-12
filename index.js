import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tour.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/review.js'
import bookingRoute from './routes/booking.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOption={
    origin:true,
    credentials:true
}

mongoose.set('strictQuery',false);
// database connection
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("Database Connected");
    } catch (error) {
        console.log("Database not connected")
    }
}
// middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());
app.use('/api/v1/tours',tourRoute);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/review',reviewRoute);
app.use('/api/v1/booking',bookingRoute);

app.listen(port, ()=>{
    connect();
    console.log("Server started at port",port);
})