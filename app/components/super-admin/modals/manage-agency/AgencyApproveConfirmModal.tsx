"use client";

import { useEffect, useRef, useState } from "react";

interface ModalProps {
    onClose: () => void;
}

export default function AgencyApproveConfirmModal({ onClose }: ModalProps) {
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
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center px-3 z-50">
            <div
                ref={modalRef}
                className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 sm:p-8"
            >
                {/* Title */}
                <h2 className="text-xl font-semibold text-black">Approve Agency</h2>

                {/* Message */}
                <p className="text-black font-normal mt-2">
                    Are you sure you want to Approve this Agency?
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 border border-[#E7000B33] text-black rounded-md hover:bg-red-50 transition hover:cursor-pointer"
                    >
                        Cancel
                    </button>

                    <button className="px-6 py-2 bg-black text-white rounded-md hover:opacity-90 transition hover:cursor-pointer">
                        Confirm Approve
                    </button>
                </div>
            </div>
        </div>
    );
}
