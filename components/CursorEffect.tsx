
import React, { useEffect, useState, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  text: string;
  size: number;
  opacity: number;
}

const CursorEffect: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const currentMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef(0);
  const symbols = ['Σ', 'f(x)', '√', 'π', 'if {}', '=>', 'λ', '∞', '∫', '∆', '★', '✧', '{...}', 'log'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      velocity.current = Math.sqrt(dx * dx + dy * dy);
      
      currentMousePos.current = { x: e.clientX, y: e.clientY };
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const spawnInterval = setInterval(() => {
      // Determine spawn parameters based on velocity
      const isMoving = velocity.current > 2;
      const spawnChance = isMoving ? 0.6 : 0.2;
      
      if (Math.random() < spawnChance) {
        const newParticle: Particle = {
          id: Date.now() + Math.random(),
          x: currentMousePos.current.x + (Math.random() * 20 - 10),
          y: currentMousePos.current.y + (Math.random() * 20 - 10),
          text: symbols[Math.floor(Math.random() * symbols.length)],
          // stationary size is small (8-12px), moving size is large (16-48px)
          size: isMoving ? Math.min(16 + velocity.current * 0.6, 52) : 10 + Math.random() * 4,
          opacity: isMoving ? Math.min(0.5 + velocity.current * 0.01, 1) : 0.4
        };
        
        setParticles(prev => [...prev.slice(-30), newParticle]);
      }
      
      // Gradually decay velocity to handle stationary state
      velocity.current *= 0.8;
    }, 50);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(spawnInterval);
    };
  }, []);

  return (
    <>
      {particles.map(p => (
        <span
          key={p.id}
          className="cursor-particle select-none pointer-events-none whitespace-nowrap transition-transform duration-300"
          style={{ 
            left: p.x, 
            top: p.y, 
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            textShadow: p.size > 20 ? `0 0 ${p.size/2}px rgba(59, 130, 246, 0.4)` : 'none'
          }}
        >
          {p.text}
        </span>
      ))}
    </>
  );
};

export default CursorEffect;
