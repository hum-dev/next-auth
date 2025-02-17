import mongoose from "mongoose";

let initialized = false

export const connect = async () => {
    mongoose.set('strictquery', true);

    if (initialized) {
        console.log('MongoDB already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"next-auth",
            useNewUrlParser:true,
            useUnifiedTopology:true,

        });
        console.log('MongoDB connected');
        initialized = true;
        
    } catch (error) {
        console.log('MongoDB connection error:', error);
        
    }
};