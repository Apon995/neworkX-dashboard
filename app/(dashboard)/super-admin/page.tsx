"use client";

import StatusBar from "@/app/components/super-admin/StatusBar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import cardOneIcon from "@/app/assets/super-admin/total-revenue.png";
import cardTwoIcon from "@/app/assets/super-admin/monthy-revenue.png";
import Image from "next/image";

const programData = [
  { name: "Web", enrolled: 480, completed: 390 },
  { name: "IT", enrolled: 60, completed: 40 },
  { name: "Health", enrolled: 300, completed: 240 },
  { name: "Flutter", enrolled: 140, completed: 120 },
  { name: "Marketing", enrolled: 280, completed: 260 },
  { name: "Spoken", enrolled: 330, completed: 300 },
  { name: "Health", enrolled: 200, completed: 160 },
];

const totalEnrollments = programData.reduce((sum, p) => sum + p.enrolled, 0);
const completionRate = (
  programData.reduce((sum, p) => sum + p.completed / p.enrolled, 0) /
  programData.length
).toFixed(2);

const applicantStatus = [
  { name: "Employers", value: 650 },
  { name: "Trainees", value: 6420 },
  { name: "Trainers", value: 1420 },
  { name: "Job Seekers", value: 3850 },
];

const COLORS = ["#F59E0B", "#8B5CF6", "#10B981", "#3B82F6"];
const getPercent = (value: number) => ((value / 329) * 100).toFixed(0) + "%";

const CustomLegend = () => (
  <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center md:items-start">
    {applicantStatus.map((item, index) => (
      <div key={index} className="flex items-center gap-2">
        <span
          style={{
            width: 12,
            height: 12,
            backgroundColor: COLORS[index],
            display: "inline-block",
            borderRadius: 3,
          }}
        ></span>

        <span style={{ color: COLORS[index], fontSize: 14 }}>{item.name}</span>
      </div>
    ))}
  </div>
);

const CustomLegendBottom = () => (
  <div className="grid grid-cols-2 gap-4 px-4">
    {applicantStatus.map((item, index) => (
      <div
        key={index}
        className="text-[14px] font-semibold flex flex-col items-cente"
        style={{ color: COLORS[index] }}
      >
        {item.name}
        <div className="flex flex-row gap-2 items-center">
          <span
            style={{
              width: 12,
              height: 12,
              backgroundColor: COLORS[index],
              display: "inline-block",
              borderRadius: 3,
            }}
          ></span>

          {item.value}
        </div>
      </div>
    ))}
  </div>
);

const statusCards = [
  {
    id: 1,
    label: "Total Revenue",
    title: "All earnings",
    interest: "+12.5% from last month",
    value: "12,874",
    icon: cardOneIcon,
  },
  {
    id: 2,
    label: "Monthly Revenue",
    title: "All earnings",
    interest: "+12.5% from last month",
    value: "1,874",
    icon: cardTwoIcon,
  },
];

export default function page() {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* --- Top Stats Section --- */}
      <StatusBar />

      <div className="flex lg:flex-row flex-col gap-4">
        <div className="flex flex-col flex-1 gap-4">
          {/* --- Revenue Section --- */}
          <div className="flex md:flex-row flex-col gap-4 h-fit">
            {statusCards.map((item, index) => (
              <div
                key={index}
                className="bg-white border flex-1 h-fit border-auth-form-border md:p-4 xl:p-6 p-5 rounded-xl text-center flex flex-row items-center justify-between"
              >
                <div className="flex flex-col ">
                  <p className="text-sm text-black font-medium text-start">
                    {item.label}
                  </p>
                  <p className="text-2xl font-semibold text-start py-1">
                    $ {item.value}
                  </p>
                  <p className="text-xs text-black font-normal text-start py-1">
                    {item.title}
                  </p>
                  <p className="text-[10px] text-black font-normal text-start">
                    {item.interest}
                  </p>
                </div>
                <Image src={item.icon} alt={item.label} />
              </div>
            ))}
          </div>

          {/* -----User Distribution-Pie-chart--- */}
          <div className="bg-white p-4 md:p-6 rounded-2xl w-full border border-auth-form-border xl:min-w-[571px] lg:min-w-[494px] space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-black">
              User Distribution
            </h2>

            {/* tab and destop screen */}

            <div className="w-full h-[430px]  md:flex flex-col justify-center hidden">
              <CustomLegend />

              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={applicantStatus}
                    cx="50%"
                    cy="50%"
                    outerRadius={110}
                    innerRadius={40}
                    label={({ name, value }) => `${name} ${getPercent(value)}`}
                    labelLine={false}
                    dataKey="value"
                  >
                    {applicantStatus.map((entry, idx) => (
                      <Cell key={idx} fill={COLORS[idx]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="flex items-center justify-center">
                <CustomLegendBottom />
              </div>
            </div>

            {/* small screen */}
            <div className="md:hidden w-full h-[450px]   flex flex-col justify-center items-center">
              <CustomLegend />
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={applicantStatus}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={35}
                    label={({ name, value }) => `${getPercent(value)}`}
                    labelLine={false}
                    dataKey="value"
                  >
                    {applicantStatus.map((entry, idx) => (
                      <Cell key={idx} fill={COLORS[idx]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <CustomLegendBottom />
            </div>
          </div>
        </div>

        {/* ----progamme-performance-bar-chart--- */}
        <div className="bg-white p-4 md:p-5 rounded-2xl h-fit border border-auth-bg w-full max-w-[500p flex-1">
          <h2 className="text-lg md:text-xl font-semibold text-black mb-4">
            Program Performance
          </h2>

          {/*desktop medium screen*/}
          <div className="hidden md:flex flex-col justify-center items-cente gap-6 w-full h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={programData} barCategoryGap="25%">
                <CartesianGrid strokeDasharray="3 3" stroke="#CCCCCC" />
                <XAxis dataKey="name" interval={0} tick={{ fontSize: 12 }} />
                <YAxis width={40} />
                <Tooltip />
                <Bar activeBar={false} dataKey="completed" barSize={35} radius={[8, 8, 0, 0]}>
                  {programData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index % 2 === 0 ? "#3B82F6" : "#10B981"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className="flex flex-row justify-between items-center">
              <div>
                <p className="text-sm text-black font-medium">
                  Average Completion Rate
                </p>
                <p className="text-base font-bold">{completionRate}%</p>
              </div>

              <div>
                <p className="text-sm text-black font-medium">
                  Total Enrollments
                </p>
                <p className="text-base font-bold">
                  {totalEnrollments.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* small screen*/}
          <div className="md:hidden w-full h-96 flex flex-col justify-center gap-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart  data={programData} barCategoryGap="30%">
                <CartesianGrid strokeDasharray="3 3" stroke="#CCCCCC" />
                <XAxis
                  dataKey="name"
                  interval={0}
                  tick={{ fontSize: 10 }}
                  angle={-30}
                  textAnchor="end"
                />
                <YAxis width={30} tick={{ fontSize: 10 }} />
                <Tooltip />
                <Bar activeBar={false} dataKey="completed" barSize={35} radius={[8, 8, 0, 0]}>
                  {programData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index % 2 === 0 ? "#3B82F6" : "#10B981"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className="flex flex-col justify-center gap-4 w-full ">
              <div className=" text-center">
                <p className="text-xs text-black font-medium ">
                  Average Completion Rate
                </p>
                <p className="text-sm font-bold">{completionRate}%</p>
              </div>

              <div className=" text-center">
                <p className="text-xs text-black font-medium">
                  Total Enrollments
                </p>
                <p className="text-sm font-bold">
                  {totalEnrollments.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
