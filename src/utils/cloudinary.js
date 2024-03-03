// cloudinary library se v2 module ko import kiya gaya hai aur v2 ko cloudinary naam se use kiya jaayega
import { v2 as cloudinary } from "cloudinary";
// fs module ko fs naam se import kiya gaya hai
import fs from "fs";

// cloudinary configuration ko set kiya hai jisme cloud_name, api_key, aur api_secret provide kiye gaye hain
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

// uploadOnCloudinary naam ka async function define kiya gaya hai jo localFilePath parameter accept karta hai
const uploadOnCloudinary = async(localFilePath) => {
    try {
        // Agar localFilePath nahi hai toh null return kiya jata hai
        if(!localFilePath){
            return null
        }
        // cloudinary.uploader.upload method se file ko cloudinary par upload kiya jata hai
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        //file ko cloudinary par upload kar diya gaya hai
        console.log("file is uploaded in cloudinary",response.url);
        return response;
    } catch (error) {
        // Agar error aata hai toh locally saved temporary file ko remove kiya jata hai
        fs.unlinkSync(localFilePath)//remove the locally saved temporary file if operation got failed
        return null;
    }
}

export {uploadOnCloudinary}