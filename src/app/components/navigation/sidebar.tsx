"use client";

import React, { useState } from "react";
import {
  Home,
  ClipboardList,
  Users,
  Video,
  UserCheck,
  Search,
  UserPlus,
  Building2,
  UsersRound,
  Settings,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserSupportCard from "../userSupportCard";

const Sidebar = () => {
  const router = useRouter();
  const [openSections, setOpenSections] = useState({
    jobManagement: true,
    candidates: true,
    company: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

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
        <div className="mb-4">
          <Link
            href="/"
            className="flex items-center text-yellow-500 mb-4 justify-center md:justify-start"
          >
            <Home size={20} className="min-w-[20px]" />
            <span className="ml-3 hidden md:inline">Dashboard</span>
          </Link>
        </div>

        <div className="mb-8">
          <div
            onClick={() => toggleSection("jobManagement")}
            className="w-full text-left flex items-center justify-between text-gray-400 text-sm mb-3 cursor-pointer"
          >
            <span className="hidden md:inline">JOB MANAGEMENT</span>
            {openSections.jobManagement ? (
              <ChevronUp size={16} className="hidden md:block" />
            ) : (
              <ChevronDown size={16} className="hidden md:block" />
            )}
          </div>

          {openSections.jobManagement && (
            <div className="space-y-5">
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
                <span className="hidden md:inline ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  NEW
                </span>
              </Link>
              <Link
                href="/interviews"
                className="flex items-center text-gray-600 hover:text-gray-900 justify-center md:justify-start"
              >
                <Video size={20} className="min-w-[20px]" />
                <span className="ml-3 hidden md:inline">Interviews</span>
              </Link>
              <Link
                href="/shortlisted"
                className="flex items-center text-gray-600 hover:text-gray-900 justify-center md:justify-start"
              >
                <UserCheck size={20} className="min-w-[20px]" />
                <span className="ml-3 hidden md:inline">Shortlisted</span>
              </Link>
            </div>
          )}
        </div>

        <div className="mb-8">
          <div
            onClick={() => toggleSection("candidates")}
            className="w-full text-left flex items-center justify-between text-gray-400 text-sm mb-3 cursor-pointer"
          >
            <span className="hidden md:inline">CANDIDATES</span>
            {openSections.candidates ? (
              <ChevronUp size={16} className="hidden md:block" />
            ) : (
              <ChevronDown size={16} className="hidden md:block" />
            )}
          </div>

          {openSections.candidates && (
            <div className="space-y-5">
              <Link
                href="/search"
                className="flex items-center text-gray-600 hover:text-gray-900 justify-center md:justify-start"
              >
                <Search size={20} className="min-w-[20px]" />
                <span className="ml-3 hidden md:inline">Search candidates</span>
              </Link>
              <Link
                href="/followers"
                className="flex items-center text-gray-600 hover:text-gray-900 justify-center md:justify-start"
              >
                <UserPlus size={20} className="min-w-[20px]" />
                <span className="ml-3 hidden md:inline">Followers</span>
              </Link>
            </div>
          )}
        </div>

        <div className="mb-6">
          <div
            onClick={() => toggleSection("company")}
            className="w-full text-left flex items-center justify-between text-gray-400 text-sm mb-3 cursor-pointer"
          >
            <span className="hidden md:inline">COMPANY</span>
            {openSections.company ? (
              <ChevronUp size={16} className="hidden md:block" />
            ) : (
              <ChevronDown size={16} className="hidden md:block" />
            )}
          </div>

          {openSections.company && (
            <div className="space-y-5">
              <Link
                href="/company-profile"
                className="flex items-center text-gray-600 hover:text-gray-900 justify-center md:justify-start"
              >
                <Building2 size={20} className="min-w-[20px]" />
                <span className="ml-3 hidden md:inline">Company profile</span>
              </Link>
              <Link
                href="/team"
                className="flex items-center text-gray-600 hover:text-gray-900 justify-center md:justify-start"
              >
                <UsersRound size={20} className="min-w-[20px]" />
                <span className="ml-3 hidden md:inline">Team Management</span>
              </Link>
              <Link
                href="/settings"
                className="flex items-center text-gray-600 hover:text-gray-900 justify-center md:justify-start"
              >
                <Settings size={20} className="min-w-[20px]" />
                <span className="ml-3 hidden md:inline">Account settings</span>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 space-y-5">
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
