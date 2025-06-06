"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/container-scroll-animation";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
             Do better by  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Planning your activities 
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/tod.webp"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      
    </div>
  );
}
