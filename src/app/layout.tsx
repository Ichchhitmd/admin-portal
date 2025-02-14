import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/navigation/navbar";
import Sidebar from "./components/navigation/sidebar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  style: ["normal", "italic"],
  display: "swap", 
});

export const metadata: Metadata = {
  title: "Employer Portal By Ichchhit",
  description: "Made with care by Ichchhit Devkota.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
    <body className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto bg-gray-50 hover-scrollbar">{children}</main>
      </div>
    </body>
  </html>
  );
}
