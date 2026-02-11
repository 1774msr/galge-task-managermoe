import React from "react";
import TaskItem from "./TaskItem";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 bg-white/50 rounded-2xl border-2 border-dashed border-pink-200">
        <p className="text-gray-400 font-medium">現在、攻略対象のタスクはありません。</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          index={index} 
          onToggle={() => onToggle(task.id)} 
          onDelete={() => onDelete(task.id)} 
        />
      ))}
    </div>
  );
}