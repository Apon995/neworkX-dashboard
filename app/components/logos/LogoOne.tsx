import Image from "next/image";
import React from "react";
import logo from "@/public/logos/logo-1.png";

interface LogoOneProps {
  className?: string;
}

export default function LogoOne({ className = "" }: LogoOneProps) {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={380}
      height={78}
      className={` max-w-[80%] sm:max-w-[60%] md:max-w-[40%] ${className}`}
    />
  );
}
