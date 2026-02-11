'use client';
import { Task } from '@/types/task';
import TaskItem from './TaskItem';
interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}
export default function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-16 text-center">
        <div className="text-6xl mb-4 opacity-30">📝</div>
        <p className="text-xl text-gray-400 font-medium">タスクがありません</p>
        <p className="text-gray-400 mt-2">上から新しいタスクを追加してください</p>
      </div>
    );
  }
  return (<div className="space-y-3">{tasks.map((task, index) => (<TaskItem key={task.id} task={task} index={index} onToggle={() => onToggleTask(task.id)} onDelete={() => onDeleteTask(task.id)} />))}</div>);
}
