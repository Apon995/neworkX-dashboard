'use client';
import tab1 from "@/app/assets/trainer/tabs/tab-1.svg"
import tab2 from "@/app/assets/trainer/tabs/tab-2.svg"
import tab3 from "@/app/assets/trainer/tabs/tab-3.svg"
import tab4 from "@/app/assets/trainer/tabs/tab-4.svg";
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const tabs = [
    { id: 1, label: "Learner Overview", icon: tab1, href: '/trainer' },
    { id: 2, label: "Program Analytics", icon: tab2, href: '/trainer/program-analytics' },
    { id: 3, label: "Employer Linkages", icon: tab3, href: '/trainer/employer-linkages' },
    { id: 4, label: "Trainings", icon: tab4, href: "/trainer/trainings" },

]
export default function Tabs() {


    const pathname = usePathname();


    return (
        <div className="w-full bg-[#E5E7EB] shadow-[0_0_4px_rgba(0,0,0,0.1)] flex p-1 items-center md:flex-nowrap flex-wrap justify-between xl:gap-2 md:gap-1 gap-2 text-sm rounded-lg">

            {
                tabs.map((item, index) => (
                    <Link href={item.href}
                        key={index}
                        className={` w-full py-2 flex items-center justify-center xl:gap-2 md:gap-1 gap-2 rounded-lg hover:cursor-pointer xl:text-base md:text-xs text-base font-semibold ${pathname === item.href
                            ? "bg-white "
                            : "bg-transparent hover:bg-white/70 "
                            }`}

                    >
                        <Image src={item.icon} alt={item.label}></Image>
                        {
                            item.label
                        }
                    </Link>

                ))
            }






        </div>
    )
}
