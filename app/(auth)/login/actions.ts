"use server"

import { createClient } from "@/utils/supabase/server"
import { formSchema } from "../_components/login-form"
import { z } from "zod"


interface dataProps{
    error: null | string,
    success: boolean, 
    data: unknown| null,
}
export  async function  loginForm (formData: z.infer<typeof formSchema>): Promise<dataProps>{
const supabase = await createClient()
const data = {
    email: formData.email,
    password: formData.password
}
const { data: datat, error } = await supabase.auth.signInWithPassword(data) 
return{
    error: error?.message || "Something went wrong, try again",
    success: !error,
    data: datat || null
}
}