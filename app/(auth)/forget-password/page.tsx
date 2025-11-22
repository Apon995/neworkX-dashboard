"use client";

import Rightside from "@/app/components/auth/Rightside";
import Image from "next/image";
import emailIcon from "@/app/assets/auth/email.svg";
import LogoOne from "@/app/components/logos/LogoOne";
import { useState } from "react";

export default function page() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const fromdata = new FormData(form);
    const email = fromdata.get("email");

    try {
      console.log(email);
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex px-4 lg:px-0">
      {/* Left Section */}

      <div className="space-y-20 flex-1 py-5 my-auto ">
        <div className="mt-5">
            <LogoOne className="mx-auto" />
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full  xl:max-w-xl max-w-md mx-auto  rounded-2xl p-8 border border-auth-form-border space-y-8"
        >
          <div className="space-y-1">
            <h2 className="text-center md:text-3xl text-2xl font-bold text-black ">
              Forgot Password
            </h2>
            <p className="text-deep-gray font-normal text-center md:text-[18px] text-sm ">
              Enter your email address
            </p>
          </div>

          {/* Email Input */}
          <div className="flex items-center gap-3 rounded-md border border-gray-500 p-2 focus-within:border-gray-900  transition-colors duration-200   ">
            <Image src={emailIcon} alt="email icon" width={22} />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color "
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-btn-bg hover:opacity-90 text-auth-bg rounded-md text-lg font-bold hover:cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
      {/* ---left-section-- */}
      <Rightside />
    </div>
  );
}
