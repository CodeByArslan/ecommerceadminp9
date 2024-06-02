'use client'
import React, { useState } from "react";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const [dropdownMenu, setdropdownMenu] = useState(false);
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-blue-2 shadow-xl lg:hidden">
      <Image src="/logo.png" alt="logo" width={150} height={70} />

      <div className="flex max-md:hidden gap-8">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${
                pathname === link.url ? "text-blue-1" : "text-grey-1"
              }`}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className=" relative flex gap-4 items-center">
        <Menu
          className=" cursor-pointer md:hidden"
          onClick={() => setdropdownMenu(!dropdownMenu)}
        />
        {dropdownMenu && (
          <div className=" absolute flex flex-col top-10 right-6 p-5 bg-white shadow-xl rounded-lg gap-8">
            {navLinks.map((link) => (
              <Link
                href={link.url}
                key={link.label}
                className="flex gap-4 text-body-medium"
              >
                {link.icon} <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
        <UserButton />
      </div>
    </div>
  );
};

export default TopBar;
