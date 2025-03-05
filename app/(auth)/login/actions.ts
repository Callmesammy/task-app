"use server"

import { createClient } from "@/utils/supabase/server"

import { z } from "zod"
import { formSchema } from "../_components/login-form"

interface dataProps{
    error: null | string,
    success: boolean, 
    data: unknown,
}
export default  async function  login (formData: z.infer<typeof formSchema>): Promise<dataProps>{
const supabase = await createClient()
const data = {
    email: formData.email,
    password: formData.password
}
const { data: datat, error } = await supabase.auth.signUp(data) 
return{
    error: error?.message || "Something went wrong, try again",
    success: true,
    data: datat
}
}