import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-12 h-12 text-gray-800"
    >
      <text x="0" y="15" className="text-lg font-bold text-green-500">
        NUEL
      </text>
      <text x="30" y="15" className="text-lg font-bold text-red-500">
        MAT
      </text>
      <path
        fill="currentColor"
        d="M19 4H5a1 1 0 0 0-1 1v1h2V6h14v14H6v-1H4v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-7 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
      />
    </svg>
  );
}

export default Logo;
