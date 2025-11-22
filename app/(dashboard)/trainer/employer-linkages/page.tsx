
"use client";
import { useState } from "react";
import Image from "next/image";
import searchIcon from "@/app/assets/trainer/search.svg";
import { Eye } from "lucide-react";
import EmployeInfo from "@/app/components/trainer/employer-linkages/modals/EmployeInfo";



interface LearnerType {
    id: string;
    name: string;
    program: string;
    startDate: string;
    status: string;
    certificate: boolean;
};

const learners = [
    {
        id: '1',
        name: 'Sarah Johnson',
        program: 'Health Assistant',
        rolesHiring: 'Medical Assistant',
        avgSalaryRange: '$45K-$72K',
        activeListings: '28 open',
        status: 'Verified',
        
    },
    {
        id: '2',
        name: 'Michael Chan',
        program: 'Digital Marketing',
        rolesHiring: 'Social Media Manager',
        avgSalaryRange: '$46K-$82K',
        activeListings: '26 open',
        status: 'Not Available',
      
    },
    {
        id: '3',
        name: 'Emily Rodge',
        program: 'Software Developer',
        rolesHiring: 'Front-end Developer',
        avgSalaryRange: '$52K-$72K',
        activeListings: '23 open',
        status: 'Pending',
       
    },
    {
        id: '4',
        name: 'David Washi',
        program: 'IT Support',
        rolesHiring: 'Help desk Technician',
        avgSalaryRange: '$45K-$72K',
        activeListings: '8 open',
        status: 'Verified',
        
    },
    {
        id: '5',
        name: 'Washibo Kar',
        program: 'App Developer',
        rolesHiring: 'Flutter Developer',
        avgSalaryRange: '$78K-$82K',
        activeListings: '21 open',
        status: 'Pending',
        
    },
    {
        id: '6',
        name: 'Dekteri Oselo',
        program: 'Health Assistant',
        rolesHiring: 'Medical Assistant',
        avgSalaryRange: '$52K-$82K',
        activeListings: '20 open',
        status: 'Verified',
      
    }
];



export default function page() {


    const [searchTerm, setSearchTerm] = useState('');
    const [isEmployeInfo, setIsEmployeInfo] = useState(false);
    const [leanersData, setLeanersData] = useState<LearnerType | null>(null);



    const filteredLearners = learners.filter(learner =>
        learner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        learner.id.toLowerCase().includes(searchTerm.toLowerCase())
    );




    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Verified': return 'bg-[#28A74533] text-black border border-[#28A745] ';
            case 'Not Available': return 'bg-[#FFAAAE33] text-black border border-[#E7000B33]';
            case 'Pending': return 'bg-[#B98E0033] text-[#B98E00]';
            default: return 'bg-gray-100 text-black font-normal';
        }
    };




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
                        className="border rounded-lg p-2 pl-9 text-sm w-full outline-none bg-white border-auth-form-border placeholder:text-black placeholder:font-normal text-black font-normal"
                    />
                </div>


            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm bg-white border border-auth-form-border p-4 rounded-lg ">
                    <thead className="">
                        <tr className="text-left border-b border-auth-form-border">
                            <th className="py-3 items-center pl-3">Employer Name</th>
                            <th >Training Program</th>
                            <th >Roles Hiring</th>
                            <th >Avg Salary Range</th>
                            <th >Active Listings</th>
                            <th className=" pl-4">Status</th>
                            <th >Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-auth-form-border">
                        {filteredLearners.map((learner) => (
                            <tr key={learner.id} className="hover:bg-gray-50">
                                <td className="py-3 pl-2 text-sm text-black font-normal">{learner.name}</td>
                                <td className="py-3 text-sm text-black font-normal">{learner.program}</td>
                                <td className="py-3 text-sm text-black font-normal">{learner.rolesHiring}</td>
                                <td className="py-3 text-sm text-black font-normal">{learner.avgSalaryRange}</td>
                                <td className="py-3 text-sm text-black font-normal">{learner.activeListings}</td>
                                <td className="py-3">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium ${getStatusColor(learner.status)}`}>
                                        {learner.status}
                                    </span>
                                </td>
                               
                                <td className="py-3">
                                    <button onClick={()=> setIsEmployeInfo(!isEmployeInfo)} className="flex items-center space-x-1 border border-black p-2 text-sm font-medium rounded-md hover:cursor-pointer">
                                        <Eye className="w-4 h-4" />
                                        <span>View</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


 
          <EmployeInfo onClose={()=> setIsEmployeInfo(false)} isOpen={isEmployeInfo}/>
        </div>
    );
}
