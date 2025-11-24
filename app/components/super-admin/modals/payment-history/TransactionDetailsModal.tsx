"use client";

import cancelIcon from "@/app/assets/trainer/modals/material-symbols_cancel.svg";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface ModalProps {
    onClose: () => void;
}

export default function TransactionDetailsModal({ onClose }: ModalProps) {
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


    const data = {
        transactionId: "TXN-2025-2365ML",
        status: "Success",
        name: "Sarah Johnson",
        caseId: "CR-20153",
        email: "sarah.johnson@mail.com",
        amount: "$150.00",
        fees: "$0.00",
        total: "$150.00",
        method: "Credit Card",
        date: "12 March, 2025 14:32:20",
        logs: [
            { title: "Payment Attempted", date: "12 March, 2025 14:32:20" },
            { title: "Payment Received", date: "12 March, 2025 14:32:20" },
            { title: "Payment Confirmed", date: "12 March, 2025 14:32:20" },
        ],
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Success":
                return "bg-[#28A74533] text-[#28A745]";
            case "Pending":
                return "bg-[#FEF9C2] text-[#28A745]";

            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-3 py-1 ">
            <div
                ref={modalRef}
                className="bg-white rounded-xl  w-full max-w-md shadow relative border-b border-auth-form-border max-h-screen overflow-y-auto scrollbar-hide"
            >

                <div className="flex justify-between items-center mb-6 p-4">
                    <h2 className="text-xl font-semibold text-black">Transaction Details</h2>
                    <button onClick={onClose} className="cursor-pointer">
                        <Image src={cancelIcon} alt="cancel icon" />
                    </button>
                </div>

                {/* Transaction */}
                <div className="border-b border-auth-form-border p-4 mb-6 flex md:flex-row flex-col md:justify-between gap-4">
                    <div>
                        <p className="text-xs text-black font-normal">Transaction ID</p>
                        <p className="text-sm font-semibold text-black mt-1">{data.transactionId}</p>
                    </div>

                    <div className="mt-">
                        <span className={`text-xs ${getStatusColor(data.status)} px-3 py-1 rounded-lg font-medium `}>
                            {data.status}
                        </span>
                    </div>
                </div>

                {/* User Info */}
                <div className="border-b border-auth-form-border  p-4 mb-6 space-y-3 ">
                    <h3 className="font-semibold text-black text-sm">User Information</h3>
                    <div className="flex justify-between">

                        <div className="flex flex-col text-sm gap-1">
                            <p className="text-black font-normal ">Name</p>
                            <p className="font-medium text-black">{data.name}</p>
                        </div>

                        <div className="flex flex-col text-sm gap-1">
                            <p className="text-black font-normal ">Case ID</p>
                            <p className="font-medium text-black">{data.caseId}</p>
                        </div>
                    </div>

                    <div className="text-sm pt-2">
                        <p className="text-black font-normal ">Email</p>
                        <p className="font-medium text-black wrap-break-word">{data.email}</p>
                    </div>
                </div>

                {/* Payment Info */}
                <div className="border-b border-auth-form-border  p-4 mb-6 space-y-3">
                    <h3 className="font-semibold text-black text-sm">Payment Information</h3>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-black font-normal ">Amount</p>
                            <p className="font-medium text-black">{data.amount}</p>
                        </div>
                        <div>
                            <p className="text-black font-normal ">Fees</p>
                            <p className="font-medium text-black">{data.fees}</p>
                        </div>
                        <div>
                            <p className="text-black font-normal ">Total</p>
                            <p className="font-medium text-black">{data.total}</p>
                        </div>
                        <div>
                            <p className="text-black font-normal ">Payment Method</p>
                            <p className="font-medium text-black">{data.method}</p>
                        </div>
                    </div>

                    <div className="pt-2 text-sm">
                        <p className="text-black font-normal ">Date & Time</p>
                        <p className="font-medium text-black">{data.date}</p>
                    </div>
                </div>

                {/* Status*/}
                <div className="border-b border-auth-form-border  px-4">
                    <h3 className="font-semibold text-black text-sm mb-3">Status Log</h3>

                    <ul className="space-y-3 text-sm  ">
                        {data.logs.map((log, i) => (
                            <li key={i} className=" pb-2 last:border-none flex gap-2 ">
                                <span className="w-2 h-2 rounded-full bg-black mt-1"></span>

                                <div>
                                    <p className="font-medium text-black">{log.title}</p>
                                    <p className="text-black font-normal text-xs">{log.date}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-4">

                    <button className="w-full bg-black text-white py-4 rounded-lg text-sm font-medium hover:cursor-pointer flex items-center gap-2 justify-center ">
                        <ArrowDownToLine className="w-5 h-5" />
                        Download Receipt
                    </button>
                </div>
            </div>
        </div>
    );
}
