"use client";
import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import searchIcon from "@/app/assets/trainer/search.svg";
import { Eye } from "lucide-react";
import TransctionDetailsModal from "@/app/components/super-admin/modals/payment-history/TransactionDetailsModal";


export const PickDate = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2H8C8.26522 2 8.51957 2.10536 8.70711 2.29289C8.89464 2.48043 9 2.73478 9 3V4H14V3C14 2.73478 14.1054 2.48043 14.2929 2.29289C14.4804 2.10536 14.7348 2 15 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V4C17.7956 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V18C20 18.7956 19.6839 19.5587 19.1213 20.1213C18.5587 20.6839 17.7956 21 17 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2ZM15 4H16V3H15V4ZM8 4V3H7V4H8ZM6 5C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V8H19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H6ZM4 18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V9H4V18ZM12 13H17V18H12V13ZM13 14V17H16V14H13Z" fill="black" />
  </svg>


)


const learners = [
  {
    id: "1",
    transID: "Txn-2025-001",
    caseID: "CR-2596",
    amount: "$150.00",
    method: "stripe",
    date: "2 March, 2025 10:21 PM",
    status : "Success"
  },
  {
    id: "3",
    transID: "Txn-2025-001",
    caseID: "CR-2596",
    amount: "$150.00",
    method: "stripe",
    date: "2 March, 2025 10:21 PM",
    status : "Pending"
  },
 {
    id: "4",
    transID: "Txn-2025-001",
    caseID: "CR-2596",
    amount: "$150.00",
    method: "stripe",
    date: "2 March, 2025 10:21 PM",
    status : "Success"
  },
 {
    id: "5",
    transID: "Txn-2025-001",
    caseID: "CR-2596",
    amount: "$150.00",
    method: "stripe",
    date: "2 March, 2025 10:21 PM",
    status : "Pending"
  },
  {
    id: "6",
    transID: "Txn-2025-001",
    caseID: "CR-2596",
    amount: "$150.00",
    method: "stripe",
    date: "2 March, 2025 10:21 PM",
    status : "Pending"
  },
  
];

export default function page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [isDetails , setIsDetails] = useState(false);

  const filteredLearners = learners.filter(
    (learner) =>
      learner.transID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      learner.caseID.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div>
      <div className="w-full space-y-1">
        <h2 className="text-xl font-semibold text-black">Post a New Job</h2>
        <p className="text-xs md:text-sm text-black font-normal">
          Fill in the details to create a new job posting
        </p>
      </div>
      <div className=" flex lg:flex-row-reverse md:flex-row md:gap-5 gap-3 flex-col-reverse my-4 w-full lg:justify-end">
        <div className="relative w-full lg:w-1/4 md:w-1/3">
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

        <div className="relative w-full md:w-1/4 ">
          <span className="absolute inset-y-0 left-3 flex items-center z-50">
            <PickDate />
          </span>
          <DatePicker

            selected={date}
            onChange={(d) => setDate(d)}
            placeholderText="Pick a date"
            className="border border-auth-form-border rounded-lg py-1.5 pl-10 w-full bg-white outline-none text-black font-normal focus:border-ash-color transition-colors duration-200"
            popperPlacement="bottom"
            popperClassName="z-50"
          />
        </div>





      </div>

      <div className="overflow-x-auto  ">
        <table className="w-full text-sm bg-white border border-auth-form-border  rounded-lg ">
          <thead className="">
            <tr className="text-left border-b border-auth-form-border text-xs xl:text-sm">
              <th className="py-3 items-center xl:pl-6 pl-4 min-w-28 ">
                Transation ID
              </th>
              <th className="  min-w-24 ">Case ID</th>
              <th className="  min-w-28 ">Amount</th>
              <th className=" min-w-20 ">Payment Method</th>
              <th className="pl-6">Date</th>
              <th className=" pl-2 min-w-24 ">Status</th>
              <th className="pl-4">Details</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-auth-form-border text-xs xl:text-sm">
            {filteredLearners.map((learner) => (
              <tr key={learner.id} className="hover:bg-gray-50">
                <td className="py-3 text-black font-normal  xl:pl-6 pl-4 ">
                  {learner.transID}
                </td>
                <td className="py-3   text-black font-normal">
                  {learner.caseID}
                </td>
                <td className="py-3 text-black font-normal">
                  {learner.amount}
                </td>
                <td className="py-3 pl-4">
                 {learner.method}
                </td>
                <td className="py-3 pl-4">
                         {learner.date}
                </td>
                <td className="py-3 ">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-md font-medium ${getStatusColor(
                      learner.status
                    )}`}
                  >
                    {learner.status}
                  </span>
                </td>
                
          
                <td className="py-3 pr-4">
                  <button
                    onClick={()=> setIsDetails(!isDetails)}
                    className="flex mx-auto items-center space-x-1 border border-black p-2 font-medium rounded-md hover:cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  
     {
      isDetails && 
       <TransctionDetailsModal onClose={()=> setIsDetails(false)}/>
     }
    </div>
  );
}
