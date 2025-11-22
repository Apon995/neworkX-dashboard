import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrate = Montserrat({
  subsets: ["latin"],
  weight : ['200', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "NeworkX admin",
  description: "Newworkx admin panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={` ${montserrate.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
