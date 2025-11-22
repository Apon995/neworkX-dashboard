"use client";
import { useState } from "react";
import { ChevronDown, Download } from "lucide-react";


export const ReportIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 10H8.5V12H7.5V10ZM10 9H11V12H10V9ZM5 7H6V12H5V7Z" fill="black" />
    <path d="M12.5 2.5H11V2C11 1.73478 10.8946 1.48043 10.7071 1.29289C10.5196 1.10536 10.2652 1 10 1H6C5.73478 1 5.48043 1.10536 5.29289 1.29289C5.10536 1.48043 5 1.73478 5 2V2.5H3.5C3.23478 2.5 2.98043 2.60536 2.79289 2.79289C2.60536 2.98043 2.5 3.23478 2.5 3.5V14C2.5 14.2652 2.60536 14.5196 2.79289 14.7071C2.98043 14.8946 3.23478 15 3.5 15H12.5C12.7652 15 13.0196 14.8946 13.2071 14.7071C13.3946 14.5196 13.5 14.2652 13.5 14V3.5C13.5 3.23478 13.3946 2.98043 13.2071 2.79289C13.0196 2.60536 12.7652 2.5 12.5 2.5ZM6 2H10V4H6V2ZM12.5 14H3.5V3.5H5V5H11V3.5H12.5V14Z" fill="black" />
  </svg>

)

export default function page() {
  const [selectedUser, setSelectedUser] = useState("");
  const [reportType, setReportType] = useState("Progress Report");

  const users = [
    "Marcus",
    "Sarah",
    "David",
    "Jenifer",
    "Robert",
    "Traylor",
  ];

  return (
    <div className="space-y-3 flex items-center flex-col ">

      <div className=" max-w-lg w-full space-y-1">
        <h2 className="text-xl font-semibold text-black">Reports & Export</h2>
        <p className="md:text-sm text-xs text-black font-normal">
          Generate & Download reports for court filing & monitoring
        </p>
      </div>


      <div className="bg-white rounded-xl border border-gray-300 p-6 max-w-lg w-full">

        <div className="flex items-center gap-2 mb-5">
         <ReportIcon/>
          <h3 className="text-lg font-semibold">Single User Report</h3>
        </div>

        {/* Select User */}
        <div className="space-y-3 mb-5">
          <p className="text-sm text-black font-semibold">Select User</p>
          <div className="relative">
            <select
              className="w-full outline-none rounded-lg px-4 py-3 text-sm text-ash-color bg-[#F3F3F5] appearance-none"
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
            >
              <option value="">Choose a user...</option>
              {users.map((u, i) => (
                <option key={i} value={u}>
                  {u}
                </option>
              ))}
            </select>
            <ChevronDown className="w-5 h-5 text-gray-500 absolute right-3 top-3" />
          </div>
        </div>

        {/* Report Type */}
        <div className="space-y-3 mb-6">
          <p className="text-sm text-black font-semibold">Report Type</p>
          <div className="relative">
            <select
              className="w-full outline-none rounded-lg px-4 py-3 text-sm text-ash-color bg-[#F3F3F5] appearance-none"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option value="Progress Report">Progress Report</option>
              <option value="Compliance Report">Compliance Report</option>
              <option value="Training Report">Training Report</option>
            </select>
            <ChevronDown className="w-5 h-5 text-gray-500 absolute right-3 top-3" />
          </div>
        </div>


        <button
          disabled={!selectedUser}
          className={`w-full md:text-base text-sm flex items-center flex-wrap justify-center gap-2 py-3 rounded-lg text-white font-medium transition bg-[#818089] hover:cursor-pointer`}
        >
          <Download className="w-5 h-5 md:block hidden" />
          Download User Report (PDF)
        </button>
      </div>
    </div>
  );
}
