import SideBar from "@/app/components/agency/SideBar";
import userPic from "@/app/assets/trainer/userpic.jpg";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import Navbar from "@/app/components/agency/Navbar";

export default function AgencyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex flex-col xl:flex-row max-w-360 mx-auto gap-4 relative">
            {/* <SideBar /> */}
            <SideBar/>
            <main className="flex-1 flex flex-col gap-5 ">
               <Navbar/>

                <div className="flex-1 2xl:pr-0 xl:pr-5 px-2 xl:px-0 overflow-y-auto  ">{children}</div>
            </main>
        </div>
    );
}
