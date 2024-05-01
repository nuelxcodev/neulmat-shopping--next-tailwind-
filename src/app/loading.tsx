/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";

function loading() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsPageLoaded(true);
    };

    // Add event listener for page load
    window.addEventListener("load", handlePageLoad);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!isPageLoaded ? (
        <div className="flex justify-center flex-col items-center">
          <div
            className="w-16 h-16 rounded-full
            border-8 border-gray-300
            border-t-8 border-t-blue-800 animate-spin"
          ></div>

          <p className="text-gray-800 text-3xl font-bold">Loading...</p>
        </div>
      ) : (
        "ok"
      )}
    </div>
  );
}

export default loading;
