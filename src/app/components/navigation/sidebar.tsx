"use client";

import React from "react";
import {
  ClipboardList,
  Users,
  UserCheck,
  Settings,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserSupportCard from "../userSupportCard";

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="h-full bg-white border-r border-gray-200 flex flex-col w-16 md:w-72 p-2 md:p-4">
      <button
        className="w-full bg-[#0295A9] text-white rounded-md py-2 px-2 md:px-4 flex items-center justify-center mb-8"
        onClick={() => router.push("/Posting")}
      >
        <span className="text-xl">+</span>
        <span className="hidden md:inline ml-2">Post new Job</span>
      </button>

      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="mb-8">
          <div className="space-y-5">
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-gray-900 justify-center md:justify-start"
            >
              <LayoutDashboard size={20} className="min-w-[20px]" />
              <span className="ml-3 hidden md:inline">Dashboard</span>
            </Link>
            <Link
              href="/Listings"
              className="flex items-center text-gray-600 hover:text-gray-900 justify-center md:justify-start"
            >
              <ClipboardList size={20} className="min-w-[20px]" />
              <span className="ml-3 hidden md:inline">Job listings</span>
            </Link>
            <Link
              href="/applications"
              className="flex items-center text-gray-600 hover:text-gray-900 justify-center md:justify-start"
            >
              <Users size={20} className="min-w-[20px]" />
              <span className="ml-3 hidden md:inline">Applications</span>
            </Link>
            <Link
              href="/shortlisted"
              className="flex items-center text-gray-600 hover:text-gray-900 justify-center md:justify-start"
            >
              <UserCheck size={20} className="min-w-[20px]" />
              <span className="ml-3 hidden md:inline">
                Shortlisted Candidates
              </span>
            </Link>
            <Link
              href="/profile-settings"
              className="flex items-center text-gray-600 hover:text-gray-900 justify-center md:justify-start"
            >
              <Settings size={20} className="min-w-[20px]" />
              <span className="ml-3 hidden md:inline">Profile Settings</span>
            </Link>
            <Link
              href="/account-settings"
              className="flex items-center text-gray-600 hover:text-gray-900 justify-center md:justify-start"
            >
              <Settings size={20} className="min-w-[20px]" />
              <span className="ml-3 hidden md:inline">Account Settings</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="my-16 space-y-16">
        <UserSupportCard />
        <Link
          href="/logout"
          className="flex items-center text-red-500 hover:text-red-600 justify-center md:justify-start"
        >
          <LogOut size={20} className="min-w-[20px]" />
          <span className="ml-3 hidden md:inline">Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
