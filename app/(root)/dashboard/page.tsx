"use client"
import { createClient } from "@/utils/supabase/client";
import { ListTodo, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { ComponentChat } from "./_components/chartData";

interface Dashprops{
  totalBalance: number, 
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

          
    return (
        <div className="flex pb-3 px-3 flex-col  w-full h-full pt-4 overflow-scroll space-y-3">
        <h1 className="text-2xl font-bold text-pretty">
          Hi, {} Let us do this
          
          </h1>  
          <p className="text-sm text-pretty">Here is what happenning with your Tasks, Lets Manage your Tasks</p>   

          <div className="grid pt-3 lg:cols-2 w-full h-full">
            {tasks.map((keys)=>(

           
           <div key={keys.id} className="lg:flex px-2 gap-3 space-y-3 w-full justify-center ">

              <div className="w-full border rounded items-center  flex h-[10rem] px-4">

<div className="flex flex-col w-full">
        <h1 className="text-sm font-bold ">Total Spent</h1>
        <h1 className="text-lg font-bold tracking-wide">N{keys.amountSpent}</h1>

</div>

<div className="flex p-4 rounded-full bg-indigo-700">
  <Save className="text-white size-6"/>

</div>
              </div>
              <div className="w-full border rounded items-center  flex h-[10rem] px-4">

<div className="flex flex-col w-full">
        <h1 className="text-sm font-bold ">Total Balance</h1>
        <h1 className="text-lg font-bold tracking-wide">N{keys.amountSpent - keys.totalBalance }</h1>

</div>

<div className="flex p-4 rounded-full bg-indigo-700">
  <ListTodo className="text-white size-6"/>

</div>
              </div>
              </div>
 ))}
 
 <div className="pt-4 flex px-3 w-full h-full">
    <ComponentChat/>
    </div>
          </div>
          
           </div>
      );
}
 
export default Dashboard;