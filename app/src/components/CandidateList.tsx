"use client";

import { useState } from "react";

type Candidate = {
  id: number;
  name: string;
  icon: string;
};

const CandidateList: React.FC = () => {
  const candidates: Candidate[] = [
    { id: 1, name: "Meera Patil", icon: "☁️" },
    { id: 2, name: "Dewashish Wankhade", icon: "🌿" },
    { id: 3, name: "Aniket Teredesai", icon: "✉️" },
    { id: 4, name: "Manasvi Patil", icon: "🌟" },
    { id: 5, name: "Tanishq Panibhate", icon: "⚙️" },
  ];

  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(
    null
  );
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const toggleSelection = (id: number) => {
    setSelectedCandidate(id === selectedCandidate ? null : id);
  };

  const handleSubmit = () => {
    if (selectedCandidate !== null) {
      setShowDialog(true);
    }
  };

  return (
    <div className="bg-amber-600 p-5 rounded-lg text-center text-xl text-white">
      <h3 className="font-semibold mb-3">Student Council General Secretary</h3>
      {candidates.map((candidate) => (
        <div
          key={candidate.id}
          className={`flex items-center justify-between bg-white text-black p-3 my-2 rounded-md text-lg cursor-pointer ${
            selectedCandidate === candidate.id ? "bg-blue-300" : ""
          }`}
          onClick={() => toggleSelection(candidate.id)}
        >
          <span>{candidate.name}</span>
          {selectedCandidate === candidate.id && (
            <span className="text-green-600 font-bold">✔</span>
          )}
        </div>
      ))}
      <button
        className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 disabled:bg-gray-500"
        onClick={handleSubmit}
        disabled={selectedCandidate === null}
      >
        Submit
      </button>

      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-black text-center w-80">
            <h2 className="text-xl font-semibold mb-4">Selected Candidate</h2>
            <p className="text-lg">
              {candidates.find((c) => c.id === selectedCandidate)?.name}
            </p>
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              onClick={() => setShowDialog(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandidateList;
