"use client";
import Image from "next/image";
import Rightside from "@/app/components/auth/Rightside";
import { useRef, useState } from "react";
import locationIcon from "@/app/assets/auth/location.svg";
import emailIcon from "@/app/assets/auth/email.svg";
import passwordIcon from "@/app/assets/auth/password.svg";
import LogoOne from "@/app/components/logos/LogoOne";
import userIcon from "@/app/assets/auth/user.svg";
import agencyIcon from "@/app/assets/auth/agency.svg";
import agencyNameIcon from "@/app/assets/auth/agency-name.svg";
import documentIcon from "@/app/assets/auth/document.svg";
import upload from "@/app/assets/auth/upload.svg";
import deleteIcon from "@/app/assets/auth/delete.svg";

export default function page() {
    const [loading, setLoading] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [dragOver, setDragOver] = useState<boolean>(false);
    const [files, setFiles] = useState<string[]>([]);
    const [fileUploading, setfileUploading] = useState<boolean>(false);
    const [code, setCode] = useState<string[]>(new Array(6).fill(""));
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    const [formData, setFormData] = useState({
        representativeName: "",
        email: "",
        agencyID: "",
        password: "",
        confirmPassword: "",
        agencyName: "",
        address: "",
    });


    const steps = [
        { number: 1, title: "basic-info" },
        { number: 2, title: "agency-info" },
        { number: 3, title: "verification" },
    ];



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        if (currentStep < steps.length) {
            setCurrentStep((prev) => prev + 1);
            setLoading(false)
            return;
        }

        try {
            console.log(formData)
            setCurrentStep(1)
        } catch {
            console.log("error");
        } finally {
            setLoading(false);
        }
    };


    // ----step-2-----
    const handleFileUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return;
        if (fileUploading) return;
        setfileUploading(true);
        const file = files[0];

        await new Promise((resolve) => setTimeout(resolve, 2000));

        try {
            setFiles((pre) => [...pre, file.name]);
        } catch {
        } finally {
            setfileUploading(false);
        }
    };

    const handleFileDelete = (id: string) => {
        setFiles((el) => el.filter((ele) => ele !== id));
    };

    const triggerFileInput = (inputId: string) => {
        const fileInput = document.getElementById(inputId) as HTMLInputElement;
        if (fileInput) {
            fileInput.click();
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);

        const files = e.dataTransfer.files;

        handleFileUpload(files);
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
                        {
                            currentStep == 3 ? "Verification" : "Sign Up"
                        }
                    </h2>
                    {/* ---step--proccess---- */}
                    <div className="flex flex-row items-center justify-center">
                        {steps.map((el, index) => (
                            <div key={index} className="flex items-center">
                                <div
                                    onClick={() => {
                                        if (el.number < currentStep) {
                                            setCurrentStep((pre) => pre - 1)
                                        }
                                    }}
                                    className={`${currentStep == el.number
                                        ? "bg-btn-bg text-white border-0"
                                        : "text-black bg-transparent font-medium"
                                        } ${el.number < currentStep && "hover:cursor-pointer"} border border-black  w-8 h-8 flex items-center justify-center rounded-full `}
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
                                    id="Representative-name"
                                    name="Representative-name"
                                    placeholder="Representative name"
                                    value={formData.representativeName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, representativeName: e.target.value })
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

                            {/* Office locaton Input */}

                            <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
                                <Image src={agencyIcon} alt="email icon" width={22} />
                                <input
                                    type="text"
                                    required
                                    id="Agency-ID"
                                    name="Agency-ID"
                                    placeholder="Agency ID"
                                    value={formData.agencyID}
                                    onChange={(e) =>
                                        setFormData({ ...formData, agencyID: e.target.value })
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
                                        setFormData({ ...formData, confirmPassword: e.target.value })
                                    }
                                    className="w-full text-ash-color font-normal bg-transparent outline-none text-xl placeholder:text-ash-color"
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-8">
                            {/*Agency name Input */}
                            <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
                                <Image src={agencyNameIcon} alt="user icon" width={22} />
                                <input
                                    type="text"
                                    required
                                    id="Agency-name"
                                    name="Agency-name"
                                    placeholder="Agency name"
                                    value={formData.agencyName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, agencyName: e.target.value })
                                    }
                                    className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color"
                                />
                            </div>

                            {/*address */}

                            <div className="flex items-center gap-3  border-b border-gray-500 focus-within:border-gray-900  transition-colors duration-200 pb-2">
                                <Image src={locationIcon} alt="email icon" width={16} />
                                <input
                                    type="text"
                                    required
                                    id="Address"
                                    name="Address"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={(e) =>
                                        setFormData({ ...formData, address: e.target.value })
                                    }
                                    className="w-full text-ash-color font-normal bg-transparent outline-none xl:text-xl placeholder:text-ash-color "
                                />
                            </div>

                            {/* Submit documents Input */}

                            <div className="flex flex-col items-cente gap-3 ">
                                <div className="flex items-center gap-3 ">
                                    <Image src={documentIcon} alt="email icon" width={22} />
                                    <p className="w-full text-ash-color font-normal xl:text-xl ">
                                        Submit documents
                                    </p>
                                    <input
                                        id="uploadFile"
                                        name="uploadFile"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleFileUpload(e.target.files)}
                                        className="hidden"
                                    />
                                </div>

                                <div
                                    className={`border-2 border-dashed rounded-2xl p-6 text-center transition-colors duration-200 cursor-pointer border-black
                                        `}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={(e) => handleDrop(e)}
                                    onClick={() => triggerFileInput("uploadFile")}
                                >
                                    <button
                                        type="button"
                                        className="bg-auth-form-border p-2 rounded-full hover:cursor-pointer"
                                    >
                                        <Image src={upload} alt="upload" />
                                    </button>

                                    <p className="text-base text-black font-medium mt-2">
                                        {fileUploading ? "Uploading ...." : "Tap to upload file"}
                                    </p>
                                </div>

                                {files.map((el, index) => (
                                    <div
                                        key={index}
                                        className="bg-light-blue/15 border border-light-blue flex justify-between p-3 rounded-md"
                                    >
                                        <div className="flex items-center gap-0.5 text-black font-medium md:text-base text-xs">
                                            <span>{index + 1}.</span>
                                            <p>{el}</p>
                                        </div>
                                        <button
                                            onClick={() => handleFileDelete(el)}
                                            type="button"
                                            className="hover:cursor-pointer"
                                        >
                                            <Image src={deleteIcon} alt="deleteIcon" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 3 &&
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
                                    className="lg:w-14 md:w-12 lg:h-18 md:h-16 w-8 h-10 rounded-md border-2 border-btn-bg outline-none text-xl text-center font-semibold"
                                />
                            ))}
                        </div>
                    }

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-btn-bg hover:opacity-90 text-auth-bg  text-lg font-bold hover:cursor-pointer rounded-md"
                    >
                        {currentStep == 3 ? "Sign up" : ' Continue'}
                    </button>

                    {
                        currentStep === 3 &&
                        <p className="mt-6  block md:text-xl text-center text-deep-gray font-normal cursor-pointer hover:underline">
                            Resend code in 57s
                        </p>
                    }
                </form>
            </div>
            {/* ---left-section-- */}
            <Rightside />
        </div>
    );
}
