import React from "react";
import { Check, Trash2, Clock, AlertCircle, CheckCircle2 } from "lucide-react";

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    description: string;
    priority: "high" | "medium" | "low";
    completed: boolean;
  };
  index: number;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TaskItem({ task, index, onToggle, onDelete }: TaskItemProps) {
  const priorityColors = {
    high: "text-red-600 bg-red-50 border-red-100",
    medium: "text-blue-600 bg-blue-50 border-blue-100",
    low: "text-green-600 bg-green-50 border-green-100",
  };

  return (
    <div 
      className="animate-slide-in" 
      style={{ animationDelay: (index * 50) + "ms" }}
    >
      <div className={"bg-white rounded-xl shadow-md border-2 transition-all duration-200 " + (task.completed ? "border-gray-200 opacity-75" : "border-pink-100 hover:border-pink-300 hover:shadow-lg")}>
        <div className="flex items-center gap-4 p-5">
          <button 
            onClick={onToggle}
            className={"flex-shrink-0 w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-colors " + (task.completed ? "bg-pink-500 border-pink-500 text-white" : "border-pink-200 text-transparent hover:border-pink-400")}
          >
            <Check className="w-5 h-5" />
          </button>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className={"font-bold truncate " + (task.completed ? "text-gray-500 line-through" : "text-gray-800")}>
                {task.title}
              </h3>
              <span className={"text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase " + priorityColors[task.priority]}>
                {task.priority}
              </span>
            </div>
            <p className={"text-sm truncate " + (task.completed ? "text-gray-400" : "text-gray-600")}>
              {task.description}
            </p>
          </div>

          <button 
            onClick={onDelete}
            className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}