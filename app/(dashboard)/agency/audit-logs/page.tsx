export default function Page() {
  const auditLogs = [
    { id: 1, timestamp: "12 March, 2025  09:23:15", admin: "admin", action: "Downloaded Report", user: "Jenifer Lopez", details: "Downloaded Individual Progress" },
    { id: 2, timestamp: "12 March, 2025  09:23:15", admin: "admin", action: "Viewed Profile", user: "Jenifer Lopez", details: "Downloaded Individual Progress" }
  ];

  const getActionColor = (status: string) => {
    switch (status) {
      case 'Downloaded Report': return 'bg-black text-white';
      case 'Viewed Profile': return 'bg-transparent text-black border';
      default: return 'bg-black text-white';
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <h1 className="text-black font-semibold text-xl">Audit Logs</h1>
        <p className="text-black text-sm font-normal">Track all administrative actions and system activity</p>
      </div>

      {/* screen table */}
      <div className="hidden md:block overflow-x-auto rounded-lg border border-auth-form-border bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-auth-form-border">
              <th className="py-3 pl-4">Timestamp</th>
              <th className="">Admin</th>
              <th className="pl-2">Action</th>
              <th className="pl-2">User</th>
              <th className="pl-4">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-auth-form-border">
            {auditLogs.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="py-3 pl-4 whitespace-nowrap">{row.timestamp}</td>
                <td className="py-3">{row.admin}</td>
                <td className="py-3 pl-2">
                  <button className={`px-3 py-1.5 rounded-md text-sm ${getActionColor(row.action)}`}>
                    {row.action}
                  </button>
                </td>
                <td className="py-3 pl-2 text-sm">
                  {row.user}
                </td>
                <td className="py-3 pl-4 whitespace-nowrap">{row.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile & Tablet → Card layout */}
      <div className="md:hidden space-y-4">
        {auditLogs.map((row) => (
          <div
            key={row.id}
            className="bg-white border border-auth-form-border rounded-lg p-4 space-y-2"
          >
            <p><span className="font-semibold">Timestamp:</span> {row.timestamp}</p>
            <p><span className="font-semibold">Admin:</span> {row.admin}</p>

            <p className="flex items-center gap-2">
              <span className="font-semibold">Action:</span>
              <button className={`px-3 py-1.5 rounded-md text-sm ${getActionColor(row.action)}`}>
                {row.action}
              </button>
            </p>

            <p>
              <span className="font-semibold">User:</span>{" "}
              <span className="px-2.5 py-1 bg-gray-100 rounded-md">{row.user}</span>
            </p>

            <p><span className="font-semibold">Details:</span> {row.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
