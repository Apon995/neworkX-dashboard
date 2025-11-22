import TotalLearnersIcon from "@/app/assets/trainer/totalLearners.svg";
import activeLeanersIcon from "@/app/assets/trainer/activeLearns.svg";
import compeleteLearnersIcon from "@/app/assets/trainer/compeleteLeaners.svg";
import pendingLeanersIcon from "@/app/assets/trainer/pendingLeaners.svg";
import avarageLeanersIcon from "@/app/assets/trainer/avarageLearners.svg";
import Image from 'next/image';

const statusCards = [
    { id: 1, label: "Total Learners Referred", title: "NEWORXX", value: "8", icon: TotalLearnersIcon },
    { id: 2, label: "Active Learners", title: "Currently Enrolled", value: "2", icon: activeLeanersIcon },
    { id: 3, label: "Completed Learners", title: "Program Graduates", value: "2 ", icon: compeleteLearnersIcon },
    { id: 4, label: "Pending Enrollment", title: "Awaiting start", value: "2", icon: pendingLeanersIcon },
    { id: 5, label: "Average Completion Rate", title: "Overall Performance", value: "38%", icon: avarageLeanersIcon }
]

export default function Statusbar() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-5 md:grid-cols-3  gap-3 justify-start">
            {
                statusCards.map((item, index) => (
                    <div key={index} className="bg-white border border-auth-form-border p-3 rounded-xl shadow text-center">
                        <p className="text-sm text-black font-semibold">{item.label}</p>
                        <div className="flex items-center justify-center gap-2 py-1">
                            <Image src={item.icon} alt={item.label} />
                            <h2 className="text-2xl font-semibold mt-1">{item.value}</h2>
                        </div>
                        <p className="text-xs text-black font-normal">{item.title}</p>
                    </div>
                ))
            }

        </div>
    )
}
