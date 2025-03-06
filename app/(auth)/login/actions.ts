"use server"

import { createClient } from "@/utils/supabase/server"


interface dataProps{
    error: null | string,
    success: boolean, 
    data: unknown| null,
}
export  async function  loginForm (formData: FormData): Promise<dataProps>{
const supabase = await createClient()
const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string
}
const { data: datat, error } = await supabase.auth.signInWithPassword(data) 
return{
    error: error?.message || "Something went wrong, try again",
    success: !error,
    data: datat || null
}
}