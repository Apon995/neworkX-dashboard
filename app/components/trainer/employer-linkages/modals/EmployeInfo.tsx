"use client";

import Image from "next/image";
import nameIcon from "@/app/assets/trainer/employer-linkages/iconamoon_profile-thin.svg"
import bagIcon from "@/app/assets/trainer/employer-linkages/material-symbols-light_business-center-outline.svg";
import dollerIcon from "@/app/assets/trainer/employer-linkages/$.svg";
import verifyIcon from "@/app/assets/trainer/employer-linkages/mdi_checkbox-marked-circle-outline.svg";
import pendingIcon from "@/app/assets/trainer/employer-linkages/tabler_clock.svg";

import { useEffect, useRef } from "react";

interface EmployeInfoProps {
    isOpen: boolean;
    onClose: () => void;

}

export default function EmployeInfo({ isOpen, onClose }: EmployeInfoProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        function handleClickOutside(e: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onClose]);



    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-2">
            <div ref={modalRef} className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">
                <div className="space-y-5">
                    {/* Header Row */}
                    <div className="flex items-center justify-between ">
                        <div>
                            <div className="text-base text-black font-semibold flex items-center justify-center gap-1">
                                <Image src={nameIcon} alt="usericon" />
                                Employer Name

                            </div>
                            <p className="font-normal text-black text-sm ">Sarah Johnson</p>
                        </div>

                        <div>
                            <div className="text-base text-black font-semibold flex items-center justify-center gap-1">
                                <Image src={bagIcon} alt="bag icon" />
                                Training Programs

                            </div>

                            <p className="font-normal text-black text-sm">Health Assistant</p>
                        </div>
                    </div>

                    {/* Info Row */}
                    <div className="flex items-center justify-between ">
                        <div>

                            <div className="text-base text-black font-semibold flex items-center justify-center gap-1">
                                <Image src={dollerIcon} alt="bag icon" />
                                Average Salary Range

                            </div>


                            <p className="font-semibold text-[#28A745]">$45K - $72K</p>
                        </div>

                        <div>
                              <div className="text-base text-black font-semibold flex items-center justify-center gap-1">
                                <Image src={dollerIcon} alt="bag icon" />
                                Active Job Listings

                            </div>

                          
                            <p className="font-normal text-black text-sm">28 open</p>
                        </div>
                    </div>

                </div>
                {/* Divider */}
                <div className="border-t border-auth-form-border my-6"></div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-5">
                    <button className="flex-1 flex items-center justify-center gap-1 hover:cursor-pointer text-sm bg-black text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                         <Image src={verifyIcon} alt="verify icon" />
                        Verify Placement
                    </button>

                    <button className="flex-1 flex items-center justify-center gap-1 hover:cursor-pointer text-sm border border-gray-400 py-2 rounded-lg font-semibold text-gray-600 hover:bg-gray-100 transition">
                            <Image src={pendingIcon} alt="pending icon" />
                             Mark as Pending
                       
                    </button>
                </div>


            </div>
        </div>
    );
}
