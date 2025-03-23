/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/Navbar.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

const UserNavBar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center  justify-between h-[20%] px-6 md:px-16 py-4 bg-[#160a01] text-white select-none ">
      {/* Logo */}
      <div className="text-3xl font-bold text-orange-500">
        <a href="/">truVote</a>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-300">
        <li className="hover:text-white transition">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-white transition">
          <a href="#elections">Create Elections</a>
        </li>
        <li className="hover:text-white transition">
          <a href="#results">Results</a>
        </li>
        <li className="hover:text-white transition">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* User Profile - Clickable */}
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => router.push("/voterprofile")}
      >
        <h3>student@gmail.com</h3>
        <FaUser
          style={{
            color: "white",
            fontSize: "1.4rem",
          }}
        />
      </div>
    </nav>
  );
};

export default UserNavBar;
