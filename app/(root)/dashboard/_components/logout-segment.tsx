"use client"

import { logout } from "@/app/(auth)/login/actions";
import { Button } from "@/components/ui/button";

export  function Logout  () {  
  const handleSubmit = async ()=>{
    await logout()
  }
    
    

    return(
        <Button className="cursor-pointer" onClick={handleSubmit}>Logout</Button>
    )
}
 
