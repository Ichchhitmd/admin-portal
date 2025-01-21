import { Bell, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between items-center bg-white px-6 py-4">
      <div>
        <h1 className="text-black text-lg font-bold">LOGO</h1>
      </div>

      <div className="flex space-x-6 items-center">
        <Link
          href="#mail"
          className="text-black hover:text-gray-300 transition"
        >
          <Mail className="w-6 h-6" />
        </Link>
        <Link href="">
        <Bell className="w-6 h-6" />
        </Link>
        <Link
          href="#profile"
          className="text-black hover:text-gray-300 transition"
        >
          <Image src="/image.png" width={40} height={40} className="w-7 h-7 bg-black rounded-full" alt="pic"></Image>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
