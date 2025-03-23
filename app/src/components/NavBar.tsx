/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/Navbar.tsx
"use client";
import React from "react";
import { Text, Flex, Button } from "@radix-ui/themes";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
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
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-white transition">
          <Link href="/createelections">Create Elections</Link>
        </li>
        <li className="hover:text-white transition">
          <Link href="/results">Results</Link>
        </li>
        <li className="hover:text-white transition">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-3">
        <Button
          style={{
            borderRadius: "7px",
            marginBottom: "2px",
            color: "black",
            fontWeight: "bold",
            padding: "5px 10px",
          }}
          color="orange"
          variant="solid"
          onClick={() => router.push("/voting")}
        >
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
