'use client';
import { useState } from 'react';
import { Plus } from 'lucide-react';
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
    <form onSubmit={handleSubmit}>
      <div className="bg-white rounded-2xl shadow-lg border-2 border-pink-200 overflow-hidden">
        <div className="flex items-center gap-3 p-4">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="新しいタスクを入力..." className="flex-1 text-lg px-4 py-3 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400" />
          <button type="submit" className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-bold text-lg shadow-md hover:shadow-lg hover:from-pink-600 hover:to-pink-700 active:scale-95 transition-all duration-200 flex items-center gap-2"><Plus className="w-6 h-6" />追加</button>
        </div>
      </div>
    </form>
  );
}
