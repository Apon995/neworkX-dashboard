"use client";


import StatusBar from '@/app/components/agency/StatusBar';
import Image from 'next/image';



export const UpcoimgIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2H8C8.26522 2 8.51957 2.10536 8.70711 2.29289C8.89464 2.48043 9 2.73478 9 3V4H14V3C14 2.73478 14.1054 2.48043 14.2929 2.29289C14.4804 2.10536 14.7348 2 15 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V4C17.7956 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V18C20 18.7956 19.6839 19.5587 19.1213 20.1213C18.5587 20.6839 17.7956 21 17 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2ZM15 4H16V3H15V4ZM8 4V3H7V4H8ZM6 5C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V8H19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H6ZM4 18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V9H4V18ZM12 13H17V18H12V13ZM13 14V17H16V14H13Z" fill="black" />
  </svg>

)

const upcomingDates = [
  { name: "Michel Brown", date: "9/20/2025", status: "On-track", id: 1, },
  { name: "Jenier Lopez", date: "9/20/2025", status: "Delayed", id: 2 },
  { name: "David Chen", date: "9/20/2025", status: "Non-Complaint", id: 3 },
  { name: "Lisa Anderson", date: "9/20/2025", status: "On-track", id: 4 },
]

const compliance = [
  { name: "On-track", user: 6, userpercentage: 60, id: 1, },
  { name: "Delayed", user: 1, userpercentage: 55, id: 2, },
  { name: "Non-Compliant", user: 1, userpercentage: 30, id: 3, },

]

const activityBreakdown = [
  { name: "Quiz Completed", value : 6 , id: 1, },
  { name: "Resumes Done", value : 4 ,  id: 2, },
  

]


const getStatusColor = (status: string) => {
  switch (status) {
    case 'On-track': return 'bg-black text-white';
    case 'Delayed': return 'bg-transparent text-black border border-black';
    case 'Non-Complaint': return 'bg-[#FF0040] text-white';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getUserPercentageColor = (status: string) => {
  switch (status) {
    case 'On-track': return 'bg-[#28A745]';
    case 'Delayed': return 'bg-[#FF0040]';
    case 'Non-Compliant': return 'bg-[#FF0040]';
    default: return 'bg-gray-400';
  }
};



export default function page() {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      {/* status bar / cards section */}
      <StatusBar />


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* upcoming court dates */}
        <div className="bg-white rounded-xl p-5 border border-auth-form-border">
          <div className="font-semibold mb-4 flex items-center gap-2 text-black">
            <UpcoimgIcon />
            Upcoming Court Dates
          </div>

          <div className="flex flex-col divide-y divide-auth-form-border">
            {upcomingDates.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-4 ">
                <div className='space-y-1'>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-black font-normal">CR-2024-2310</p>
                </div>

                <div className="flex flex-col text-right space-y-1">
                  <p className="text-sm font-semibold">{item.date}</p>
                  <p
                    className={`text-xs px-3 py-1 font-semibold rounded-lg ${getStatusColor(item.status)} `}
                  >
                    {item.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* compliance status*/}
        <div className="bg-white rounded-xl p-5 border border-auth-form-border">
          <h3 className="font-semibold">Compliance Status Distribution</h3>

          <div className="mt-6 space-y-3">

            {
              compliance.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm space-y-2 ">
                    <span className='text-black font-semibold'>{item.name}</span>
                    <span className='font-semibold text-black'>{item.user} users</span>
                  </div>
                  <div className="w-full h-3 bg-[#D9D9D9] rounded-full mt-1">
                    <div className= {`h-full ${getUserPercentageColor(item.name)} rounded-full  `} style={{ width: `${item.userpercentage}%` }}></div>
                  </div>
                </div>
              ))
            }

        
          </div>

          {/* Activity Breakdown */}
          <h3 className="font-semibold mt-6 mb-6">Activity Breakdown</h3>

          <div className="grid grid-cols-2 gap-4">
           {
            activityBreakdown.map((item , index)=> (
              <div key={index} className="border rounded-xl p-4 text-center bg-[#F9FAFB] border-auth-form-border">
              <h1 className="text-2xl font-semibold text-black">{item.value}</h1>
              <p className="text-sm text-black font-normal">{item.name}</p>
            </div>
            ))
           }
          </div>
        </div>
      </div>
    </div>
  );
}
