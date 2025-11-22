import React from "react";
import LogoOne from "@/app/components/logos/LogoOne";
import userPic from "@/app/assets/trainer/userpic.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-[0_0_4px_rgba(0,0,0,0.25)] relative z-50 flex flex-row justify-between items-center p-4 ">
      <Link href={"/trainer"} className=" flex-1">
        <LogoOne />
      </Link>

      <div className="text-center font-semibold text-2xl hidden md:block text-black ">
        Training Provider Portal
      </div>

      <div className="flex-1 ">
        <Link href={"/profile"}>
          <Image
            src={userPic}
            alt="User"
            className=" w-10 h-10 max-w-12 lg:w-12 lg:h-12 rounded-full object-cover ring-2 ring-gray-200 shadow-md float-end"
          />
        </Link>
      </div>
    </nav>
  );
}
