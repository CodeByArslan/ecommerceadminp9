import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import LeftSideBar from "@/Components/layout/LeftSideBar";
import TopBar from "@/Components/layout/TopBar";
import { ToasterProvidor } from "@/lib/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Admin Dashboard",
  description: "Manage Dashboard here for Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvidor/>         <div className="flex max-lg:flex-col text-grey-1">
          <LeftSideBar/>
          <TopBar/>
          
          <div className="flex-1 ">{children}</div>
          </div>
          
          </body>
      </html>
    </ClerkProvider>
  );
}
