
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

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
        <div>{children}|</div>
     );
}
 
