"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { CreateDialog } from "./_components/create-dialog";
import * as React from "react";
import Image from "next/image";
import { Permanent_Marker } from "next/font/google";
import Link from "next/link";

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400', // Permanent Marker only supports 400
});

interface withProps {
  amountSpent: number;
}

interface TaskProps {
  amountSpent: number;
  totalbalance: number;
  title: string;
  notes: string;
  description: string;
  id: number;
  task_id?: string;
  dock: withProps[];
}



function Budget() {
const [isSubmitting, setIsSubmitting] = useState<TaskProps[]>([]);
useEffect(() => {
    const shown = async () => {
      const supabase = await createClient();
      const { data, error } = await supabase.from("flexy").select("*");

      if (data) {
        setIsSubmitting(data as TaskProps[]);
        
      } else {
        console.error("Error fetching data:", error);
      }
    };

    shown();
  }, []);

  return (
    <div className="px-2 pt-5 flex w-full h-full flex-col overflow-auto pb-3">
      <h1 className="text-pretty font-bold text-2xl">My Budgets</h1>

      <div className="w-full h-full flex">
        <div className="pt-2 grid md:grid-cols-2 lg:grid-cols-3 w-full p-3 h-[12rem] gap-3">
          <CreateDialog />

          {isSubmitting.map((budget) => {
            return (
              <Link href={`/budget/${budget.id}`}
                key={budget.id}
                className="border hover:shadow-md hover:shadow-black w-full h-[12rem] flex flex-col px-3 pb-2 relative text-white rounded-md"
              >
                <div className="w-full justify-between px-2 flex pt-3">
                </div>
                <Image src="/bck.avif" alt="background" fill className="absolute rounded-md -z-20"/>
                <div className="flex relative justify-between px-3 pt-3 w-full items-center h-full">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl gap-2 p-2 h-[3rem] rounded-full items-center flex bg-white ">
                      {budget.title}
                    </div> 
                    <h1 className="capitalize text-sm font-bold">
                      {budget.description}
                    </h1>
                  </div>
                  <h1 className="text-lg font-bold text-pretty">
                    N{budget.amountSpent}
                  </h1>

                </div>
                <div className={`${permanentMarker.className} "text-sm px-2  flex absolute"`}>{budget.notes}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Budget;
