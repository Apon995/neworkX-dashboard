"use client";

import cancelIcon from "@/app/assets/trainer/modals/material-symbols_cancel.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";

const data = {
  id: 12,
  name: "Sarah Johson",
  industry: "HealthCare",
  email: "Techcor@gmail.com",
  status: "pending",
  certificate: false,
};

interface ModalProps {
  onClose: () => void;
}

const getStatusColor = (status: string) => {
  switch (status.toLocaleLowerCase()) {
    case "verified":
      return "bg-[#28A74533] text-[#28A745]";
    case "rejected":
      return "bg-[#DBEAFE] text-[#6A0DAD]";
    case "pending":
      return "bg-[#B98E0033] text-[#B98E00]";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function EmployerProfileModal({ onClose }: ModalProps) {
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
          <h2 className="text-xl font-semibold text-black">Employer Profile</h2>
          <button onClick={onClose} className="hover:cursor-pointer">
            <Image src={cancelIcon} alt="cancel icon" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          <div>
            <p className="text-sm text-black font-normal">Company Name</p>
            <p className="font-semibold text-black">{data?.name}</p>
          </div>
          <div>
            <p className="text-sm text-black font-normal">Industry</p>
            <p className="font-semibold text-black">{data?.industry}</p>
          </div>

          <div>
            <p className="text-sm text-black font-normal">Email</p>
            <p className="font-semibold text-black">{data?.email}</p>
          </div>

          <div>
            <p className="text-sm text-black font-normal">Status</p>
            <p
              className={`font-semibold text-sm px-2.5 py-1 w-fit mt-1 rounded-md ${getStatusColor(
                data.status
              )}`}
            >
              {data.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
