"use client"
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";


const Dashboard =  () => {
    const [tasks, setTasks] = useState([])
    
useEffect(()=>{
const Documents = async ()=>{
const supabase = await createClient()
const {data, error} = await supabase.from("tasks").select("*")

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
        <div className="flex px-3 flex-col  w-full h-full pt-4">
        <h1 className="text-2xl font-bold text-pretty">
          Hi, {} Let's do this
          
          </h1>  
          <p className="text-sm text-pretty">Here's what happenning with your Tasks, Lets Manage your Tasks</p>   

          <div className="grid pt-3 lg:cols-2 w-full h-full">
            {tasks.map((keys)=>(

           
           <div key={keys.id} className="lg:flex px-2 gap-3 space-y-3 w-full justify-center ">

              <div className="w-full border rounded items-center  flex h-[10rem] px-2">

<div className="flex flex-col w-full">
        <h1 className="text-sm font-bold tracking-wide">Total Budget</h1>
        <h1 className="text-sm font-bold tracking-wide">{keys.totalTasks}</h1>

</div>
              </div>
                            <div className="px-2 items-center  flex w-full border rounded h-[10rem]">

              </div>
              </div>
 ))}
          </div>
           </div>
      );
}
 
export default Dashboard;