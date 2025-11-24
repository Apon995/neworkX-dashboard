"use client";
import { useState } from "react";
import Image from "next/image";
import searchIcon from "@/app/assets/trainer/search.svg";
import { Eye } from "lucide-react";
import ApproveEmployerModal from "@/app/components/super-admin/modals/ApproveEmployerModal";
import SuspendEmployerModal from "@/app/components/super-admin/modals/SuspendEmployerModal";
import CompanyDetailsModal from "@/app/components/super-admin/modals/CompanyDetailsModal";
import TrainerDetailsModal from "@/app/components/super-admin/modals/trainers/TrainerDetailsModal";

export const SuspandIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2ZM12 4C10.1 4 8.4 4.6 7.1 5.7L18.3 16.9C19.3 15.5 20 13.8 20 12C20 7.6 16.4 4 12 4ZM16.9 18.3L5.7 7.1C4.6 8.4 4 10.1 4 12C4 16.4 7.6 20 12 20C13.9 20 15.6 19.4 16.9 18.3Z"
      fill="#FF0040"
    />
  </svg>
);

export const VerifiedIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 17L5 12L6.41 10.58L10 14.17L17.59 6.58L19 8M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
      fill="#00BC7D"
    />
  </svg>
);

const employers = [
  {
    id: 1,
    companyName: "TechCorp Industries",
    specialization: "Software",
    Activejobs: 12,
    Status: "Verified",
  },
  {
    id: 2,
    companyName: "GreenLeaf Solutions",
    specialization: "Apps",
    Activejobs: 5,
    Status: "Pending",
  },
  {
    id: 3,
    companyName: "Skyline Builders",
    specialization: "UI/UX",
    Activejobs: 8,
    Status: "Verified",
  },
];

export default function page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isTrainerDetails, setIsTrainerDetails] = useState(false);

  const filteredemployers = employers.filter(
    (learner) =>
      learner.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      learner.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <div className=" bg-white border border-auth-form-border  rounded-lg ">
      <div className=" flex md:items-center items-end md:flex-row md:gap-0 gap-3 flex-col md:justify-between px-4 py-5">
        <div className="relative w-full md:w-1/4">
          <span className="absolute inset-y-0 left-3 flex items-center">
            <Image src={searchIcon} alt="search" />
          </span>

          <input
            type="text"
            placeholder="Search by name or ID"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg p-2 pl-9 focus:border-ash-color transition-colors duration-200 text-sm w-full outline-none bg-white border-auth-form-border placeholder:text-black placeholder:font-normal text-black font-normal"
          />
        </div>

        <select
          name="users"
          id="users"
          className="border rounded-lg p-2 focus:border-ash-color transition-colors duration-200 text-sm  outline-none bg-white border-auth-form-border placeholder:text-black placeholder:font-normal text-black font-normal"
        >
          <option value="">All users</option>
          <option value="approve"> Approved</option>
        </select>
      </div>

      <div className="overflow-x-auto  ">
        <table className="w-full text-sm ">
          <thead className="">
            <tr className="text-left border-b border-auth-form-border text-xs xl:text-sm">
              <th className="py-3 items-center xl:pl-6 pl-4 min-w-28 ">ID</th>
              <th className=" pl-4 min-w-24 ">Name</th>
              <th className="  min-w-28 ">Specialization</th>
              <th className=" min-w-20 ">Active Trainings</th>
              <th>Status</th>
              <th className=" min-w-24"></th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-auth-form-border text-xs xl:text-sm">
            {filteredemployers.map((learner) => (
              <tr key={learner.id} className="hover:bg-gray-50">
                <td className="py-3 text-black font-normal  xl:pl-6 pl-4 ">
                  {learner.id}
                </td>
                <td className="py-3   text-black font-normal">
                  {learner.companyName}
                </td>
                <td className="py-3 text-black font-normal">
                  {learner.specialization}
                </td>
                <td className="py-3 ">
                  <span className={`px-2.5 font-normal `}>
                    {learner.Activejobs}
                  </span>
                </td>
                <td
                  className={` inline-flex items-center px-2.5 py-0.5 rounded-md font-medium ${getStatusColor(
                    learner.Status
                  )}`}
                >
                  {learner.Status}
                </td>
                <td className="py-3 ">
                  <button
                    onClick={() => setIsTrainerDetails(!isTrainerDetails)}
                    className="flex mx-auto items-center space-x-1 border border-black p-2 font-medium rounded-md hover:cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                </td>
                <td className="py-3 flex flex-row lg:gap-4 gap-3 pr-4 md:pr-2">
                  <button className="hover:cursor-pointer">
                    <SuspandIcon />
                  </button>
                  <button
                    className={`hover:cursor-pointer ${
                      learner.Status == "Verified" && "hidden"
                    } `}
                  >
                    <VerifiedIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isTrainerDetails && (
        <TrainerDetailsModal onClose={() => setIsTrainerDetails(false)} />
      )}
    </div>
  );
}
