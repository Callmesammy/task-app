"use client"
import Image from "next/image";
import { FlipWor } from "../_components/flip-words";
import { useState } from "react";
import { LoginForm } from "../_components/login-form";
import { SignUpForm } from "../_components/signup-form copy";


const  Login = () => {
    const [onPage, setOnPage]=useState("login");

    return ( 
        <div className="flex flex-col w-full h-screen items-center justify-center">
            <div className="flex bg-white flex-col p-4 rounded justify-center items-center space-y-3">
            <FlipWor/>
          <div className="w-[25rem] h-[30rem] border rounded-md ">
       <h1 className="text-xl font-bold px-3 pt-8">
        {onPage === "login" ? "Login" : "SignUp"}</h1>
        <div className="px-4 pt-6 ">
        {onPage === "login" && <div className="pt-6 flex flex-col h-full w-full "><LoginForm/> <p className="text-sm justify-end pt-3 text-end">Dont have an account ? <span  className="text-blue-700 cursor-pointer underline hover:font-bold" onClick={()=> setOnPage("signup")}>Signup</span></p></div>}
        {onPage === "signup" &&  <div className="pt-6 flex flex-col h-full w-full "><SignUpForm/> <p className="text-sm justify-end pt-3 text-end">Already have an account ? <span  className="text-blue-700 cursor-pointer underline hover:font-bold" onClick={()=> setOnPage("login")}>Login</span></p></div>}
        </div>
        </div>  </div>
        <div className="-z-10 flex shadow-md">
            <Image src="/tod.webp" alt="image" fill className="object-cover" />
        </div>
        </div>
     );
}
 
export default  Login;