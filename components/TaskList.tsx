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
      <div className='glass-effect rounded-3xl border-2 border-pink-500/20 p-20 text-center'>
        <div className='text-8xl mb-6 opacity-20'>📋</div>
        <p className='text-2xl text-pink-300/60 font-bold mono tracking-wider mb-2'>NO_TASK_FOUND</p>
        <p className='text-pink-400/40 mono text-sm'>// 新しいタスクを追加してください</p>
      </div>
    );
  }
  return (<div className='space-y-3'>{tasks.map((task,index)=><TaskItem key={task.id} task={task} index={index} onToggle={()=>onToggleTask(task.id)} onDelete={()=>onDeleteTask(task.id)}/>)}</div>);
}
