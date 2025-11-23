import SideBar from "@/app/components/super-admin/SideBar";
import Navbar from "@/app/components/super-admin/Navbar";

export default function SuperAdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex flex-col xl:flex-row  mx-auto gap-4 relative">
            {/* <SideBar /> */}
            <SideBar/>
            <main className="flex-1 flex flex-col gap-4">
               <Navbar/>

                <div className="flex-1 xl:pr-5 px-2 xl:px-0 overflow-y-auto md:pb-5 pb-2  ">{children}</div>
            </main>
        </div>
    );
}
