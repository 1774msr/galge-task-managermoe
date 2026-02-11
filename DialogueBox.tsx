import React from "react";

interface DialogueBoxProps {
  task: {
    id: string;
    title: string;
    description: string;
    priority: "high" | "medium" | "low";
  } | null;
}

export default function DialogueBox({ task }: DialogueBoxProps) {
  if (!task) return null;

  const getNameColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500";
      case "medium": return "bg-blue-500";
      default: return "bg-green-500";
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md border-t-2 border-pink-200 shadow-2xl">
      <div className="container mx-auto px-6 py-6 max-w-4xl">
        <div className="mb-3">
          <span className={"inline-block px-4 py-1 rounded-full text-white text-sm font-bold " + getNameColor(task.priority)}>
            Character Name
          </span>
        </div>
        <div className="bg-white rounded-xl border-2 border-pink-300 p-6 shadow-lg">
          <p className="text-xl text-gray-800 leading-relaxed font-medium">
            {task.title}: {task.description}
          </p>
        </div>
      </div>
    </div>
  );
}