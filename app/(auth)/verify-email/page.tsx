"use client";

import Rightside from "@/app/components/auth/Rightside";
import LogoOne from "@/app/components/logos/LogoOne";
import { useRef, useState } from "react";

export default function page() {
  const [loading, setLoading] = useState<boolean>(false);
  const [code, setCode] = useState<string[]>(new Array(6).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      console.log(code.join(""));
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

        <div className="w-full xl:max-w-xl max-w-md mx-auto  rounded-2xl lg:p-8 md:p-6 p-4 border border-auth-form-border space-y-8">
          <div className="space-y-1">
            <h2 className="text-center md:text-3xl text-2xl font-bold text-black ">
              Verification
            </h2>
            <p className="text-deep-gray font-normal text-center md:text-[18px] text-sm ">
              We sent a 6-digit code to
            </p>
          </div>

          {/* verification code Input */}
          <div className="flex lg:gap-5 md:gap-4 gap-2 mx-auto w-fit">
            {code.map((num, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputsRef.current[index] = el;
                }}
                placeholder="-"
                type="text"
                maxLength={1}
                value={num}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="lg:w-14 md:w-12 lg:h-18 md:h-16 w-8 h-10 rounded-md border-2 border-btn-bg outline-none text-xl text-center font-semibold placeholder:text-ash-color text-ash-color"
              />
            ))}
          </div>

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-btn-bg hover:opacity-90 text-auth-bg rounded-md text-lg font-bold hover:cursor-pointer "
          >
            Sign up
          </button>

          
          <p className="mt-6  block md:text-xl text-center text-deep-gray font-normal cursor-pointer hover:underline">
            Resend code in 57s
          </p>
        </div>
      </div>
      {/* ---left-section-- */}
      <Rightside />
    </div>
  );
}
