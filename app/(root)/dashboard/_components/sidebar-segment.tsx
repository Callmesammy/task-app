"use client"

import { cn } from "@/lib/utils";
import { LayoutDashboard, ListTodo, LoaderPinwheel, Save } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "@supabase/supabase-js";

export const sideFeat =[
    {
        icon: <LayoutDashboard className="size-7 text-indigo-800 pt-2"/>,
        name: "Dashboard", 
        url: "/dashboard"
    },
    {
        icon: <Save className="size-7 text-indigo-800 pt-2"/>,
        name: "Budget", 
        url: "/budget"
    },  {
        icon: <ListTodo className="size-7 text-indigo-800 pt-2"/>,
        name: "Sales", 
        url: "/sales"
    },  {
        icon: <LoaderPinwheel className="size-7 text-indigo-800 pt-2 flex"/>,
        name: "Upgrade", 
        url: "/upgrade"
    },
]

interface linprops{
    user: User
}

const SideBar = ({
    user
}: linprops) => {
    
    const pathName = usePathname()

    return (
        <div className="w-[15rem]  border border-r-4 shadow h-full sticky ">
         <div className="w-full flex flex-col h-full  gap-3 pt-3 ">
            {sideFeat.map((items, keyus)=>{
                const isActive = pathName === items.url || pathName.startsWith(`${items.url}/`)
                return (
                    <div key={keyus} className="gap-2 flex p-1  items-center ">
                    <Link href={items.url} className={cn("flex w-full items-center cursor-pointer  h-full space-y-3 hover:bg-primary-foreground space-x-2 ", isActive && "bg-secondary items-center w-full h-full flex font-bold")}>
                        {items.icon}
                        <h1 className="text-sm">{items.name} </h1>
                        
                    </Link>
                    
                    </div>
                )
            })}
              <div className="  flex-col pb-3 mt-auto text-sm flex w-full px-2">
                     <h1>Wellcome</h1> {user.email || "No email"}
                    </div>
         </div>
       
        </div>
      );
}
 
export default SideBar;