"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import UserNavBar from "@/components/UserNavBar";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface CandidateResult {
  id: number;
  name: string;
  votes: number;
  icon: string;
  percentage: number;
}

export default function ElectionResults() {
  const [activeTab, setActiveTab] = useState<"results" | "chart">("results");

  // Calculate total votes
  const totalVotes = 175; // Sum of all votes

  const results: CandidateResult[] = [
    {
      id: 1,
      name: "Meera Patil",
      votes: 50,
      icon: "☁️",
      percentage: Math.round((50 / totalVotes) * 100),
    },
    {
      id: 2,
      name: "Dewashish Wankhade",
      votes: 42,
      icon: "☀️",
      percentage: Math.round((42 / totalVotes) * 100),
    },
    {
      id: 3,
      name: "Aniket Teredesai",
      votes: 30,
      icon: "🍃",
      percentage: Math.round((30 / totalVotes) * 100),
    },
    {
      id: 4,
      name: "Manasvi Patil",
      votes: 28,
      icon: "🌟",
      percentage: Math.round((28 / totalVotes) * 100),
    },
    {
      id: 5,
      name: "Tanishq Panibhate",
      votes: 25,
      icon: "⭐",
      percentage: Math.round((25 / totalVotes) * 100),
    },
  ];

  // Data for the bar chart
  const chartData = {
    labels: results.map((candidate) => candidate.name.split(" ")[0]), // Just first names for cleaner display
    datasets: [
      {
        label: "Votes",
        data: results.map((candidate) => candidate.votes),
        backgroundColor: [
          "#FF6B35", // Vibrant orange
          "#F7C59F", // Light peach
          "#EFEFD0", // Cream
          "#004E89", // Deep blue
          "#1A659E", // Medium blue
        ],
        borderWidth: 0,
        borderRadius: 6,
        barThickness: 40,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.8)",
        titleFont: {
          size: 16,
          weight: "bold",
        },
        bodyFont: {
          size: 14,
        },
        padding: 12,
        callbacks: {
          label: (context: any) =>
            `${context.raw} votes (${results[context.dataIndex].percentage}%)`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 12,
          },
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <UserNavBar />
      <div className="min-h-screen bg-gradient-to-b from-[#1A0F00] to-[#2D1A00] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-[#FF6B35] mb-2">
                Election Results
              </h1>
              <p className="text-lg text-gray-300">
                Student Council General Secretary
              </p>
              <div className="mt-4 text-sm text-gray-400">
                Total Votes:{" "}
                <span className="font-bold text-white">{totalVotes}</span>
              </div>
            </div>

            {/* Winner Highlight */}
            <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] rounded-xl p-6 mb-8 shadow-lg text-center">
              <div className="text-xl mb-1">Winner</div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-4xl">{results[0].icon}</span>
                <h2 className="text-3xl font-bold">{results[0].name}</h2>
              </div>
              <div className="mt-2 text-xl font-semibold">
                {results[0].votes} votes ({results[0].percentage}%)
              </div>
            </div>

            {/* Tabs */}
            <div className="flex mb-6 bg-[#2A1500] rounded-lg p-1">
              <button
                className={`flex-1 py-3 rounded-md text-center font-medium transition ${
                  activeTab === "results"
                    ? "bg-[#FF6B35] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setActiveTab("results")}
              >
                Results Table
              </button>
              <button
                className={`flex-1 py-3 rounded-md text-center font-medium transition ${
                  activeTab === "chart"
                    ? "bg-[#FF6B35] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setActiveTab("chart")}
              >
                Vote Distribution
              </button>
            </div>

            {/* Content based on active tab */}
            <div className="bg-[#2A1500] rounded-xl p-6 shadow-xl">
              {activeTab === "results" ? (
                <div>
                  {results.map((candidate, index) => (
                    <div
                      key={candidate.id}
                      className={`flex items-center mb-4 p-4 rounded-lg ${
                        index === 0 ? "bg-[#3D2800]" : "bg-[#2D1A00]"
                      }`}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF6B35] mr-4 font-bold text-lg">
                        {candidate.id}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <span className="text-2xl mr-2">
                            {candidate.icon}
                          </span>
                          <span className="font-medium text-lg">
                            {candidate.name}
                          </span>
                        </div>
                        <div className="w-full bg-[#1A0F00] rounded-full h-2.5">
                          <div
                            className="bg-[#FF6B35] h-2.5 rounded-full"
                            style={{ width: `${candidate.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <div className="text-xl font-bold">
                          {candidate.votes}
                        </div>
                        <div className="text-sm text-gray-400">
                          {candidate.percentage}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-80">
                  <Bar data={chartData} options={chartOptions} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
