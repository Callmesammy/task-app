import { createClient } from "@/utils/supabase/server"


interface dataProps{
    error: null | string,
    success: boolean, 
    data: any ,
}
export default  async function  login (formData: FormData): Promise<dataProps>{
const supabase = await createClient()
const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
}
const { userData: datat, error } = await supabase.auth.signUp(data) 
return{
    error: error?.message || "Something went wrong, try again",
    success: true,
    data: datat
}
}