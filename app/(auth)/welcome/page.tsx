"use client";
import Rightside from "@/app/components/auth/Rightside";
import LogoOne from "@/app/components/logos/LogoOne";
import { useEffect, useState } from "react";

export default function page() {
  const [loading, setLoading] = useState<boolean>(false);



  return (
    <div className="min-h-screen flex px-4 lg:px-0">
      {/* Left Section */}

      <div className="space-y-12 flex-1 py-5 my-auto ">
        <div className="mt-5">
          <LogoOne className="mx-auto" />
        </div>

        <div
      
          className="w-full  xl:max-w-xl max-w-md mx-auto  rounded-2xl p-8 border border-auth-form-border space-y-8"
        >
          <div className="space-y-1">
            <h2 className="text-center md:text-3xl text-2xl font-bold text-black ">
              Welcome
            </h2>
            <p className="text-deep-gray font-normal text-center md:text-[18px] text-sm ">
              Your recruiter account is ready. Start posting jobs and find the right talent today
            </p>
          </div>
         

          {/* Login Button */}
          <button
          
            className="w-full py-3 bg-btn-bg hover:opacity-90 text-auth-bg rounded-md text-lg font-bold hover:cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
      {/* ---left-section-- */}
      <Rightside />
    </div>
  );
}
