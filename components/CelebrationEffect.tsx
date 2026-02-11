'use client';
import { useEffect, useState } from 'react';
import { Heart, Zap, Star } from 'lucide-react';

export default function CelebrationEffect() {
  const [particles, setParticles] = useState<Array<{id:number;x:number;delay:number;type:number}>>([]);
  useEffect(() => { setParticles(Array.from({length:30},(_,i)=>({id:i,x:10+Math.random()*80,delay:Math.random()*0.4,type:i%3}))); }, []);
  return (
    <div className='fixed inset-0 pointer-events-none z-50'>
      {particles.map(item=>(
        <div key={item.id} className='absolute animate-float-up' style={{left:item.x+'%',bottom:'-10%',animationDelay:item.delay+'s'}}>
          {item.type===0 && <Heart className='w-8 h-8 text-pink-400' fill='currentColor'/>}
          {item.type===1 && <Zap className='w-8 h-8 text-yellow-400' fill='currentColor'/>}
          {item.type===2 && <Star className='w-8 h-8 text-purple-400' fill='currentColor'/>}
        </div>
      ))}
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='glass-effect border-4 border-pink-500 rounded-3xl p-12 shadow-2xl shadow-pink-500/50 animate-celebration-pop'>
          <div className='text-7xl mb-4 text-center'>🎉</div>
          <h2 className='text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 mono tracking-widest text-center'>COMPLETE!</h2>
        </div>
      </div>
    </div>
  );
}
