"use client";

import cancelIcon from "@/app/assets/trainer/modals/material-symbols_cancel.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface ModalProps {
    onClose: () => void;
}

export default function TrainerDetailsModal({ onClose }: ModalProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-2">
            <div
                ref={modalRef}
                className="bg-white rounded-xl p-8 w-md 2xl:w-lg shadow relative"
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-black">Trainer details</h2>
                    <button onClick={onClose} className="hover:cursor-pointer">
                        <Image src={cancelIcon} alt="cancel icon" />
                    </button>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="space-y-2">
                        <p className="text-sm text-black font-semibold">Training name</p>
                        <select className="outline-none border border-auth-form-border bg-[#F3F3F5] px-1 py-2 rounded-md w-full">
                            <option value="">Web Development</option>
                        </select>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm text-black font-semibold">Training Link</p>
                        <p className="font-normal text-black">www.facebook.com/training</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm text-black font-semibold">Training Duration</p>
                        <p className="font-normal text-black">3 Months</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-sm text-black font-semibold">Training Deadline</p>
                        <p className="font-normal text-black">12 March, 2025</p>
                    </div>


                </div>
            </div>
        </div>
    );
}
