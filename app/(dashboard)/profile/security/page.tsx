"use client"

import Image from "next/image";
import profile from "@/app/assets/trainer/userpic.jpg";
import { useState } from "react";




export default function page() {

   const [loading, setLoading] = useState<boolean>(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget as HTMLFormElement;
    const fromdata = new FormData(form);
    const currentPass = fromdata.get("current-password");
    const newPass = fromdata.get("new-password");
    const confirmNewPass = fromdata.get("confirm-new-password")
  



    try {
   

    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };


    return (

        <div className="bg-white lg:p-12 md:p-6 p-8 h-full">
            {/* Profile Photo */}

            <div className="flex items-center gap-4 mb-6">
                <div className="relative group">

                    <div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center border border-black">
                        <Image
                            src={profile}
                            alt="Profile Photo"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>


                    <div className="
      absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
      flex items-center justify-center rounded-full 
      transition-all duration-200 cursor-pointer
    ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_279_6087" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_279_6087)">
                                <path d="M12 17.5C13.25 17.5 14.3125 17.0625 15.1875 16.1875C16.0625 15.3125 16.5 14.25 16.5 13C16.5 11.75 16.0625 10.6875 15.1875 9.8125C14.3125 8.9375 13.25 8.5 12 8.5C10.75 8.5 9.6875 8.9375 8.8125 9.8125C7.9375 10.6875 7.5 11.75 7.5 13C7.5 14.25 7.9375 15.3125 8.8125 16.1875C9.6875 17.0625 10.75 17.5 12 17.5ZM12 15.5C11.3 15.5 10.7083 15.2583 10.225 14.775C9.74167 14.2917 9.5 13.7 9.5 13C9.5 12.3 9.74167 11.7083 10.225 11.225C10.7083 10.7417 11.3 10.5 12 10.5C12.7 10.5 13.2917 10.7417 13.775 11.225C14.2583 11.7083 14.5 12.3 14.5 13C14.5 13.7 14.2583 14.2917 13.775 14.775C13.2917 15.2583 12.7 15.5 12 15.5ZM4 21C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V7C2 6.45 2.19583 5.97917 2.5875 5.5875C2.97917 5.19583 3.45 5 4 5H7.15L8.4 3.65C8.58333 3.45 8.80417 3.29167 9.0625 3.175C9.32083 3.05833 9.59167 3 9.875 3H14.125C14.4083 3 14.6792 3.05833 14.9375 3.175C15.1958 3.29167 15.4167 3.45 15.6 3.65L16.85 5H20C20.55 5 21.0208 5.19583 21.4125 5.5875C21.8042 5.97917 22 6.45 22 7V19C22 19.55 21.8042 20.0208 21.4125 20.4125C21.0208 20.8042 20.55 21 20 21H4ZM4 19H20V7H15.95L14.125 5H9.875L8.05 7H4V19Z" fill="white" />
                            </g>
                        </svg>

                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-[#1C1B1F]">Profile Photo</h3>
                    <p className="text-sm text-[#1C1B1F] font-normal">
                        Upload a new photo or change your existing one
                    </p>
                </div>
            </div>


            {/* from*/}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="text-sm text-[#1C1B1F] font-normal mb-1">Current password</label>
                    <input name="current-password" id="current-password" type="password" className="border rounded-lg p-2 text-sm outline-none focus:border-gray-800 transition-colors duration-200 border-auth-form-border text-black font-normal" placeholder="Current password" />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-[#1C1B1F] font-normal mb-1">New password</label>
                    <input name="new-password" id="new-password" type="password" className="border rounded-lg p-2 text-sm outline-none focus:border-gray-800 transition-colors duration-200 border-auth-form-border text-black font-normal" placeholder="New password" />
                </div>

                  <div className="flex flex-col">
                    <label className="text-sm text-[#1C1B1F] font-normal mb-1">Confirm new password</label>
                    <input name="confirm-new-password" type="password" className="border rounded-lg p-2 text-sm outline-none focus:border-gray-800 transition-colors duration-200 border-auth-form-border text-black font-normal" placeholder="Confirm new password" />
                </div>

                <div className="md:col-span-2 flex justify-end mt-4">
                    <button className="bg-[#0B5FFF] text-white px-4 py-2 rounded-lg text-sm font-normal hover:cursor-pointer " >
                        Update password
                    </button>
                </div>
            </form>
        </div>
    );
}
