'use client';
import { Task } from '@/types/task';
import { Trash2, Check, Zap } from 'lucide-react';

interface TaskItemProps {
  task: Task;
  index: number;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TaskItem({ task, index, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className='animate-slide-in' style={{animationDelay:(index*50)+'ms'}}>
      <div className={'relative group glass-effect rounded-2xl border-2 transition-all duration-300 ' + (task.completed ? 'border-purple-500/20 opacity-50' : 'border-pink-500/30 hover:border-pink-500 animate-glow-pulse')}>
        <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-500/0 via-pink-500/20 to-pink-500/0 opacity-0 group-hover:opacity-100 blur transition duration-300'></div>
        <div className='relative flex items-center gap-4 p-5'>
          <button onClick={onToggle} className={'flex-shrink-0 w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ' + (task.completed ? 'bg-gradient-to-br from-pink-600 to-purple-600 border-pink-500 shadow-lg shadow-pink-500/50' : 'border-pink-500/50 hover:border-pink-500 hover:bg-pink-500/10')}>
            {task.completed && <Check className='w-6 h-6 text-white' strokeWidth={3} />}
            {!task.completed && <Zap className='w-5 h-5 text-pink-400/50 group-hover:text-pink-400' />}
          </button>
          <div className='flex-1 min-w-0'>
            <p className={'text-lg transition-all duration-300 ' + (task.completed ? 'text-purple-300/50 line-through' : 'text-pink-100')}>{task.text}</p>
            <div className='text-xs text-pink-400/40 mono mt-1'>// ID: {task.id.slice(-8)}</div>
          </div>
          <button onClick={onDelete} className='flex-shrink-0 p-3 rounded-xl glass-effect border border-red-500/30 text-red-400 opacity-0 group-hover:opacity-100 hover:bg-red-500/20 hover:border-red-500 transition-all duration-200'>
            <Trash2 className='w-5 h-5' />
          </button>
        </div>
      </div>
    </div>
  );
}
