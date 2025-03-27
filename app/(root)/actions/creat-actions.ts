"use server"

import { createClient } from "@/utils/supabase/server"

interface TaskProps{
  title: string, 
  description: string,
  amountSpent: number,
  totalbalance: number,
  notes: string,
  


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

export async function UpdateTask(task: TaskProps) {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("flexy")
      .update({
        title: task.title,
        description: task.description,
        amountSpent: task.amountSpent,
        totalbalance: task.totalbalance,
        notes: task.notes,
      })
      .eq("id", 42)
      .select("*");

    if (error) {
      console.error("Update error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, error: "An unexpected error occurred" };
  }
}