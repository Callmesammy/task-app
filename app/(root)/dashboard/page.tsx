"use client"
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { ComponentChat } from "./_components/chartData";

interface Dashprops{
  totalbalance: number, 
  amountSpent: number, 
  id: string,
  task_id?: string
}

const Dashboard =  () => {
    const [tasks, setTasks] = useState<Dashprops[]>([])
    
useEffect(()=>{
const Documents = async ()=>{
const supabase = await createClient()
const {data, error} = await supabase.from("flexy").select("*")

if(data){
    console.log(data)
    setTasks(data || [])
} else {
    console.log(error)
}
 };
 Documents();


},[])  

// adding of the necessary component for total balnace and amountSpent 

const totalBalance = tasks.reduce((doc, task)=> doc +  task.totalbalance, 0)
const amountSpend = tasks.reduce((doc, task)=> doc + task.amountSpent, 0)
const Balance = totalBalance - amountSpend;

          
    return (
        <div className="flex pb-3 px-3 flex-col  w-full h-full pt-4 overflow-scroll space-y-3">
        <h1 className="text-2xl font-bold text-pretty">
          Hi, {} Let us do this
          
          </h1>  
          <p className="text-sm text-pretty">Here is what happenning with your Tasks, Lets Manage your Tasks</p>   

          <div className="px-3 w-full h-52 rounded-md shadow  flex flex-col pt-2">
           <div className="flex  w-full justify-between h-full">
            <h1 className="text-red-600 text-lg font-semibold">Total Amount Spent</h1> <h1 className="font-bold text-lg text-red-600"> N{amountSpend}</h1> 
           </div>
           <div className="flex  w-full justify-between h-full">
            <h1 className="text-indigo-600 text-lg font-semibold">Total Amount Deposited</h1> <h1 className="font-bold text-lg text-indigo-600"> N{totalBalance}</h1> 
           </div>
           <div className="flex  w-full justify-between h-full">
            <h1 className="text-green-600 text-lg font-semibold">Current Balance</h1> <h1 className="font-bold text-lg text-green-600"> N{Balance}</h1> 
           </div>
 </div>
 <div className="pt-4 flex px-3 w-full h-full">
    <ComponentChat/>
    </div>
          
          
           </div>
      );
}
 
export default Dashboard;