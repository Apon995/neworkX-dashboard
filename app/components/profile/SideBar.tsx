"use client";
import { ChevronLeft, Menu } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logos/logo-1.png";
import logoutIcon from "@/app/assets/profile/logout.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";






const securityIcon = ({ fill = "#625656" }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_279_6080" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <rect width="20" height="20" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_279_6080)">
            <path d="M11.6667 7.5C11.4306 7.5 11.2326 7.42014 11.0729 7.26042C10.9132 7.10069 10.8333 6.90278 10.8333 6.66667V3.33333C10.8333 3.09722 10.9132 2.89931 11.0729 2.73958C11.2326 2.57986 11.4306 2.5 11.6667 2.5H16.6667C16.9028 2.5 17.1007 2.57986 17.2604 2.73958C17.4201 2.89931 17.5 3.09722 17.5 3.33333V6.66667C17.5 6.90278 17.4201 7.10069 17.2604 7.26042C17.1007 7.42014 16.9028 7.5 16.6667 7.5H11.6667ZM3.33333 10.8333C3.09722 10.8333 2.89931 10.7535 2.73958 10.5938C2.57986 10.434 2.5 10.2361 2.5 10V3.33333C2.5 3.09722 2.57986 2.89931 2.73958 2.73958C2.89931 2.57986 3.09722 2.5 3.33333 2.5H8.33333C8.56944 2.5 8.76736 2.57986 8.92708 2.73958C9.08681 2.89931 9.16667 3.09722 9.16667 3.33333V10C9.16667 10.2361 9.08681 10.434 8.92708 10.5938C8.76736 10.7535 8.56944 10.8333 8.33333 10.8333H3.33333ZM11.6667 17.5C11.4306 17.5 11.2326 17.4201 11.0729 17.2604C10.9132 17.1007 10.8333 16.9028 10.8333 16.6667V10C10.8333 9.76389 10.9132 9.56597 11.0729 9.40625C11.2326 9.24653 11.4306 9.16667 11.6667 9.16667H16.6667C16.9028 9.16667 17.1007 9.24653 17.2604 9.40625C17.4201 9.56597 17.5 9.76389 17.5 10V16.6667C17.5 16.9028 17.4201 17.1007 17.2604 17.2604C17.1007 17.4201 16.9028 17.5 16.6667 17.5H11.6667ZM3.33333 17.5C3.09722 17.5 2.89931 17.4201 2.73958 17.2604C2.57986 17.1007 2.5 16.9028 2.5 16.6667V13.3333C2.5 13.0972 2.57986 12.8993 2.73958 12.7396C2.89931 12.5799 3.09722 12.5 3.33333 12.5H8.33333C8.56944 12.5 8.76736 12.5799 8.92708 12.7396C9.08681 12.8993 9.16667 13.0972 9.16667 13.3333V16.6667C9.16667 16.9028 9.08681 17.1007 8.92708 17.2604C8.76736 17.4201 8.56944 17.5 8.33333 17.5H3.33333Z" fill={fill} />
        </g>
    </svg>

);

const profileIcon = ({ fill = "#625656" }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_279_6074" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <rect width="20" height="20" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_279_6074)">
            <path d="M3.33268 10.8337V12.5003H16.666V10.8337H3.33268ZM3.33268 1.66699H16.666C17.1243 1.66699 17.5167 1.83019 17.8431 2.15658C18.1695 2.48296 18.3327 2.87533 18.3327 3.33366V12.5003C18.3327 12.9587 18.1695 13.351 17.8431 13.6774C17.5167 14.0038 17.1243 14.167 16.666 14.167H13.3327V16.9795C13.3327 17.2989 13.2007 17.5385 12.9368 17.6982C12.673 17.858 12.4021 17.8684 12.1243 17.7295L10.3743 16.8545C10.2632 16.785 10.1382 16.7503 9.99935 16.7503C9.86046 16.7503 9.73546 16.785 9.62435 16.8545L7.87435 17.7295C7.59657 17.8684 7.32574 17.858 7.06185 17.6982C6.79796 17.5385 6.66602 17.2989 6.66602 16.9795V14.167H3.33268C2.87435 14.167 2.48199 14.0038 2.1556 13.6774C1.82921 13.351 1.66602 12.9587 1.66602 12.5003V3.33366C1.66602 2.87533 1.82921 2.48296 2.1556 2.15658C2.48199 1.83019 2.87435 1.66699 3.33268 1.66699ZM3.33268 8.33366H16.666V3.33366H3.33268V8.33366Z" fill={fill} />
        </g>
    </svg>


)


const routes = [
    { id: 1, label: "Profile", icon: profileIcon, href: '/profile' },
    { id: 2, label: "Security", icon: securityIcon, href: '/profile/security' },


]

export default function SideBar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();


    return (
        <>
            {/* mobile nav */}
            <div className="md:hidden w-full bg-white p-4 flex justify-between items-center shadow">
                <Image src={logo} alt="Logo" className="h-8 w-auto" />
                <button
                    onClick={() => setOpen(true)}
                    className="text-gray-700 text-lg font-bold"
                >
                    <Menu />
                </button>
            </div>

            {/* mobile overlay */}
            {open && (
                <div className="fixed inset-0 bg-black/15 z-40 md:hidden" onClick={() => setOpen(false)}></div>
            )}

            {/* large screen side bar tab/pc */}
            <aside
                className={`bg-white lg:p-6 p-4 w-64 md:w-56 flex flex-col gap-12 md:static md:h-auto h-full fixed top-0 left-0 z-50 transform transition-transform duration-300 md:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-between items-center md:block relative">
                    <Image src={logo} alt="Logo" className="max-w-[80%]" />
                    <button
                        onClick={() => setOpen(false)}
                        className={`md:hidden text-3xl font-bold rounded-full ${open && "absolute -right-16 bg-white text-black shadow p-2 "} `}
                    >
                        <ChevronLeft />
                    </button>
                </div>

                <nav className="flex flex-col justify-between h-full w-full">
                    <div className="flex flex-col gap-2">
                        {routes.map((item: any) => (
                            <Link
                                href={item.href}
                                key={item.id}
                                className={`${pathname == item.href
                                    ? "bg-[#0B5FFF] text-white"
                                    : "text-[#625656] bg-transparent hover:bg-gray-50"
                                    } p-2 rounded-md flex flex-row items-center gap-2 font-semibold text-base`}
                            >
                                <item.icon
                                    fill={pathname == item.href ? "white" : "#625656"}
                                />
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <button className="text-[#854C3A] flex flex-row items-center gap-2 font-semibold text-base hover:bg-gray-50 p-2 rounded-md hover:cursor-pointer">
                        <Image src={logoutIcon} alt="Logout Icon" />
                        Logout
                    </button>
                </nav>
            </aside>
        </>
    )
}
