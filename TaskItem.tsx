'use client';
import { Task } from '@/types/task';
import { Trash2, Check } from 'lucide-react';
interface TaskItemProps {
  task: Task;
  index: number;
  onToggle: () => void;
  onDelete: () => void;
}
export default function TaskItem({ task, index, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="animate-slide-in" style={{ animationDelay: ${index * 50}ms }}>
      <div className={g-white rounded-xl shadow-md border-2 transition-all duration-200  + (task.completed ? 'border-gray-200 opacity-60' : 'border-pink-200 hover:shadow-lg hover:border-pink-300')}>
        <div className="flex items-center gap-4 p-5">
          <button onClick={onToggle} className={lex-shrink-0 w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all duration-200  + (task.completed ? 'bg-pink-500 border-pink-500' : 'border-gray-300 hover:border-pink-400 hover:bg-pink-50')}>
            {task.completed && <Check className="w-5 h-5 text-white" strokeWidth={3} />}
          </button>
          <div className="flex-1 min-w-0">
            <p className={	ext-lg transition-all duration-200  + (task.completed ? 'text-gray-400 line-through' : 'text-gray-800')}>{task.text}</p>
          </div>
          <button onClick={onDelete} className="flex-shrink-0 p-3 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200"><Trash2 className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
}
