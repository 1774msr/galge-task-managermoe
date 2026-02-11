'use client';
import { useState } from 'react';
import { Plus, Terminal } from 'lucide-react';

interface TaskInputProps {
  onAddTask: (text: string) => void;
}

export default function TaskInput({ onAddTask }: TaskInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) { onAddTask(input.trim()); setInput(''); }
  };

  return (
    <form onSubmit={handleSubmit} className='relative group'>
      <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-300'></div>
      <div className='relative glass-effect rounded-2xl border-2 border-pink-500/30 group-hover:border-pink-500/60 transition-all overflow-hidden'>
        <div className='flex items-center p-4 gap-3'>
          <Terminal className='w-5 h-5 text-cyan-400 animate-pulse' />
          <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='> ENTER_NEW_TASK...' className='flex-1 text-lg px-4 py-3 bg-transparent border-none outline-none text-pink-100 placeholder-pink-400/40 mono' />
          <button type='submit' className='px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-black mono tracking-wider shadow-lg hover:shadow-pink-500/50 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 border-2 border-pink-400/50'>
            <Plus className='w-6 h-6' strokeWidth={3} />
            <span>ADD</span>
          </button>
        </div>
      </div>
    </form>
  );
}
