"use client";

import StatusBar from "@/app/components/employe/StatusBar";
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
  Legend,
} from "recharts";

export const UpcoimgIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 2H8C8.26522 2 8.51957 2.10536 8.70711 2.29289C8.89464 2.48043 9 2.73478 9 3V4H14V3C14 2.73478 14.1054 2.48043 14.2929 2.29289C14.4804 2.10536 14.7348 2 15 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V4C17.7956 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V18C20 18.7956 19.6839 19.5587 19.1213 20.1213C18.5587 20.6839 17.7956 21 17 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2ZM15 4H16V3H15V4ZM8 4V3H7V4H8ZM6 5C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V8H19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H6ZM4 18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H17C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18V9H4V18ZM12 13H17V18H12V13ZM13 14V17H16V14H13Z"
      fill="black"
    />
  </svg>
);

const applicants = [
  { program: "Web", learners: 455 },
  { program: "IT", learners: 20 },
  { program: "Health", learners: 300 },
  { program: "Flutter", learners: 130 },
  { program: "Marketing", learners: 280 },
  { program: "Spoken", learners: 330 },
  { program: "IT", learners: 260 },
  { program: "Health", learners: 170 },
];

const applicantStatus = [
  { name: "Rejected", value: 12 },
  { name: "Applied", value: 250 },
  { name: "Hired", value: 10 },
  { name: "Interview", value: 57 },
];

 const COLORS = ["#F59E0B", "#8B5CF6", "#10B981", "#3B82F6"];
  const getPercent = (value: number) => ((value / 329) * 100).toFixed(0) + "%";

  const CustomLegend = () => (
    <div className="flex flex-wrap gap-4 justify-center mt-2">
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

          <span style={{ color: COLORS[index], fontSize: 14 }}>
            {item.name} ({item.value})
          </span>
        </div>
      ))}
    </div>
  );

export default function page() {
 

  return (
    <div className="w-full h-full flex flex-col gap-3">
      {/* status bar / cards section */}
      <StatusBar />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* ----application-status-break-down--- */}

        <div className="bg-white p-4 md:p-6 rounded-2xl w-full border border-auth-form-border">
          <h2 className="text-lg md:text-xl font-semibold text-black">
            Applicant Status Breakdown
          </h2>

          {/* tab and destop screen */}
          <div className="hidden md:block w-full h-80 border-none">
            <ResponsiveContainer
              width="100%"
              height="100%"
              className={"border-none"}
            >
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

                <Legend verticalAlign="top" content={<CustomLegend />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* small screen */}
          <div className="md:hidden w-full h-72">
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

                <Legend verticalAlign="top" content={<CustomLegend />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ---applicants-per-jobs--- */}
        <div className="bg-white p-4 md:p-5 rounded-2xl border border-auth-bg w-full">
          <h2 className="text-lg md:text-xl font-semibold text-black mb-4">
            Applicants Per Job
          </h2>

          {/*desktop medium screen*/}
          <div className="hidden md:block w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={applicants} barCategoryGap="25%">
                <CartesianGrid strokeDasharray="3 3" stroke="#CCCCCC" />
                <XAxis dataKey="program" interval={0} tick={{ fontSize: 12 }} />
                <YAxis width={40} />
                <Tooltip />
                <Bar dataKey="learners" barSize={35} radius={[8, 8, 0, 0]}>
                  {applicants.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index % 2 === 0 ? "#3B82F6" : "#10B981"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* small screen*/}
          <div className="md:hidden w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={applicants} barCategoryGap="30%">
                <CartesianGrid strokeDasharray="3 3" stroke="#CCCCCC" />
                <XAxis
                  dataKey="program"
                  interval={0}
                  tick={{ fontSize: 10 }}
                  angle={-30}
                  textAnchor="end"
                />
                <YAxis width={30} tick={{ fontSize: 10 }} />
                <Tooltip />
                <Bar
                  dataKey="learners"
                  fill="#4E9EFF"
                  barSize={30}
                  radius={[0, 0, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
