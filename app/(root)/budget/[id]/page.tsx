"use client"
import { createClient } from "@/utils/supabase/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
    FileUpload();
  },[id])


  return ( 
    <div className="w-full h-full flex px-3 pt-2">
      <div className="grid md:grid-cols-2 px-3 rounded w-full h-full gap-3 ">
      {budgeting? (
        <div className="w-full  border rounded h-[13rem] px-3 pt-2">
          {budgeting.notes}
          {budgeting.title}
        </div>
      ):(
        <div>loading</div>
      )}
      <div> This is the greated show?</div>
      </div>
    </div>
   );
}
 
export default EditPage;