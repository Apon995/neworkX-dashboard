"use client";
import { useState } from "react";
import Image from "next/image";
import searchIcon from "@/app/assets/trainer/search.svg";
import deleteIcon from "@/app/assets/trainer/trainings/material-symbols_delete.svg";
import DeleteConfirmModal from "@/app/components/trainer/modals/DeleteConfirm";

const trainings = [
  {
    id: "1",
    name: "Healthcare",
    link: "www.facebook.com/training",
    duration: "6 Months",
    deadline: "12 March, 2025",
  },
  {
    id: "2",
    name: "Web Development",
    link: "www.linkedin.com/training",
    duration: "3 Months",
    deadline: "16 June, 2025",
  },
  {
    id: "3",
    name: "Digital Marketing",
    link: "www.google.com/training10",
    duration: "7 Days",
    deadline: "28 July, 2025",
  },
  {
    id: "4",
    name: "IT Support",
    link: "www.gmail.com/training145",
    duration: "10 Days",
    deadline: "31 March",
  },
  {
    id: "5",
    name: "App Developer",
    link: "www.youtube.com/duration",
    duration: "2 Week",
    deadline: "21 February",
  },
  {
    id: "6",
    name: "Software Developer",
    link: "www.facebook.com/ttraini745",
    duration: "1 Month",
    deadline: "21 January",
  },
];

export default function page() {
  const [isDelete, setIsDelete] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrainers = trainings.filter(
    (learner) =>
      learner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      learner.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-full md:w-1/4">
          <span className="absolute inset-y-0 left-3 flex items-center">
            <Image src={searchIcon} alt="search" />
          </span>

          <input
            type="text"
            placeholder="Search by name or ID"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg p-2 pl-9 text-sm w-full outline-none bg-white border-auth-form-border placeholder:text-black placeholder:font-normal text-black font-normal"
          />
        </div>
      </div>

      <div className="overflow-x-auto w-full rounded-lg border border-auth-form-border bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left bg-gray-50 border-b border-auth-form-border text-xs md:text-sm">
              <th className="py-3 px-4 min-w-[150px]">Training Name</th>
              <th className="py-3 px-4 min-w-[150px]">Training Link</th>
              <th className="py-3 px-4 min-w-[140px]">Training Duration</th>
              <th className="py-3 px-4 min-w-[150px]">Training Deadline</th>
              <th className="py-3 px-4 min-w-[100px]">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-auth-form-border">
            {filteredTrainers.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50 transition text-xs md:text-sm"
              >
                <td className="py-3 px-4 text-black">{row.name}</td>

                <td className="py-3 px-4 text-blue-600 underline">
                  <a href={row.link} target="_blank" rel="noopener noreferrer">
                    {row.link}
                  </a>
                </td>

                <td className="py-3 px-4 text-[#28A745] font-semibold">
                  {row.duration}
                </td>

                <td className="py-3 px-4 text-black">{row.deadline}</td>

                <td className="py-3 px-4">
                  <button
                    onClick={() => setIsDelete(!isDelete)}
                    className="flex items-center gap-1 p-2 rounded-md hover:bg-gray-100 transition"
                  >
                    <Image src={deleteIcon} alt="delete icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDelete && (
        <DeleteConfirmModal
          isOpen={isDelete}
          onClose={() => setIsDelete(false)}
          onConfirm={() => {
            console.log("Deleted!");
            setIsDelete(false);
          }}
        />
      )}
    </div>
  );
}
