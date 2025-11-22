import React from 'react'
import LogoOne from "@/app/components/logos/LogoOne";
import userPic from "@/app/assets/trainer/userpic.jpg";
import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)] relative z-50 ">
                   <div className="flex flex-row justify-between items-center p-4 max-w-360 mx-auto">
                       <div className="bord ">
                           <LogoOne />
   
   
                       </div>
   
                       <div className=" md:w-1/2 hidden md:block">
                           <h1 className="font-semibold text-2xl hidden md:block text-black ">
                               Training Provider Portal
                           </h1>
                       </div>
   
                       <Link  href={"/profile"}>
                           <Image
                               src={userPic}
                               alt="User"
                               className=" w-10 h-10 max-w-12 lg:w-12 lg:h-12 rounded-full object-cover ring-2 ring-gray-200 shadow-md"
                           />
                       </Link>
   
                   </div>
               </nav>
  )
}
