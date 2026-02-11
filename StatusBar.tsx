'use client';
import { Heart, RotateCcw } from 'lucide-react';
interface StatusBarProps {
  affection: number;
  stats: { total: number; completed: number; remaining: number; };
  onReset: () => void;
}
export default function StatusBar({ affection, stats, onReset }: StatusBarProps) {
  return (
    <div className="bg-white/90 backdrop-blur-md border-b-2 border-pink-200 shadow-lg">
      <div className="container mx-auto px-6 py-4 max-w-4xl">
        <div className="flex items-center justify-between gap-6">
          <div><h1 className="text-2xl font-bold text-gray-800">タスク管理</h1></div>
          <div className="flex items-center gap-6">
            <div className="text-center"><div className="text-sm text-gray-500">合計</div><div className="text-xl font-bold text-gray-800">{stats.total}</div></div>
            <div className="text-center"><div className="text-sm text-gray-500">完了</div><div className="text-xl font-bold text-pink-600">{stats.completed}</div></div>
            <div className="text-center"><div className="text-sm text-gray-500">残り</div><div className="text-xl font-bold text-purple-600">{stats.remaining}</div></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-500" fill="currentColor" />
              <div><div className="text-sm text-gray-500">好感度</div><div className="text-xl font-bold text-pink-600">{affection}%</div></div>
            </div>
            <button onClick={onReset} className="p-2 rounded-lg hover:bg-gray-100 transition-colors" title="リセット"><RotateCcw className="w-5 h-5 text-gray-500" /></button>
          </div>
        </div>
        <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-pink-400 to-pink-600 transition-all duration-500" style={{ width: ${affection}% }} /></div>
      </div>
    </div>
  );
}
