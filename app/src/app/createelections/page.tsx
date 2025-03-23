"use client";

import React, { useState, useRef } from "react";
import UserNavBar from "@/components/UserNavBar";

interface Candidate {
  id: number;
  name: string;
  description: string;
}

export default function CreateElections() {
  const [electionDetails, setElectionDetails] = useState({
    name: "",
    startDate: "",
    endDate: "",
  });
  const [isLocked, setIsLocked] = useState(false);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Refs for date pickers
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);

  const handleElectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setElectionDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Handle date input changes
  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const value = e.target.value;

    // Format the date from YYYY-MM-DD to DD-MM-YYYY
    if (value) {
      const [year, month, day] = value.split("-");
      const formattedDate = `${day}-${month}-${year}`;
      setElectionDetails((prev) => ({ ...prev, [fieldName]: formattedDate }));
    } else {
      setElectionDetails((prev) => ({ ...prev, [fieldName]: "" }));
    }
  };

  const handleProceed = () => {
    if (
      !electionDetails.name ||
      !electionDetails.startDate ||
      !electionDetails.endDate
    ) {
      alert("Please fill all election details");
      return;
    }
    setIsLocked(true);
    setCandidates([{ id: 1, name: "", description: "" }]);
  };

  const handleAddCandidate = () => {
    setCandidates((prev) => [
      ...prev,
      { id: prev.length + 1, name: "", description: "" },
    ]);
  };

  const handleCandidateChange = (
    id: number,
    field: keyof Candidate,
    value: string
  ) => {
    setCandidates((prev) =>
      prev.map((candidate) =>
        candidate.id === id ? { ...candidate, [field]: value } : candidate
      )
    );
  };

  const handleCreate = () => {
    if (candidates.some((c) => !c.name || !c.description)) {
      alert("Please fill all candidate details");
      return;
    }
    setIsSubmitted(true);
  };

  const handleBack = () => {
    setIsSubmitted(false);
    setIsLocked(false);
    setCandidates([]);
    setElectionDetails({
      name: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#1A0F00] text-black">
      <UserNavBar />
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-6 text-[#E26002] text-center">
          {isSubmitted ? electionDetails.name : "Create Elections"}
        </h2>

        {/* Display table after submission */}
        {isSubmitted ? (
          <div className="bg-[#E5E5E5] rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold mb-4 text-center">
              Candidate Details
            </h3>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Sr. No</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Candidate Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate, index) => (
                  <tr key={candidate.id}>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {candidate.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {candidate.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-6">
              <button
                onClick={handleBack}
                className="px-4 py-2 bg-[#E26002] text-white rounded hover:bg-[#c05200]"
              >
                Back
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Election Details Section */}
            <div
              className={`rounded-lg p-6 mb-4 max-w-xl mx-auto transition-colors duration-300 ${
                isLocked ? "bg-black text-white" : "bg-[#E5E5E5] text-black"
              }`}
            >
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">
                  Election Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Election Name"
                  value={electionDetails.name}
                  onChange={handleElectionChange}
                  disabled={isLocked}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">
                  Start Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD-MM-YYYY"
                    value={electionDetails.startDate}
                    readOnly
                    disabled={isLocked}
                    className="w-full p-2 border border-gray-300 rounded pr-10 cursor-pointer"
                    onClick={() => {
                      if (!isLocked && startDateRef.current) {
                        startDateRef.current.showPicker();
                      }
                    }}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      onClick={() => {
                        if (!isLocked && startDateRef.current) {
                          startDateRef.current.showPicker();
                        }
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    ref={startDateRef}
                    type="date"
                    className="sr-only"
                    onChange={(e) => handleDateChange(e, "startDate")}
                    disabled={isLocked}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">
                  End Date
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD-MM-YYYY"
                    value={electionDetails.endDate}
                    readOnly
                    disabled={isLocked}
                    className="w-full p-2 border border-gray-300 rounded pr-10 cursor-pointer"
                    onClick={() => {
                      if (!isLocked && endDateRef.current) {
                        endDateRef.current.showPicker();
                      }
                    }}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      onClick={() => {
                        if (!isLocked && endDateRef.current) {
                          endDateRef.current.showPicker();
                        }
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    ref={endDateRef}
                    type="date"
                    className="sr-only"
                    onChange={(e) => handleDateChange(e, "endDate")}
                    disabled={isLocked}
                  />
                </div>
              </div>

              {!isLocked && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={handleProceed}
                    className="px-4 py-2 bg-[#E26002] text-white rounded hover:bg-[#c05200]"
                  >
                    Proceed
                  </button>
                </div>
              )}
            </div>

            {/* Candidate Information Section - Only shown after proceeding */}
            {isLocked && (
              <div className="bg-[#E5E5E5] rounded-lg p-6 max-w-xl mx-auto">
                <h3 className="text-base font-medium mb-4">
                  Candidate Information
                </h3>

                {candidates.map((candidate) => (
                  <div key={candidate.id} className="mb-6">
                    <p className="text-sm font-medium mb-2">
                      Candidate {candidate.id}
                    </p>

                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Candidate Name"
                        value={candidate.name}
                        onChange={(e) =>
                          handleCandidateChange(
                            candidate.id,
                            "name",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium">
                        Description
                      </label>
                      <input
                        type="text"
                        placeholder="Description"
                        value={candidate.description}
                        onChange={(e) =>
                          handleCandidateChange(
                            candidate.id,
                            "description",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                ))}

                <div className="flex flex-col items-center space-y-3 mt-4">
                  <button
                    onClick={handleAddCandidate}
                    className="px-4 py-1 bg-[#E26002] text-white rounded text-sm"
                  >
                    Add candidate +
                  </button>

                  <button
                    onClick={handleCreate}
                    className="px-8 py-1 bg-[#1A0F00] text-white rounded text-sm w-32"
                  >
                    Create
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
