"use client"

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { CreateDialog } from "./_components/create-dialog";

interface withProps{
    name: string,
    item: number,
    id: string
}

interface TaskProps{
    title: string,
    item: number,
    id: string
    dock: withProps[]
}
const Budget = () => {
const [isSubmitting, setIsSubmitting] = useState<TaskProps[]>([])

useEffect(()=>{
      const shown = async ()=>{
        const supabase = await createClient()

        const {data, error} = await supabase.from("tasks").select("*")
        if(data){       
            setIsSubmitting(data  as TaskProps[])
        }else{
            console.log(error)
        }
        
    }
   shown()

},[])
  
    return ( 
        <div className="px-2 pt-5 flex w-full h-full flex-col">
           <h1 className="text-pretty font-bold text-2xl">
           My Budgets
            </h1> 
            <div className="pt-5 grid md:grid-cols-2 lg:grid-cols-3 w-full  h-[15rem] gap-3">
                                             <CreateDialog/>

                {isSubmitting.map((budget)=>(
                    <div key={budget.id}>
                    {budget.title}
                    <div>
                        {budget.dock.map((items)=>(
                            <div key={items.id}>
                                {items.name}
                            </div>
                        ))}
                    </div>
                    </div>
                 
                ))}
            </div>
        </div>
     );
}
 
export default Budget;