
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Header from "./dashboard/_components/header-segment";

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
    <main>
      <Header/>
        <div>{children}|</div></main>
     );
}
 
