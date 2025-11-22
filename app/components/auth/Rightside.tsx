import React from 'react';
import second from "@/app/assets/auth/second-42.png";
import third from "@/app/assets/auth/third-45.png";
import forth from "@/app/assets/auth/forth-44.png";
import fifth from "@/app/assets/auth/fifth-43.png";
import Image from 'next/image';

export default function Rightside() {
    return (

        <div className="hidden xl:block flex-1 relative bg-[#5599FF] max-w-[470px] ">
            <div className="absolute left-[-124px] z-10">
                <Image src={second} alt="second" />
            </div>
            <div className="absolute left-60">
                <Image src={third} alt="third" />
            </div>


            <div className="absolute bottom-0 -left-10">
                <Image src={fifth} alt="forth" />
            </div>
            <div className="absolute bottom-0 left-[-55px] z-10">
                <Image src={forth} alt="forth" />
            </div>


        </div>
    )
}
