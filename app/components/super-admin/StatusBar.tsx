
import cardOneIcon from "@/app/assets/employe/total-jobs.png";
import cardTwoIcon from "@/app/assets/employe/active-jobs.png";
import Image from 'next/image';


const statusCards = [
    { id: 1, label: "Total Users", title: "All user types", interest: "+12.5% from last month", value: "12,874", icon: cardOneIcon },
    { id: 2, label: "Active Programs", title: "Currently running", interest: "+15% from last month", value: "48", icon: cardTwoIcon },
    { id: 2, label: "Pending Verifications", title: "Currently running", interest: "+15% from last month", value: "48", icon: cardTwoIcon },
    { id: 2, label: "Placement rate", title: "Last 30 days", interest: "+15% from last month", value: "84%", icon: cardTwoIcon },

]

export default function StatusBar() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
            {
                statusCards.map((item, index) => (
                    <div key={index} className="bg-white border border-auth-form-border md:p-4 xl:p-6 p-5 rounded-xl text-center flex flex-row items-center justify-between">
                        <div className="flex flex-col ">
                            <p className="text-sm text-black font-medium text-start">{item.label}</p>
                            <p className="text-2xl font-semibold text-start py-1">{item.value}</p>
                            <p className="text-xs text-black font-normal text-start py-1">{item.title}</p>
                            <p className="text-[10px] text-black font-normal text-start">{item.interest}</p>
                        </div>
                        <Image src={item.icon} alt={item.label} />
                    </div>
                ))
            }

        </div>

    )
}
