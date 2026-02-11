'use client';
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
export default function CelebrationEffect() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number }>>([]);
  useEffect(() => {
    const items = Array.from({ length: 20 }, (_, i) => ({ id: i, x: 20 + Math.random() * 60, delay: Math.random() * 0.3 }));
    setParticles(items);
  }, []);
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {particles.map((item) => (<div key={item.id} className="absolute animate-float-up" style={{ left: ${item.x}%, bottom: '-10%', animationDelay: ${item.delay}s }}><Heart className="w-8 h-8 text-pink-400" fill="currentColor" /></div>))}
    </div>
  );
}
