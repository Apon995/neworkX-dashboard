"use client";

import cancelIcon from "@/app/assets/trainer/modals/material-symbols_cancel.svg"
import issueIcon from "@/app/assets/trainer/modals/fluent_certificate-16-filled.svg";
import editIcon from "@/app/assets/trainer/modals/flowbite_edit-outline.svg";
import Image from "next/image";

interface LearnerType  {
  id: string;
  name: string;
  program: string;
  startDate: string;
  status: string;
  certificate: boolean;
};

interface LearnerModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: LearnerType | null 
}

export default function LearnersProfileModal({ isOpen, onClose , data }: LearnerModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-2">
            <div className="bg-white rounded-xl p-8 w-[620px] shadow relative">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-black">Learners Profile</h2>
                    <button onClick={onClose} className="hover:cursor-pointer">
                        <Image src={cancelIcon} alt="cancel icon"/>
                    </button>
                </div>

                {/* Form Section */}
                <div className="grid grid-cols-2 gap-x-10 gap-y-5">

                    {/* Name */}
                    <div>
                        <p className="text-sm text-black font-normal">Name</p>
                        <p className="font-semibold text-black">{data?.name}</p>
                    </div>

                    {/* Program */}
                    <div>
                        <p className="text-sm text-black font-normal">Program</p>
                        <p className="font-semibold text-black">{data?.program}</p>
                    </div>

                    {/* Start Date */}
                    <div>
                        <p className="text-sm text-black font-normal">Start Date</p>
                        <p className="font-semibold text-black">{data?.startDate}</p>
                    </div>

                    {/* Certificate Issued */}
                    <div>
                        <p className="text-sm text-black font-normal">Certificate Issued</p>
                        <p className="font-semibold text-black">9 March, 2025</p>
                    </div>

                    {/* Edit Status */}
                    <div>
                        <label className="flex items-center gap-2 text-sm text-black font-normal">
                            <Image src={editIcon} alt="edit icon"/> Edit Status
                        </label>

                        <select defaultValue={data?.status} className="mt-1 w-full border rounded-md px-3 py-1.5 outline-none">
                            <option>Enrolled</option>
                            <option>Completed</option>
                            <option>Applied</option>
                        </select>
                    </div>

                    {/* Issue Certificate */}
                    <div>
                        <label className="flex items-center gap-2 text-sm text-black font-normal">
                              <Image alt="issue icon" src={issueIcon}/> Issue Certificate
                        </label>

                        <select defaultValue={data?.certificate ? "Yes" : "No"} className="mt-1 w-full border rounded-md px-3 py-1.5 outline-none">
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>
                </div>

                {/* Save Button */}
                <div className="mt-8 flex justify-center">
                    <button onClick={onClose} className="bg-btn-bg transition text-white font-normal hover:cursor-pointer px-12 py-2 rounded-md">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
