"use client";
import React from "react";

import "./CircleWheel.css"; // Optional: radial positioning via plain CSS

const keyPairs = [
  { major: "C", minor: "Am" },
  { major: "G", minor: "Em" },
  { major: "D", minor: "Bm" },
  { major: "A", minor: "F♯m" },
  { major: "E", minor: "C♯m" },
  { major: "B", minor: "G♯m" },
  { major: "F♯", minor: "D♯m" },
  { major: "D♭", minor: "B♭m" },
  { major: "A♭", minor: "Fm" },
  { major: "E♭", minor: "Cm" },
  { major: "B♭", minor: "Gm" },
  { major: "F", minor: "Dm" },
];

const CircleWheel = () => {
  const radiusMajor = 100;
  const radiusMinor = 65;
  const center = 128;

  return (
    <div className="relative w-[256px] h-[256px] mx-auto my-6">
      {keyPairs.map((pair, index) => {
        const note = pair.major; // Define 'note' based on the current pair
        const angle = index * 30 * (Math.PI / 180); // 12 keys, 30° slices
        const xMajor = center + radiusMajor * Math.cos(angle);
        const yMajor = center + radiusMajor * Math.sin(angle);
        const xMinor = center + radiusMinor * Math.cos(angle);
        const yMinor = center + radiusMinor * Math.sin(angle);

        return (
          <React.Fragment key={pair.major}>
            <button
              className="absolute bg-slate-700 text-white rounded-full w-10 h-10 text-sm font-bold hover:bg-slate-600 shadow-md"
              style={{
                left: `${xMajor}px`,
                top: `${yMajor}px`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => console.log(`Clicked ${pair.major}`)}
            >
              {pair.major}
            </button>
            <button
              className="absolute bg-slate-500 text-white rounded-full w-8 h-8 text-xs font-medium hover:bg-slate-400 shadow-sm"
              style={{
                left: `${xMinor}px`,
                top: `${yMinor}px`,
                transform: "translate(-50%, -50%)",
              }}
              onClick={() => console.log(`Clicked ${pair.minor}`)}
            >
              {pair.minor}
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CircleWheel;
