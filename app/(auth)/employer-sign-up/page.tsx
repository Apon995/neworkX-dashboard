"use client";
import Image from "next/image";
import Rightside from "@/app/components/auth/Rightside";
import { useState } from "react";
import locationIcon from "@/app/assets/auth/location.svg"
import companyIcon from "@/app/assets/auth/company.svg"
import emailIcon from "@/app/assets/auth/email.svg";
import passwordIcon from "@/app/assets/auth/password.svg";
import LogoOne from "@/app/components/logos/LogoOne";

export default function page() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget as HTMLFormElement;
    const fromdata = new FormData(form);
    const companyName = fromdata.get("company-name");
    const companyEmail = fromdata.get("company-email");
    const companyLocation = fromdata.get("company-location");
    const password = fromdata.get("password");
    const confirmPassword = fromdata.get("confirm-password")



    try {
      console.log(companyName, companyEmail, companyLocation, password, confirmPassword)

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
          className="w-full xl:max-w-xl max-w-md mx-auto  rounded-2xl p-8 border border-auth-form-border space-y-8"
        >
          <h2 className="text-center text-3xl font-bold text-black ">
            Sign Up
          </h2>

          {/*Company name Input */}

          <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
            <Image src={companyIcon} alt="email icon" width={22} />
            <input
              type="text"
              id="company-name"
              name="company-name"
              placeholder="Company name"
              className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color"
            />
          </div>

          {/*Company email Input */}

          <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
            <Image src={emailIcon} alt="email icon" width={22} />
            <input
              type="email"
              id="company-email"
              name="company-email"
              placeholder="Company email"
              className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color"
            />
          </div>

          {/* Office locaton Input */}

          <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
            <Image src={locationIcon} alt="email icon" width={22} />
            <input
              type="text"
              id="company-location"
              name="company-location"
              placeholder="Office location"
              className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color"
            />
          </div>

          {/* Password Input */}

          <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
            <Image src={passwordIcon} alt="email icon" width={22} />

            <input
              type={"password"}
              id="password"
              name="password"
              placeholder="Enter password"
              className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color"
            />
          </div>

          {/* Confrim Password Input */}

          <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
            <Image src={passwordIcon} alt="email icon" width={22} />

            <input
              type={"password"}
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm password"
              className="w-full text-ash-color font-normal bg-transparent outline-none text-xl placeholder:text-ash-color"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-btn-bg hover:opacity-90 text-auth-bg  text-lg font-bold hover:cursor-pointer rounded-md"
          >
            Sign up
          </button>
        </form>
      </div>
      {/* ---left-section-- */}
      <Rightside />
    </div>
  );
}
