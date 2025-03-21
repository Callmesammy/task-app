"use server"

import { createClient } from "@/utils/supabase/server"

interface TaskProps{
  title: string, 
  description: string,
  amountSpent: number,
  totalBalance: number,


}

export default async function CreateTask(flexy: TaskProps){
  const supabase = await createClient()

const {data, error} = await supabase.from("flexy").insert([flexy]).select("*")

if(error){
  console.error("Something went wrong", error)
  return{success: false, error: error.message}
 }

 return{ success: true, data}

}