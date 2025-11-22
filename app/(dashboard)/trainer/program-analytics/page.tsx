"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
} from "recharts";

const data = [
    { program: "Logistics", learners: 45 },
    { program: "Healthcare", learners: 30 },
    { program: "IT", learners: 25 },
    { program: "Digital", learners: 20 },
    { program: "Construction", learners: 38 },
];

const completionData = [
    { program: "Logistics", completion: 80 },
    { program: "Healthcare", completion: 90 },
    { program: "IT", completion: 72 },
    { program: "Construction", completion: 85 },
];

export default function page() {
    return (
        <div className="min-h-screen space-y-6">
            <h1 className="text-2xl font-semibold text-black">
                Program Performance Metrics
            </h1>

            {/* Top Charts */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="bg-white md:p-6 p-3 rounded-2xl shadow-sm">
                    <h2 className="text-lg font-semibold text-black mb-4">
                        Learners by Program
                    </h2>

                     {/* --tab-or-desktop-- */}
                    <div className="w-full h-72 md:block hidden">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} barCategoryGap="25%">
                                <CartesianGrid strokeDasharray="3 3" stroke="#CCCCCC" />
                                <XAxis dataKey="program" interval={0} tick={{ fontSize: 14 }} />
                                <YAxis width={30} />
                                <Tooltip />

                                <Bar
                                    dataKey="learners"
                                    fill="#8884D8"
                                    barSize={50}
                                    radius={[0, 0, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                     {/* Mobile Only */}
                    <div className="block md:hidden w-full h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={data}
                                margin={{ top: 10, right: 10, left: 0, bottom: 40 }}
                                barCategoryGap="15%"
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                <XAxis
                                    dataKey="program"
                                    interval={0}
                                    tick={{ fontSize: 10 }}
                                    angle={-30}
                                    textAnchor="end"
                                />
                                <YAxis width={30} />
                                <Tooltip />

                                <Bar
                                    dataKey="learners"
                                    fill="#8884D8"
                                    barSize={35}
                                    radius={[4, 4, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>


                </div>

                <div className="bg-white md:p-6 p-3 rounded-2xl shadow-sm">
                    <h2 className="text-lg font-semibold text-black mb-4">
                        Average Completion Rate per Program
                    </h2>

                    {/* --tab-or-desktop-- */}
                    <div className="w-full h-64 md:block hidden">
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart
                                data={completionData}
                                margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#CCCCCC" />
                                <XAxis dataKey="program" tick={{ fontSize: 14 }} />
                                <YAxis domain={[0, 100]} width={40} />
                                <Tooltip />

                                <Line
                                    type="monotone"
                                    dataKey="completion"
                                    stroke="#82CA9D"
                                    strokeWidth={3}
                                    dot={{ r: 5, strokeWidth: 2 }}
                                    activeDot={{ r: 7 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Mobile Only */}
                    <div className="block md:hidden w-full h-72">
                        <ResponsiveContainer width="100%" height={260}>
                            <LineChart
                                data={completionData}
                                margin={{ top: 10, right: 10, left: -10, bottom: 30 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" stroke="#DDDDDD" />

                                <XAxis
                                    dataKey="program"
                                    tick={{ fontSize: 10 }}
                                    angle={-30}
                                    textAnchor="end"
                                    interval={0}
                                />

                                <YAxis domain={[0, 100]} width={50} tick={{ fontSize: 10 }} />

                                <Tooltip />

                                <Line
                                    type="monotone"
                                    dataKey="completion"
                                    stroke="#82CA9D"
                                    strokeWidth={2}
                                    dot={{ r: 3 }}
                                    activeDot={{ r: 5 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                </div>
            </div>

            {/* Demand Alignment Indicator */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-lg font-semibold text-black mb-4">
                    Demand Alignment Indicator
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {/* Healthcare Card */}
                    <div className="p-4 bg-white rounded-xl border border-[#0000001A]">
                        <h3 className="font-medium text-black text-base">Healthcare</h3>
                        <p className="text-sm text-[#717182] font-medium">
                            Healthcare Support
                        </p>
                        <span className="mt-2 inline-block px-3 py-1 bg-[#F0FDF4] text-[#00A63E] rounded-full text-sm font-medium border border-[#0000001A]">
                            High Demand
                        </span>
                    </div>

                    {/* IT Card */}
                    <div className="p-4 bg-white rounded-xl border border-[#0000001A]">
                        <h3 className="font-medium text-black text-base">IT</h3>
                        <p className="text-sm text-[#717182] font-medium">
                            IT Support Specialist
                        </p>
                        <span className="mt-2 inline-block px-3 py-1 bg-[#FEFCE8] text-[#D08700] rounded-full text-sm font-medium border border-[#0000001A]">
                            Medium Demand
                        </span>
                    </div>

                    {/* Digital Card */}
                    <div className="p-4 bg-white rounded-xl border border-[#0000001A]">
                        <h3 className="font-medium text-black text-base">Digital</h3>
                        <p className="text-sm text-[#717182] font-medium">
                            Digital Marketing
                        </p>
                        <span className="mt-2 inline-block px-3 py-1 bg-[#FEFCE8] text-[#D08700] rounded-full text-sm font-medium border border-[#0000001A]">
                            Medium Demand
                        </span>
                    </div>

                    {/* Construction Card */}
                    <div className="p-4 bg-white rounded-xl border border-[#0000001A]">
                        <h3 className="font-medium text-black text-base">Construction</h3>
                        <p className="text-sm text-[#717182] font-medium">
                            Construction Trades
                        </p>
                        <span className="mt-2 inline-block px-3 py-1 bg-[#F0FDF4] text-[#00A63E] rounded-full text-sm font-medium border border-[#0000001A]">
                            High Demand
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
