import React from 'react';

type ProgressBarProps = {
  progress: number;
  xp: number;
  xpForNextLevel: number;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, xp, xpForNextLevel }) => (
  <div className="bg-[#313f47] rounded-xl w-52 h-3 z-0 flex items-center justify-between">
    <div className="bg-[#ffd900] rounded-xl h-3 z-10" style={{ width: `${progress * 100}%` }}></div>
    <div className="flex items-center">
      <h1 className="text-[#ffd900] mr-1 text-xs">{xp} / {xpForNextLevel}</h1>
      <img src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg" alt="Xp" width={15} height={15} className="mr-1" />
    </div>
  </div>
);
