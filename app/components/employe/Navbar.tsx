import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import userPic from "@/app/assets/trainer/userpic.jpg";

export default function Navbar() {
    return (
        <nav className="bg-white py-6 px-4 flex flex-row justify-between items-center gap-4 ">
           
            <div className=" text-center w-full">
                <h1 className="font-semibold lg:text-2xl md:text-xl text-base  text-black ">
                  Employer Dashboard
                </h1>
            </div>

            <Link href={"/profile"}>
                <Image
                    src={userPic}
                    alt="User"
                    className=" w-10 h-10 max-w-12 lg:w-12 lg:h-12 rounded-full object-cover ring-2 ring-gray-200 shadow-md"
                />
            </Link>
        </nav>
    )
}
