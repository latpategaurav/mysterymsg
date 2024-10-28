import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt  from "bcryptjs";

export async function POST(request: Request){
    await dbConnect()

    try {
        
    } catch (error) {
        console.error('Error in registering user', error)
        return Response.json({
            suceess
        })
    }
}