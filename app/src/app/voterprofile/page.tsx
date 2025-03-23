/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import UserNavBar from "@/components/UserNavBar";

export default function VoterProfile() {
  const userName = "Student"; // Replace with dynamic user data

  return (
    <>
      <UserNavBar />
      <div className="min-h-screen bg-[#1A0F00] text-white flex flex-col items-center justify-center">
        <div className="bg-[#E5E5E5] text-black rounded-lg p-8 max-w-md w-full text-center shadow-lg">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Congratulations, {userName}!
          </h2>
          <div className="flex justify-center mb-4">
            <img
              src="/images/badge-1361.svg" // Correct path to the SVG file
              alt="Badge"
              className="w-32 h-32"
            />
          </div>
          <p className="text-lg font-medium">You've Earned a New Badge!</p>
        </div>
      </div>
    </>
  );
}
