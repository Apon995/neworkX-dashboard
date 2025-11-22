
import Tabs from "@/app/components/trainer/Tabs";
import RightSidebar from "@/app/components/trainer/RightSidebar";
import Statusbar from "@/app/components/trainer/Statusbar";
import Navbar from "@/app/components/trainer/Navbar";




export default function ProviderLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div >
            {/* Navbar*/}
            <Navbar />


            {/* Main */}
            <div className="flex flex-col lg:flex-row gap-3 lg:pl-4 lg:px-0 px-4 max-w-360 mx-auto ">
                {/* Left Content */}
                <div className="flex-1 space-y-7 py-5">

                    {/* Status Cards */}
                    <Statusbar />




                    {/* Tabs */}
                    <Tabs />
                 

                    {/* Table Section */}
                    {children}
                </div>




                {/* RIGHT SIDEBAR */}
                <RightSidebar />

            </div>
        </div >

    );
}
