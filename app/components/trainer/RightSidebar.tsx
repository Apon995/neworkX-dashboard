import React from 'react'
import notificationIcon from "@/app/assets/trainer/notification.svg";
import calender from "@/app/assets/trainer/calender.svg";
import Image from "next/image";
import alertIcon from "@/app/assets/trainer/mdi-light_alert-circle.svg";
import okayIcon from "@/app/assets/trainer/completeIcon.svg";
import warningIcon from "@/app/assets/trainer/warning.svg";
import warningIconRed from "@/app/assets/trainer/warning-red.svg"

const notifications = [
    { id: 1, label: "5 new learners applied this week", icon: alertIcon },
    { id: 2, label: "2 Learners Completed Logistics Program", icon: okayIcon },
    { id: 3, label: "Certificate pending for jennifer Martinez", icon: warningIcon },

]

const Compliance = [
    { id: 1, label: "Uprate Training Completion Data for October", icon: warningIconRed },
    { id: 2, label: "Submit quarterly Performance report", icon: warningIcon },

];


export default function RightSidebar() {
  return (
    <div className="w-full lg:w-1/4 space-y-6  bg-white p-5  shadow-[0_0_4px_rgba(0,0,0,0.25)] ">

                    {/* Notification */}
                    <div className="bg-white border border-auth-form-border rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <Image src={notificationIcon} alt="notification" />
                            <h2 className="font-semibold text-lg text-black">Notification</h2>
                        </div>

                        {
                            notifications.map((item, index) => (
                                <div key={index} className="mb-5 pb-4 border-b border-auth-form-border last:border-b-0">
                                    <div className="flex items-start gap-2">
                                        <Image src={item.icon} alt={item.label} />
                                        <p className="text-sm text-black font-normal">{item.label}</p>
                                    </div>
                                    <button type="button" className="w-full hover:cursor-pointer border mt-3 rounded-md py-2 text-sm text-black font-normal border-auth-form-border transition">
                                        View Details
                                    </button>
                                </div>
                            ))
                        }

                    </div>

                    {/* Compliance Reminders */}
                    <div className="bg-white border border-gray-300 rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <Image src={calender} alt="calender icon" />
                            <h2 className="font-semibold text-lg">Compliance Reminders</h2>
                        </div>

                        {
                            Compliance.map((item, index) => (
                                <div key={index} className="mb-5 pb-4 border-b border-auth-form-border last:border-b-0">
                                    <div className="flex items-start gap-2">
                                        <Image src={item.icon} alt={item.label} />
                                        <p className="text-sm text-black font-normal">{item.label}</p>
                                    </div>
                                    <button type="button" className="w-full hover:cursor-pointer border mt-3 rounded-md py-2 text-sm text-black font-normal border-auth-form-border transition">
                                        Mark as Complete
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
  )
}
