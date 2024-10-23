import {z} from 'zod';

export const usernameValidation = z
    .string()
    .min(2. "Username should be atleast 2 character")
    .max(20,"Username should be less than 20 characters")
    .regex(/^[a-zA-Z][a-zA-Z0-9_-]{3,19}$/, "Username must not conatain special characters")


export const signUpSchema = z
   .object({
    username: usernameValidation,
    email: z.string().email({message:"Invalid email"}),
    password: z.string().min(8,  {message:"Password should be atleast 8 character"}),

   })