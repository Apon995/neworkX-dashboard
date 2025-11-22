
"use client";
import { useState } from "react";
import Image from "next/image";

import addTrainingIcon from "@/app/assets/trainer/add-training.svg";
import searchIcon from "@/app/assets/trainer/search.svg";
import { Download, Eye } from "lucide-react";
import LearnersProfileModal from "@/app/components/trainer/modals/LearnersProfileModal";
import AddTrainingModal from "@/app/components/trainer/modals/AddtrainingModal";



interface LearnerType  {
  id: string;
  name: string;
  program: string;
  startDate: string;
  status: string;
  certificate: boolean;
};

const learners = [
  { id: '1', name: 'Sarah Johnson', program: 'Health Assistant', startDate: '9 March, 2025', status: 'Enrolled', certificate: false },
  { id: '2', name: 'McIntell Chan', program: 'Digital Marketing', startDate: '9 March, 2025', status: 'Completed', certificate: true },
  { id: '3', name: 'Emily Rodge', program: 'Software Developer', startDate: '9 March, 2025', status: 'Applied', certificate: false },
  { id: '4', name: 'David Wash', program: 'IT Support', startDate: '9 March, 2025', status: 'Enrolled', certificate: false },
  { id: '5', name: 'Washibo Kar', program: 'App Developer', startDate: '9 March, 2025', status: 'Enrolled', certificate: false },
  { id: '6', name: 'Dekkeri Osajo', program: 'Health Assistant', startDate: '9 March, 2025', status: 'Enrolled', certificate: false },
];




export default function page() {


  const [searchTerm, setSearchTerm] = useState('');
  const [islearner, setIsleaner] = useState(false);
  const [isTraining, setIsTraining] = useState(false);
  const [leanersData , setLeanersData]= useState<LearnerType | null>(null);



  const filteredLearners = learners.filter(learner =>
    learner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    learner.id.toLowerCase().includes(searchTerm.toLowerCase())
  );




  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-[#28A74533] text-[#28A745]';
      case 'Enrolled': return 'bg-[#DBEAFE] text-[#6A0DAD]';
      case 'Applied': return 'bg-[#B98E0033] text-[#B98E00]';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleleanerProfile = (id:string)=>{
    setIsleaner(!islearner)
    setLeanersData( learners.find((e)=> e.id == id) || null )


  }

  

  return (
    <div >
      <div className="flex items-center justify-between mb-4">

        <div className="relative w-full md:w-1/4">
          <span className="absolute inset-y-0 left-3 flex items-center">
            <Image src={searchIcon} alt="search" />
          </span>

          <input
            type="text"
            placeholder="Search by name or ID"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg p-2 pl-9 focus:border-gray-800 transition-colors duration-200 text-sm w-full outline-none bg-white border-auth-form-border placeholder:text-black placeholder:font-normal text-black font-normal"
          />
        </div>

        <button onClick={()=> setIsTraining(!isTraining)} className="bg-white border flex items-center gap-2 border-auth-form-border text-black font-normal hover:cursor-pointer px-4 py-2 rounded-lg md:text-base text-sm">
          <Image src={addTrainingIcon} alt="add training" />
          Add Training
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm bg-white border border-auth-form-border p-4 rounded-lg ">
          <thead className="">
            <tr className="text-left border-b border-auth-form-border">
              <th className="py-3 items-center pl-3">Learner Name</th>
              <th className=" pl-4">Program</th>
              <th className=" pl-4">Start Date</th>
              <th className=" pl-4">Status</th>
              <th >Certificate</th>
              <th className=" pl-4">Actions</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-auth-form-border">
            {filteredLearners.map((learner) => (
              <tr key={learner.id} className="hover:bg-gray-50">
                <td className="py-3 pl-2 text-sm text-black font-normal">{learner.name}</td>
                <td className="py-3  text-sm text-black font-normal">{learner.program}</td>
                <td className="py-3  text-sm text-black font-normal">{learner.startDate}</td>
                <td className="py-3 ">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium ${getStatusColor(learner.status)}`}>
                    {learner.status}
                  </span>
                </td>
                <td className="py-3 pl-4">
                  {learner.certificate ? (
                    <span className="p-2 bg-black text-white rounded-md">yes</span>
                  ) : (
                    <span className="bg-[#ECEEF2] p-2 rounded-md text-black">No</span>
                  )}
                </td>
                <td className="py-3 ">
                  <button onClick={()=> handleleanerProfile(learner.id)} className="flex mx-auto items-center space-x-1 border border-black p-2 text-sm font-medium rounded-md hover:cursor-pointer">
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                </td>
                <td className="py-3  ">
                  <button  className="flex items-center space-x-1 mx-auto border border-black p-2 text-sm font-medium rounded-md hover:cursor-pointer">
                
                    <Download className="w-4 h-4" />
                    <span>Resume</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <LearnersProfileModal isOpen={islearner} onClose={() => setIsleaner(false)} data={leanersData} />
      
       <AddTrainingModal isOpen={isTraining} onClose={() => setIsTraining(false)} />
    </div>
  );
}
