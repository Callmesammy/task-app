"use client"

import { Button } from "@/components/ui/button";
import { Bluetooth } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

const HeadingPage = () => {
    useEffect(()=>{
        gsap.fromTo(".load", {
            opacity: 0, 
            translateX: -100

        }, {
            opacity: 1, 
            translateX: 0,
            delay: 1
        })

        gsap.fromTo(".loading", {
            opacity: 0, 
            translateX: 100

        }, {
            opacity: 1, 
            translateX: 0,
            delay: 1.5
        })
    }, [])
    const handleHome =(url: string)=>{
        window.location.href = url
    }
    return ( 
        <div className="w-full h-[5rem] flex bg-white shadow justify-between px-4 items-center">
          <div onClick={()=>handleHome("/")} className="cursor-pointer flex space-x-1 items-center">
          <Bluetooth className="load font-bold size-9 text-indigo-700"/>
                <h1 className="font-semibold loading w-[11rem]">Connect Da World</h1>
            </div>  
            <div className="space-x-3 px-2 flex items-center">
            <Button><Link href="/">Dashboard </Link></Button>
            <Button variant="outline" >
                <Link href="/login">
            Get Started</Link></Button>

            </div> 
        </div>
     );
}
 
export default HeadingPage;