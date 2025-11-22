import SideBar from "@/app/components/profile/SideBar";

export default function AgencyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row  mx-auto gap-4 relative">
      <SideBar />

      <main className="flex-1 flex flex-col gap-5 ">
        <nav className="bg-white py-6 px-4">
          <h2 className="text-xl font-semibold">Good Morning</h2>
        </nav>

        <div className="flex-1 2xl:pr-0 md:pr-5 px-2 md:px-0 ">{children}</div>
      </main>
    </div>
  );
}
