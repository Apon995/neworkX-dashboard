
import cardOneIcon from "@/app/assets/agency/cardOneIcon.png";
import cardTwoIcon from "@/app/assets/agency/cardTwoIcon.png";
import cardThreeIcon from "@/app/assets/agency/cardThreeIcon.png";
import cardFourIcon from "@/app/assets/agency/cardFourIcon.png";
import Image from 'next/image';



const statusCards = [
    { id: 1, label: "Total Assigned Users", title : "" , value: "100", icon: cardOneIcon },
    { id: 2, label: "In Progress", title: "", value: "40", icon: cardTwoIcon },
    { id: 3, label: "Completed", title: "Currently running", value: "50", icon: cardThreeIcon },
    { id: 4, label: "Non-Complaint", title: "Last 30 days", value: "10", icon: cardFourIcon },
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
                            <p className="text-xs text-black font-normal text-start">{item.title}</p>
                        </div>
                        <Image src={item.icon} alt={item.label} />
                    </div>
                ))
            }

        </div>

    )
}
