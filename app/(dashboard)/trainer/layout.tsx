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

        <div className="h-screen flex flex-col ">
            {/* Navbar */}
            <div className="shrink-0">
                <Navbar />
            </div>

            <div className="flex gap-4 lg:flex-row flex-col flex-1 lg:overflow-hidden md:px-0 px-4 md:pl-4 pl-0 ">

                {/* LEFT SIDE */}
                <div className="flex-1 flex flex-col lg:overflow-y-auto py-5 space-y-7 scrollbar-hide">

                    <Statusbar />

                    {/* Tabs */}
                    <Tabs />


                    {children}

                </div>

                {/* RIGHT SIDE */}
                <div className="w-full lg:w-1/4 lg:h-full lg:overflow-y-auto shrink-0  " >
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
}
