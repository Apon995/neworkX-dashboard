"use client";

import EditJobDetailsModal from "@/app/components/employe/modals/EditJobDetails";
import { Pencil, SquarePen } from "lucide-react";
import { useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Senior IT Engineer",
    category: "IT & Software",
    status: "Active",
    applicants: 24,
    postedDate: "2 March, 2025",
  },
  {
    id: 2,
    title: "Senior IT Engineer",
    category: "IT & Software",
    status: "Active",
    applicants: 32,
    postedDate: "2 March, 2025",
  },
  {
    id: 3,
    title: "Senior IT Engineer",
    category: "IT & Software",
    status: "Active",
    applicants: 24,
    postedDate: "2 March, 2025",
  },
];

export default function Page() {

  const [isEdit, setIsEdit] = useState(false);



  return (
    <div className="w-full space-y-4">

      <div>
        <h1 className="text-black font-semibold text-xl">Manage Jobs</h1>
        <p className="text-black text-sm font-normal">
          View & manage all your job postings
        </p>
      </div>

      {/* large screen Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg border bg-white border-auth-form-border">

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left ">
              <th className="py-3 pl-4">Job Title</th>
              <th className="">Category</th>
              <th className="">Status</th>
              <th className="">Applicants</th>
              <th className="">Posted Date</th>
              <th className="pr-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="py-3 pl-4">{job.title}</td>
                <td className="py-3">{job.category}</td>
                <td className="py-3">
                  <span className="px-3 py-1.5 rounded-md bg-black text-white text-xs">
                    {job.status}
                  </span>
                </td>
                <td className="py-3 pl-3">
                  <span className="p-3 bg-[#E0E7FF] text-light-blue font-normal rounded-full text-xs ">
                    {job.applicants}
                  </span>
                </td>
                <td className="py-3">{job.postedDate}</td>
                <td className="py-3 pr-8 text-right ">
                  <button onClick={() => setIsEdit(!isEdit)} className="p-2 rounded hover:cursor-pointer">

                    <SquarePen className="w-4 h-4 " />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* small screen layout*/}
      <div className="md:hidden space-y-4">

        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border rounded-lg p-4 border-auth-form-border space-y-2"
          >
            <div className="flex justify-between">
              <p className="font-semibold text-black">{job.title}</p>

              <button onClick={() => setIsEdit(!isEdit)} className="p-2 rounded ">

                <SquarePen className="w-4 h-4 " />
              </button>
            </div>

            <p>
              <span className="font-semibold">Category: </span>
              {job.category}
            </p>

            <p className="flex items-center gap-2">
              <span className="font-semibold">Status:</span>
              <span className="px-3 py-1.5 rounded-md bg-black text-white text-xs">
                {job.status}
              </span>
            </p>

            <p>
              <span className="font-semibold">Applicants:</span>{" "}
              <span className="px-3 py-1 bg-[#E8EDFF] text-[#3A52FF] rounded-full text-xs font-medium">
                {job.applicants}
              </span>
            </p>

            <p>
              <span className="font-semibold">Posted Date:</span>{" "}
              {job.postedDate}
            </p>
          </div>
        ))}

      </div>



      {
        isEdit && 
        <EditJobDetailsModal isOpen={isEdit} onClose={()=> setIsEdit(false)}/>
      }
    </div>
  );
}
