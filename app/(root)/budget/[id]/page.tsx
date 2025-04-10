"use client"
import { createClient } from "@/utils/supabase/client";
import { Loader2, Trash2 } from "lucide-react";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Additems from "../_components/add-items";
import { toast } from "sonner";

interface Items{
  title: string,
  notes: string, 
  totalbalance: number, 
  amountSpent: number,
  id: number
}

const EditPage = () => {


  const {id} =useParams()
const [budgeting, setBudgeting]= useState<Items| null>()
const [document, setDocument] = useState()

const deleteD = async ()=>{
  const supabase = await createClient()
  const {error} = await supabase.from("flexy").delete().eq("id", id)
  if(error){
    console.log(error)
  }
  toast.success("Budget Deleted")
  redirect("/budget")
  
}  


  useEffect(()=>{
    const  FileUpload =async ()=>{
      const supabase = await createClient()
      const {data, error}= await supabase.from("flexy").select("*").eq("id", id).single()
      if(data){
        setBudgeting(data as Items)  

      }
      if(error){
        console.log(error)
      }
    }       
      setDocument(document)

    FileUpload();
    
  },[document, id])
  return ( 
    <div className="w-full px-2 h-full flex flex-col gap-3 pt-2">
      <div className="justify-between w-full flex">
<h1 className="text-2xl font-bold ">Your Expenses</h1>
    <div onClick={deleteD}  className="p-3 border bg-red-600 rounded text-white cursor-pointer hover:bg-red-800">

        <Trash2/>

    </div>
      </div>
      
      <div className="grid md:grid-cols-2 rounded w-full h-full gap-3 ">
      {budgeting? (
        <div className="w-full flex flex-cols space-y-3 border rounded h-[13rem] px-3 pt-2">
        <h1 className="text-lg font-semibold "> {budgeting.notes} </h1> 
        {budgeting.amountSpent}
        </div>
      ):(
        <div className="w-full items-center flex justify-center border bg-secondary animate-pulse  h-[13rem] rounded">
          <Loader2 className="animate-spin size-10"/>
        </div>
      )}
      <div> 
        <Additems/>
      </div>
      </div>
    </div>
   );
}
 
export default EditPage;