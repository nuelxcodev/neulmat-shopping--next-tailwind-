"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCog,
  faEnvelope,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  children: ReactNode;
};

function DashboardLayout({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-10 w-[50vw] bg-gray-800 text-white transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-[23%]`}
      >
        <div className="p-4">
          {/* Sidebar Navigation */}
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard">
                <span className="cursor-pointer flex items-center text-white hover:bg-gray-700 px-4 py-2 rounded-md">
                  <FontAwesomeIcon icon={faHome} className="mr-2 w-5 h-5" />
                  <span>Dashboard</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/profile">
                <span className="cursor-pointer flex items-center text-white hover:bg-gray-700 px-4 py-2 rounded-md">
                  <FontAwesomeIcon icon={faUser} className="mr-2 w-5 h-5" />
                  <span>Profile</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings">
                <span className="cursor-pointer flex items-center text-white hover:bg-gray-700 px-4 py-2 rounded-md">
                  <FontAwesomeIcon icon={faCog} className="mr-2 w-5 h-5" />
                  <span>Settings</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/messages">
                <span className="cursor-pointer flex items-center text-white hover:bg-gray-700 px-4 py-2 rounded-md">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-5 h-5" />
                  <span>Messages</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/notifications">
                <span className="cursor-pointer flex items-center text-white hover:bg-gray-700 px-4 py-2 rounded-md">
                  <FontAwesomeIcon icon={faBell} className="mr-2 w-5 h-5" />
                  <span>Notifications</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-grow bg-gray-200 p-4">
        {/* Hamburger Menu */}
        <button
          className="md:hidden absolute shadow-lg top-4 right-4 p-2 bg-gray-800 rounded-md text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Main Content */}
        <div className="w-full ">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
