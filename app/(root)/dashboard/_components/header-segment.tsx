"use client"

import gsap from "gsap";
import { Logout } from "./logout-segment";

import { Bluetooth } from "lucide-react"
import { useEffect } from "react"


const Header = () => {
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
        <div className="w-full px-2 overflow-hidden justify-between shadow items-center sticky h-[6rem] bg-black flex">
            <div onClick={()=>handleHome("/")} className="cursor-pointer flex space-x-1 items-center">
          <Bluetooth className="load font-bold size-9 text-white"/>
                <h1 className="font-semibold loading w-[11rem] text-white">Connect Da World</h1>
            </div> 
           
            <Logout/>
        </div>
     );
}
 
export default Header;