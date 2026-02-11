import React from "react";
import { Heart } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  delay: number;
}

export default function CelebrationEffect({ particles }: { particles: Particle[] }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {particles.map((item) => (
        <div 
          key={item.id} 
          className="absolute animate-float-up" 
          style={{ 
            left: item.x + "%", 
            bottom: "-10%", 
            animationDelay: item.delay + "s" 
          }}
        >
          <Heart className="w-8 h-8 text-pink-400" fill="currentColor" />
        </div>
      ))}
    </div>
  );
}