import React from "react";

function PieChart({ progress }: { progress: number }) {
  const circumference = 2 * Math.PI * 50;
  const dashoffset = (circumference - (progress / 100) * circumference).toFixed(
    0
  );
  return (
    <div>
      <svg className=" border h-max w-max">
        <circle
          className=" stroke-current text-green-500  rounded-full shadow-2xl"
          strokeWidth="20"
          fill="white"
          r="50"
          cx="70"
          cy="70"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: dashoffset,
            transition: "stroke-dashoffset 0.3s",
          }}
        />
        <text
          x="70"
          y="70"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="currentColor"
          className=" text-xs font-bold "
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
}

export default PieChart;
