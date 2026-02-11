'use client';
import { Heart, RotateCcw, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface StatusBarProps {
  affection: number;
  stats: { total: number; completed: number; remaining: number; };
  onReset: () => void;
}

export default function StatusBar({ affection, stats, onReset }: StatusBarProps) {
  const [prevAffection, setPrevAffection] = useState(affection);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (affection !== prevAffection) {
      setIsChanging(true);
      setTimeout(() => setIsChanging(false), 500);
      setPrevAffection(affection);
    }
  }, [affection, prevAffection]);

  return (
    <div className='glass-effect border-b-2 border-pink-500/30 shadow-2xl relative'>
      <div className='absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-pink-500/5 animate-pulse'></div>
      <div className='container mx-auto px-6 py-4 max-w-4xl relative z-10'>
        <div className='flex items-center justify-between gap-6'>
          <div>
            <h1 className='text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 tracking-widest'>TASK_SYSTEM</h1>
            <div className='text-xs text-pink-300/60 mono mt-1'>// OPERATION_INTERFACE_v2.0</div>
          </div>

          <div className='flex items-center gap-8 mono'>
            <div className='text-center'>
              <div className='text-xs text-cyan-400/80 mb-1'>TOTAL</div>
              <div className='text-2xl font-bold text-cyan-300'>{stats.total.toString().padStart(2,'0')}</div>
            </div>
            <div className='text-center'>
              <div className='text-xs text-pink-400/80 mb-1'>CLEAR</div>
              <div className='text-2xl font-bold text-pink-300'>{stats.completed.toString().padStart(2,'0')}</div>
            </div>
            <div className='text-center'>
              <div className='text-xs text-purple-400/80 mb-1'>REMAIN</div>
              <div className='text-2xl font-bold text-purple-300'>{stats.remaining.toString().padStart(2,'0')}</div>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='relative'>
              <div className='absolute -inset-2 bg-pink-500/20 blur-xl rounded-full'></div>
              <div className='relative glass-effect rounded-2xl p-4 border-2 border-pink-500/50 animate-glow-pulse'>
                <div className='flex items-center gap-3'>
                  <Heart className='w-6 h-6 text-pink-400' fill='currentColor' />
                  <div>
                    <div className='text-xs text-pink-300/80 mono tracking-wider'>AFFECTION</div>
                    <div className={'text-3xl font-black mono tabular-nums transition-all duration-300 ' + (isChanging ? 'animate-number-change text-pink-300' : 'text-pink-400')}>
                      {affection.toString().padStart(3,'0')}
                      <span className='text-lg text-pink-400/60'>%</span>
                    </div>
                  </div>
                  <Zap className='w-5 h-5 text-yellow-400 animate-pulse' fill='currentColor' />
                </div>
                <div className='mt-2 h-2 bg-black/40 rounded-full overflow-hidden relative'>
                  <div className='absolute inset-0 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 transition-all duration-700' style={{width:affection+'%',boxShadow:'0 0 10px rgba(236,72,153,0.8)'}}></div>
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent' style={{width:'100%',animation:'shimmer 2s ease-in-out infinite'}}></div>
                </div>
              </div>
            </div>
            <button onClick={onReset} className='glass-effect p-3 rounded-xl border border-pink-500/30 hover:border-pink-500 hover:bg-pink-500/10 transition-all' title='RESET'>
              <RotateCcw className='w-5 h-5 text-pink-400' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
