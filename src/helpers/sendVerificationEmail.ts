import {resend} from "@/lib/resend"

import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: "Verification email",
            react: VerificationEmail({username, otp:verifyCode}),
        })
        return{success: true,
    message: "Successfully sent the verification email",}
    } catch (emailError) {
        console.error("Error in sending the verification email", emailError)
    } return{
        success: false,
    message: "Failed to send the verification email",
    }
}