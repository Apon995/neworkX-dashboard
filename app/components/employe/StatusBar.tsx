
import cardOneIcon from "@/app/assets/employe/total-jobs.png";
import cardTwoIcon from "@/app/assets/employe/active-jobs.png";
import cardThreeIcon from "@/app/assets/employe/total-applicants.png";
import cardFourIcon from "@/app/assets/employe/hiredIcon.png";
import Image from 'next/image';


const statusCards = [
    { id: 1, label: "Total Jobs Posted", title : "" , value: "24", icon: cardOneIcon },
    { id: 2, label: "Active Jobs", title: "", value: "48", icon: cardTwoIcon },
    { id: 3, label: "Total Applicants", title: "Currently running", value: "148", icon: cardThreeIcon },
    { id: 4, label: "Hired Candidates", title: "Last 30 days", value: "18", icon: cardFourIcon },
]

export default function StatusBar() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">
            {
                statusCards.map((item, index) => (
                    <div key={index} className="bg-white border border-auth-form-border p-4 rounded-xl text-center flex flex-row items-center justify-between">
                        <div className="flex flex-col ">
                            <p className="text-sm text-black font-medium text-start">{item.label}</p>
                            <p className="text-2xl font-semibold text-start">{item.value}</p>
                            <p className="text-xs text-black font-normal text-start">{item.title}</p>
                        </div>
                        <Image src={item.icon} alt={item.label} />
                    </div>
                ))
            }

        </div>

    )
}
