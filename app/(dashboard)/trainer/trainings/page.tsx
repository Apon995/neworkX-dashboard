"use client";
import { useState } from "react";
import Image from "next/image";
import searchIcon from "@/app/assets/trainer/search.svg";
import deleteIcon from "@/app/assets/trainer/trainings/material-symbols_delete.svg";
import DeleteConfirmModal from "@/app/components/trainer/trainings/modals/DeleteConfirm";

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

      <div className="overflow-x-auto">
        <table className="w-full text-sm bg-white border border-auth-form-border p-4 rounded-lg ">
          <thead className="">
            <tr className="text-left border-b border-auth-form-border">
              <th className="py-3 items-center pl-3">Training Name</th>
              <th>Training Link</th>
              <th>Training Duration</th>
              <th>Training Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-auth-form-border">
            {filteredTrainers.map((learner) => (
              <tr key={learner.id} className="hover:bg-gray-50">
                <td className="py-3 pl-2 text-sm text-black font-normal">
                  {learner.name}
                </td>
                <td className="py-3  text-sm text-black font-normal">
                  {learner.link}
                </td>
                <td className="py-3  text-sm text-[#28A745] font-semibold pl-4">
                  {learner.duration}
                </td>
                <td className="py-3  text-sm text-black font-normal pl-4">
                  {learner.deadline}
                </td>

                <td className="py-3 ">
                  <button
                    onClick={() => setIsDelete(!isDelete)}
                    className="flex items-center space-x-1 p-2 text-sm font-medium rounded-md hover:cursor-pointer"
                  >
                    <Image src={deleteIcon} alt="delete icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <DeleteConfirmModal
        isOpen={isDelete}
        onClose={() => setIsDelete(false)}
        onConfirm={() => {
          console.log("Deleted!");
          setIsDelete(false);
        }}
      />
    </div>
  );
}
