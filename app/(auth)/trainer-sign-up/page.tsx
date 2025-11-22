"use client";
import Image from "next/image";
import Rightside from "@/app/components/auth/Rightside";
import { useEffect, useRef, useState } from "react";
import emailIcon from "@/app/assets/auth/email.svg";
import passwordIcon from "@/app/assets/auth/password.svg";
import LogoOne from "@/app/components/logos/LogoOne";
import userIcon from "@/app/assets/auth/user.svg";
import agencyNameIcon from "@/app/assets/auth/agency-name.svg";
import exprienceIcon from "@/app/assets/auth/calendar.svg";
import skillIcon from "@/app/assets/auth/skill.svg";
import bioIcon from "@/app/assets/auth/bio.svg";


export default function page() {
    const [loading, setLoading] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [code, setCode] = useState<string[]>(new Array(6).fill(""));
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        specialization: "",
        experience: "",
        skills: "",
        bio: "",
    });

    useEffect(() => {

        const step = localStorage.getItem("currentStep");

        if (step) {
            setCurrentStep(parseInt(step || "1", 10));
        }
    }, []);


    const steps = [
        { number: 1, title: "basic-info" },
        { number: 2, title: "trainer-info" },
        { number: 3, title: "verification" },
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        if (currentStep < steps.length) {
            setCurrentStep((prev) => prev + 1);
            localStorage.setItem("currentStep", JSON.stringify(currentStep + 1));
            setLoading(false);
            return;
        }

        try {
            console.log(formData);
            setCurrentStep(1)
        } catch {
            console.log("error");
        } finally {
            setLoading(false);
        }
    };

    // ----step--4---
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
                        {currentStep == 3 ? "Verification" : "Sign Up"}
                    </h2>
                    {/* ---step--proccess---- */}
                    <div className="flex flex-row items-center justify-center">
                        {steps.map((el, index) => (
                            <div key={index} className="flex items-center">
                                <div
                                onClick={()=> {
                                 if(el.number < currentStep){
                                    setCurrentStep((pre)=> pre - 1)
                                 }
                                }}
                                    className={`${currentStep == el.number
                                        ? "bg-btn-bg text-white border-0"
                                        : "text-black bg-transparent font-medium"
                                        }  ${el.number < currentStep && "hover:cursor-pointer"} border border-black  w-8 h-8 flex items-center justify-center rounded-full `}
                                >
                                    {index + 1}
                                </div>

                                {index < steps.length - 1 && (
                                    <div className="w-8 h-0.5 bg-gray-200 dark:bg-gray-700 " />
                                )}
                            </div>
                        ))}
                    </div>

                    {currentStep === 1 && (
                        <div className="space-y-8">
                            {/*Representative name name Input */}
                            <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
                                <Image src={userIcon} alt="user icon" width={22} />
                                <input
                                    type="text"
                                    required
                                    id="full-name"
                                    name="full-name"
                                    placeholder="Full name"
                                    value={formData.fullName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, fullName: e.target.value })
                                    }
                                    className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color"
                                />
                            </div>

                            {/*email Input */}

                            <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
                                <Image src={emailIcon} alt="email icon" width={22} />
                                <input
                                    type="email"
                                    required
                                    id="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color"
                                />
                            </div>

                            {/* Password Input */}

                            <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
                                <Image src={passwordIcon} alt="email icon" width={22} />

                                <input
                                    type={"password"}
                                    required
                                    id="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({ ...formData, password: e.target.value })
                                    }
                                    className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color"
                                />
                            </div>

                            {/* Confrim Password Input */}

                            <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
                                <Image src={passwordIcon} alt="email icon" width={22} />

                                <input
                                    type={"password"}
                                    required
                                    id="confirm-password"
                                    name="confirm-password"
                                    placeholder="Confirm password"
                                    value={formData.confirmPassword}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            confirmPassword: e.target.value,
                                        })
                                    }
                                    className="w-full text-ash-color font-normal bg-transparent outline-none text-xl placeholder:text-ash-color"
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-8">
                            {/*specialization Input */}
                            <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
                                <Image src={agencyNameIcon} alt="user icon" width={22} />
                                <input
                                    type="text"
                                    required
                                    id="Specialization"
                                    name="Specialization"
                                    placeholder="Specialization"
                                    value={formData.specialization}
                                    onChange={(e) =>
                                        setFormData({ ...formData, specialization: e.target.value })
                                    }
                                    className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color"
                                />
                            </div>
                            {/* exprience-input */}
                            <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
                                <Image src={exprienceIcon} alt="email icon" width={25} />
                                <input
                                    type="text"
                                    required
                                    id="exprience"
                                    name="exprience"
                                    placeholder="Years of experience"
                                    value={formData.experience}
                                    onChange={(e) =>
                                        setFormData({ ...formData, experience: e.target.value })
                                    }
                                    className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color "
                                />
                            </div>

                            {/* skill input  */}
                            <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
                                <Image src={skillIcon} alt="email icon" width={28} />
                                <input
                                    type="text"
                                    required
                                    id="skills"
                                    name="skills"
                                    placeholder="Skills"
                                    value={formData.skills}
                                    onChange={(e) =>
                                        setFormData({ ...formData, skills: e.target.value })
                                    }
                                    className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color "
                                />
                            </div>

                            {/* Submit documents Input */}

                            <div className="flex flex-col items-cente gap-3 ">
                                <div className="flex items-center gap-3 ">
                                    <Image src={bioIcon} alt="email icon" width={25} />
                                    <p className="w-full text-ash-color font-normal xl:text-xl ">
                                        Short bio
                                    </p>
                                </div>

                                <textarea
                                    name="bio"
                                    id="bio"
                                    placeholder="Write about your..."
                                    onChange={(e) => ({ ...formData, bio: e.target.value })}
                                    className="w-full p-4 border rounded-md border-black text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color "
                                ></textarea>
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
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
                                    className="lg:w-14 md:w-12 lg:h-18 md:h-16 w-8 h-10 rounded-md border-2 border-btn-bg outline-none text-xl text-center font-semibold text-ash-color placeholder:text-ash-color"
                                />
                            ))}
                        </div>
                    )}

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-btn-bg hover:opacity-90 text-auth-bg  text-lg font-bold hover:cursor-pointer rounded-md"
                    >
                        {currentStep == 3 ? "Sign up" : " Continue"}
                    </button>

                    {currentStep === 3 && (
                        <p className="mt-6  block md:text-xl text-center text-deep-gray font-normal cursor-pointer ">
                            Resend code in 57s
                        </p>
                    )}
                </form>
            </div>
            {/* ---left-section-- */}
            <Rightside />
        </div>
    );
}
