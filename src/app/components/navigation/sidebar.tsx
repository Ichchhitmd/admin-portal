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
  HeadphonesIcon,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
    <div className="w-64 h-full bg-white border-r border-gray-200 p-4 flex flex-col sticky top-0">
      <button
        className="w-full bg-[#0295A9] text-white rounded-md py-2 px-4 flex items-center justify-center mb-6"
        onClick={() => {
          router.push("/Posting");
        }}
      >
        <span className="mr-2">+</span> Post new Job
      </button>

      <div className="flex flex-col flex-1">
        <div className="mb-2">
          <Link
            href="/"
            className="flex items-center text-yellow-500 mb-4"
          >
            <Home size={20} className="mr-3" />
            <span>Dashboard</span>
          </Link>
        </div>

        <div className={openSections ? "mb-6" : "mb-2"}>
          <button
            onClick={() => toggleSection("jobManagement")}
            className="w-full text-left flex items-center justify-between text-gray-400 text-sm mb-3"
          >
            <span>JOB MANAGEMENT</span>
            {openSections.jobManagement ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>

          {openSections.jobManagement && (
            <div className="space-y-4">
              <Link
                href="/Listings"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ClipboardList size={20} className="mr-3" />
                <span>Job listings</span>
              </Link>
              <Link
                href="/applications"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <Users size={20} className="mr-3" />
                <span>Applications</span>
                <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  NEW
                </span>
              </Link>
              <Link
                href="/interviews"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <Video size={20} className="mr-3" />
                <span>Interviews</span>
              </Link>
              <Link
                href="/shortlisted"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <UserCheck size={20} className="mr-3" />
                <span>Shortlisted Candidates</span>
              </Link>
            </div>
          )}
        </div>

        <div className="mb-6">
          <button
            onClick={() => toggleSection("candidates")}
            className="w-full text-left flex items-center justify-between text-gray-400 text-sm mb-3"
          >
            <span>CANDIDATES</span>
            {openSections.candidates ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>

          {openSections.candidates && (
            <div className="space-y-4">
              <Link
                href="/search"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <Search size={20} className="mr-3" />
                <span>Search candidates</span>
              </Link>
              <Link
                href="/followers"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <UserPlus size={20} className="mr-3" />
                <span>Followers</span>
              </Link>
            </div>
          )}
        </div>

        <div className="mb-6">
          <button
            onClick={() => toggleSection("company")}
            className="w-full text-left flex items-center justify-between text-gray-400 text-sm mb-3"
          >
            <span>COMPANY</span>
            {openSections.company ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>

          {openSections.company && (
            <div className="space-y-4">
              <Link
                href="/company-profile"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <Building2 size={20} className="mr-3" />
                <span>Company profile</span>
              </Link>
              <Link
                href="/team"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <UsersRound size={20} className="mr-3" />
                <span>Team Management</span>
              </Link>
              <Link
                href="/settings"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <Settings size={20} className="mr-3" />
                <span>Account settings</span>
              </Link>
            </div>
          )}
        </div>

        <div className="mt-48 space-y-4">
          <Link
            href="/support"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <HeadphonesIcon size={20} className="mr-3" />
            <span>Support</span>
          </Link>
          <Link
            href="/logout"
            className="flex items-center text-red-500 hover:text-red-600"
          >
            <LogOut size={20} className="mr-3" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
