"use client";

import { Eye } from "lucide-react";
import searchIcon from "@/app/assets/trainer/search.svg";
import Image from "next/image";

export default function page() {
 
  const users = [
  {
    name: "Marcus",
    caseId: "Cr-20-10",
    quiz: "Yes",
    resume: "Completed",
    jobActivity: "12 applications",
    training: "3 Courses",
    certificate: "Verified",
    compliance: "On-track",
  },
  {
    name: "Sarah",
    caseId: "Cr-20-10",
    quiz: "Yes",
    resume: "In Progress",
    jobActivity: "8 applications",
    training: "5 Courses",
    certificate: "Pending",
    compliance: "On-track",
  },
  {
    name: "David Cin",
    caseId: "Cr-20-10",
    quiz: "Yes",
    resume: "Completed",
    jobActivity: "5 applications",
    training: "5 Courses",
    certificate: "Verified",
    compliance: "On-track",
  },
  {
    name: "Jenifer",
    caseId: "Cr-20-10",
    quiz: "Yes",
    resume: "Not Started",
    jobActivity: "2 applications",
    training: "0 Courses",
    certificate: "None",
    compliance: "On-track",
  },
  {
    name: "Robert",
    caseId: "Cr-20-10",
    quiz: "No",
    resume: "Completed",
    jobActivity: "1 application",
    training: "10 Courses",
    certificate: "Verified",
    compliance: "On-track",
  },
  {
    name: "Traylor Sft",
    caseId: "Cr-20-10",
    quiz: "Yes",
    resume: "Completed",
    jobActivity: "3 applications",
    training: "16 Courses",
    certificate: "Verified",
    compliance: "On-track",
  },

  // ⬇️ Extra 10 Dummy Users

  {
    name: "Linda Moore",
    caseId: "Cr-20-11",
    quiz: "Yes",
    resume: "Completed",
    jobActivity: "7 applications",
    training: "2 Courses",
    certificate: "Verified",
    compliance: "On-track",
  },
  {
    name: "Anthony Stark",
    caseId: "Cr-20-12",
    quiz: "No",
    resume: "Not Started",
    jobActivity: "0 applications",
    training: "0 Courses",
    certificate: "None",
    compliance: "On-track",
  },
  {
    name: "Jessica Lane",
    caseId: "Cr-20-13",
    quiz: "Yes",
    resume: "In Progress",
    jobActivity: "9 applications",
    training: "4 Courses",
    certificate: "Pending",
    compliance: "On-track",
  },
  {
    name: "Michael Reed",
    caseId: "Cr-20-14",
    quiz: "Yes",
    resume: "Completed",
    jobActivity: "15 applications",
    training: "6 Courses",
    certificate: "Verified",
    compliance: "On-track",
  },
  {
    name: "Sophia Carter",
    caseId: "Cr-20-15",
    quiz: "Yes",
    resume: "Completed",
    jobActivity: "4 applications",
    training: "2 Courses",
    certificate: "Verified",
    compliance: "On-track",
  },
  {
    name: "Kevin White",
    caseId: "Cr-20-16",
    quiz: "No",
    resume: "In Progress",
    jobActivity: "3 applications",
    training: "1 Course",
    certificate: "None",
    compliance: "On-track",
  },
  {
    name: "Emily Rose",
    caseId: "Cr-20-17",
    quiz: "Yes",
    resume: "Completed",
    jobActivity: "10 applications",
    training: "5 Courses",
    certificate: "Verified",
    compliance: "On-track",
  },
  {
    name: "Jackson Hill",
    caseId: "Cr-20-18",
    quiz: "Yes",
    resume: "Not Started",
    jobActivity: "1 application",
    training: "0 Courses",
    certificate: "None",
    compliance: "On-track",
  },
  {
    name: "Ariana Blake",
    caseId: "Cr-20-19",
    quiz: "Yes",
    resume: "Completed",
    jobActivity: "6 applications",
    training: "4 Courses",
    certificate: "Verified",
    compliance: "On-track",
  },
  {
    name: "Oliver Gray",
    caseId: "Cr-20-20",
    quiz: "No",
    resume: "Completed",
    jobActivity: "2 applications",
    training: "1 Course",
    certificate: "Pending",
    compliance: "On-track",
  },
];




  const getQuizbg = (status: string) => {
    switch (status) {
      case 'Yes': return 'bg-[#28A745] text-white';
      case 'No': return 'bg-[#D4D4D4] text-white';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  const getResumebg = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-black text-white';
      case 'In Progress': return 'bg-transparent text-black border border-black';
      case 'Not Started': return 'bg-[#D4D4D4] text-white';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCertificatebg = (status: string) => {
    switch (status) {
      case 'Verified': return 'bg-black text-white';
      case 'Pending': return 'bg-transparent text-black border border-black';
      case 'None': return 'bg-[#D4D4D4] text-white';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 xl:pb-5  ">

      {/* filter BAR */}
      <div className="bg-white p-4 rounded-xl border border-auth-form-border space-y-4">
        <h3 className="font-semibold">Filters</h3>

        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">


          <div className="relative w-full ">
            <span className="absolute inset-y-0 left-3 flex items-center">
              <Image src={searchIcon} alt="search" />
            </span>

            <input
              type="text"
              placeholder="Search by name or ID"

              className="border rounded-lg p-2 pl-9 text-sm w-full outline-none bg-transparent focus:border-gray-800 transition-colors duration-200 border-auth-form-border placeholder:text-black placeholder:font-normal text-black font-normal"
            />
          </div>

          <select className="border rounded-lg p-2  text-sm outline-none focus:border-gray-800 transition-colors duration-200 border-auth-form-border text-black font-normal">
            <option>All Status</option>
          </select>

          <select className="border rounded-lg p-2 text-sm outline-none focus:border-gray-800 transition-colors duration-200 border-auth-form-border text-black font-normal">
            <option>All Tracks</option>
          </select>

          <select className="border rounded-lg p-2 text-sm outline-none focus:border-gray-800 transition-colors duration-200 border-auth-form-border text-black font-normal">
            <option>All Compliance</option>
          </select>
        </div>
      </div>

      {/* USERS TABLE */}
      <div className="overflow-x-auto bg-white border border-auth-form-border p-4 rounded-lg h-full">
        <h3 className="font-semibold mb-4">All Users ({users.length})</h3>
        <table className="w-full min-w-[900px] text-sm h-full">
          <thead>
            <tr className="text-left border-b border-auth-form-border text-black font-semibold">
              <th className="py-3 pl-3 min-w-[120px] ">User Name</th>
              <th className="min-w-[90px]">Case ID</th>
              <th className="min-w-[70px]  ">Quiz</th>
              <th className="min-w-[110px] ">Resume</th>
              <th className="min-w-[110px] ">Job Activity</th>
              <th className="min-w-[100px]">Training</th>
              <th className="min-w-[110px]">Certificate</th>
              <th className="min-w-[100px]">Compliance</th>
              <th className="min-w-20 text-center ">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-auth-form-border">
            {users.map((user, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="py-3 pl-3">{user.name}</td>
                <td>{user.caseId}</td>

                <td>
                  <span className={`px-3 py-1 rounded-md ${getQuizbg(user.quiz)}`}>
                    {user.quiz}
                  </span>
                </td>

                <td>
                  <span className={`px-3 py-1 rounded-md ${getResumebg(user.resume)}`}>
                    {user.resume}
                  </span>
                </td>

                <td>{user.jobActivity}</td>
                <td>{user.training}</td>

                <td>
                  <span className={`px-3 py-1 rounded-md ${getCertificatebg(user.certificate)}`}>
                    {user.certificate}
                  </span>
                </td>

                <td>
                  <span className="px-3 py-1 rounded-md bg-black text-white">{user.compliance}</span>
                </td>

                <td className="pl-4">
                  <button className="flex items-center gap-1 border px-3 py-1 rounded-md hover:bg-gray-100">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
