"use client";

import Image from 'next/image';
import Rightside from '@/app/components/auth/Rightside';
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import emailIcon from "@/app/assets/auth/email.svg"
import passwordIcon from "@/app/assets/auth/password.svg"
import Link from "next/link";
import LogoOne from '@/app/components/logos/LogoOne';



export default function page() {

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    const form = e.currentTarget as HTMLFormElement
    const fromdata = new FormData(form);
    const email = fromdata.get("email");
    const password = fromdata.get("password");

    try {

      console.log(email, password)
    }
    catch {
      console.log("error")
    }
    finally {
      setLoading(false);
    }


  };
  return (
    <div className="min-h-screen flex px-4 lg:px-0">
      {/* Left Section */}

      <div className="space-y-20 flex-1 py-5 my-auto ">

        <div className="mt-5 ">
            <LogoOne className="mx-auto" />
        </div>


        <form onSubmit={handleSubmit} className="w-full  xl:max-w-xl max-w-md mx-auto  rounded-2xl p-8 border border-auth-form-border space-y-8">

          <h2 className="text-center text-3xl font-bold text-black ">
            Sign In
          </h2>


          {/* Email Input */}
          <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
            <Image src={emailIcon} alt="email icon" width={22} />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color"
            />
          </div>


          {/* Password Input */}
          <div className="flex items-center gap-3 border-b   border-gray-500 focus-within:border-gray-900  transition-colors duration-200  pb-2">
            <Image src={passwordIcon} alt="email icon" width={22} />

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password"
              className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color"
            />

            <button
              type="button"

              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-600 hover:cursor-pointer"
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>


          {/* Login Button */}
          <button type="submit" className="w-full py-3 bg-btn-bg hover:opacity-90 text-auth-bg  text-lg font-bold hover:cursor-pointer rounded-md">
            Log in
          </button>

          {/* Forgot Password */}
          <Link href="/forget-password" className="mt-6  block md:text-xl text-center text-black font-normal cursor-pointer hover:underline">
            Forgot password?
          </Link>




        </form>

        <p className="mt-6 text-black font-normal md:text-xl text-center">
          Don’t have an account?{" "}
          <a href="/sign-up" className="font-bold hover:underline">
            Sign Up
          </a>
        </p>








      </div>
      {/* ---left-section-- */}
      <Rightside />

    </div >
  )
}
