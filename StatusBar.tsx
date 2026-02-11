import React from "react";

interface StatusBarProps {
  exp: number;
}

export default function StatusBar({ exp }: StatusBarProps) {
  const level = Math.floor(exp / 100) + 1;
  const progress = exp % 100;

  return (
    <div className="bg-white/80 backdrop-blur-sm p-4 border-b-2 border-pink-100 shadow-sm">
      <div className="container mx-auto max-w-4xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-pink-500 text-white px-3 py-1 rounded-lg font-bold">
            Lv. {level}
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="flex justify-between text-xs text-pink-600 mb-1 font-bold">
              <span>NEXT LEVEL</span>
              <span>{progress}/100</span>
            </div>
            <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-400 to-rose-500 transition-all duration-500"
                style={{ width: progress + "%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}