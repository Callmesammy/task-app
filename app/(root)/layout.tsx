
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Header from "./dashboard/_components/header-segment";
import SideBar from "./dashboard/_components/sidebar-segment";
import Right from "./dashboard/_components/right-segment";

export default async function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const supabase = await createClient()
    const {
      data: { session },
    } = await supabase.auth.getSession()
  
    if (!session) {
      redirect("/")
    }
  

    return ( 
    <main className="flex  flex-col w-full h-screen">
      <Header/>
      <div className="flex  w-full h-full">
        <SideBar user={session.user}/> 
         <div className="w-full z-20   border h-full"> 
        {children}</div>
        <Right/>
        </div>
        </main>
     );
}
 
