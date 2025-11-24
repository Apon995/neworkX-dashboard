"use client";

import cancelIcon from "@/app/assets/trainer/modals/material-symbols_cancel.svg";
import { ArrowDownToLine, Check, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import AgencyApproveConfirmModal from "./AgencyApproveConfirmModal";

interface ModalProps {
    onClose: () => void;
}

export default function AgencyDetailsModal({ onClose }: ModalProps) {

    const [isApprove , setIsApprove] = useState(false)

    const data = {
        status: "Pending",
        agencyName: "Supreme Court of justice",
        agencyId: "CR-20153",
        email: "sarah.johnson@mail.com",
        repName: "Judge Sarah",
        regDate: "24 March, 2025",
        contact: "+12056089-5826",
        address: "1 First Street NE, DC",
        documents: [
            {
                title: "Court Authorization Letter.pdf",
                date: "12 March, 2025 14:32:20",
            },
            {
                title: "Official Registration.pdf",
                date: "12 March, 2025 14:32:20",
            },
        ],
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Approved":
                return "bg-[#28A74533] text-[#28A745]";
            case "Pending":
                return "bg-[#F1E8CC] text-[#B98E00]";
            default:
                return "bg-gray-200 text-gray-700";
        }
    };

    return (
        <>
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-3  z-50">
            <div
                
                className="bg-white rounded-xl w-full max-w-md shadow border border-gray-200 max-h-[95vh] overflow-y-auto scrollbar-hide"
            >
                {/* Header */}
                <div className="p-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-black">Agency Details</h2>
                        <button onClick={onClose}>
                            <Image src={cancelIcon} alt="cancel icon" />
                        </button>
                    </div>

                    <div className="mt-2">
                        <span
                            className={`text-xs px-3 py-1 rounded-lg font-medium ${getStatusColor(
                                data.status
                            )}`}
                        >
                            {data.status}
                        </span>
                    </div>
                </div>

                {/* Basic Info */}
                <div className="p-4 border-b border-gray-200 space-y-3">
                    <h3 className="font-semibold text-black text-sm">Basic Information</h3>

                    <div className="flex justify-between text-sm">
                        <div>
                            <p className="text-black font-normal">Agency Name</p>
                            <p className="font-medium text-black">{data.agencyName}</p>
                        </div>
                        <div>
                            <p className="text-black font-normal">Agency ID</p>
                            <p className="font-medium text-black">{data.agencyId}</p>
                        </div>
                    </div>

                    <div className="text-sm pt-2">
                        <p className="text-black font-normal">Email</p>
                        <p className="font-medium text-black wrap-break-word">{data.email}</p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="p-4 border-b border-gray-200 space-y-3">
                    <h3 className="font-semibold text-black text-sm">Contact Information</h3>

                    <div className="flex justify-between text-sm">
                        <div>
                            <p className="text-black font-normal">Representative Name</p>
                            <p className="font-medium text-black">{data.repName}</p>
                        </div>
                        <div>
                            <p className="text-black font-normal">Registration Date</p>
                            <p className="font-medium text-black">{data.regDate}</p>
                        </div>
                    </div>

                    <div className="text-sm">
                        <p className="text-black font-normal">Contact Number</p>
                        <p className="font-medium text-black">{data.contact}</p>
                    </div>

                    <div className="text-sm">
                        <p className="text-black font-normal">Address</p>
                        <p className="font-medium text-black w-56 wrap-break-word">{data.address}</p>
                    </div>
                </div>

                {/* Submitted Documents */}
                <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-black text-sm mb-3">
                        Submitted Documents
                    </h3>

                    <ul className="space-y-3 text-sm">
                        {data.documents.map((doc, i) => (
                            <li
                                key={i}
                                className="  flex flex-row gap-2 ">
                                 <span className="w-2 h-2 rounded-full bg-black mt-2"></span>
                            
                                <div className="flex justify-between items-center gap-2 flex-1">
                                    <div className="flex flex-col">
                                        <p className="font-medium text-black">{doc.title}</p>
                                        <p className="text-gray-600 text-xs">{doc.date}</p>
                                    </div>
                                    <ArrowDownToLine className="w-5 h-5 cursor-pointer" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Buttons */}
                <div className="p-4 space-y-3">
                    <button onClick={()=> setIsApprove(!isApprove)} className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:cursor-pointer">
                        <Check className="w-5 h-5" /> Approve
                    </button>

                    <button onClick={onClose} className="w-full border border-black text-black py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:cursor-pointer">
                       <X className="w-5 h-5" />  Reject
                    </button>
                </div>
            </div>










        </div>

        {
            isApprove && 
            <AgencyApproveConfirmModal onClose={()=> setIsApprove(false)}/>
        }
        
        
        </>
    );
}
