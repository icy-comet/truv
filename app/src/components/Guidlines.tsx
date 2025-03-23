"use client";

import { Card, Separator, Button } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css"; // Ensure styles are applied
import { JSX } from "react";

export default function VotingGuidelines(): JSX.Element {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[400px] border-2 border-blue-500 rounded-lg shadow-lg p-6 bg-white">
        <h2 className="text-lg font-bold text-center mb-2">
          Guidelines For Voting
        </h2>
        <Separator className="mb-4 bg-gray-300 h-px" />
        <div>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2">⚫</span> Check Your Internet Connection
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚫</span> One click voting
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚫</span> Do Not Disclose Your Vote
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚫</span> No Changes Allowed After Voting
            </li>
          </ul>
          <div className="mt-6 flex justify-center">
            <Button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 cursor-pointer">
              Proceed to Voting
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
