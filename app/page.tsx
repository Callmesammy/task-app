import { createClient } from "@/utils/supabase/server";
import FooterApp from "./_components/footer-app";
import HeadingPage from "./_components/heading";
import { HeroScroll } from "./_components/hero-page";
import { redirect } from "next/navigation";

export default async function Home() {
const supabase = await createClient()

const {data: session} = await supabase.auth.getSession()
if(session){
  redirect("/dashboard")
}
  
  return (
    <div className="flex w-full h-screen flex-col">
       <div className="w-full h-sceen flex"> 
       <HeadingPage/>

      </div>
      <div className="w-full h-sceen flex items-center justify-center"> 
              <HeroScroll/>

      </div>
      <div className="w-full h-sceen flex items-center justify-center">
        <FooterApp/>
        </div>
    </div>
  );
}
