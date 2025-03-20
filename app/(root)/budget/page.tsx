"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { CreateDialog } from "./_components/create-dialog";

interface withProps {
  amountSpent: number;
}

interface TaskProps {
  amountSpent: number,
  title: string,
  description: string,
  id: string;
  dock: withProps[];
}
const Budget = () => {
  const [isSubmitting, setIsSubmitting] = useState<TaskProps[]>([]);


  useEffect(() => {
    const shown = async () => {
      const supabase = await createClient();

      const { data, error } = await supabase.from("flexy").select("*");
      if (data) {
        setIsSubmitting(data as TaskProps[]);
        
      } else {
        console.log(error);
      }
    };
    shown();
  }, []);

  return (
    <div className="px-2 pt-5 flex w-full h-full flex-col">
      <h1 className="text-pretty font-bold text-2xl">My Budgets</h1>
              <div className="w-full h-full flex ">

      <div className="pt-5 grid md:grid-cols-2 lg:grid-cols-3 w-full p-3 h-[12rem] gap-3">

       
        <CreateDialog />

        {isSubmitting.map((budget) => (
          <div key={budget.id} className="border w-full h-[12rem] flex">
            <div className="flex justify-between px-3 pt-3 w-full items-center">
              <div className="flex items-center space-x-3">
              <div className="text-3xl gap-2  p-2 h-[3rem] rounded-full items-center flex bg-purple-400">{budget.title}
              </div>
              <h1 className="capitalize text-sm font-bold">

                              {budget.description}

              </h1>
              </div>
          <h1 className="text-lg font-bold text-pretty"> N{budget.amountSpent} </h1>


            </div>
            <div>

            </div>
          </div>
        ))}
      </div>
    </div> </div>
  );
};

export default Budget;
