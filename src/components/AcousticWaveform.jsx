import React from 'react';

export function AcousticWaveform() {
  const bars = [
    { height: 'h-4', bg: 'bg-amber-apex/30', delay: '0s' },
    { height: 'h-8', bg: 'bg-amber-apex/50', delay: '0.15s' },
    { height: 'h-14', bg: 'bg-amber-apex/80', delay: '0.3s' },
    { height: 'h-10', bg: 'bg-amber-apex', delay: '0.1s' },
    { height: 'h-16', bg: 'bg-white', delay: '0.25s' },
    { height: 'h-12', bg: 'bg-amber-apex', delay: '0.05s' },
    { height: 'h-6', bg: 'bg-amber-apex/80', delay: '0.2s' },
    { height: 'h-3', bg: 'bg-amber-apex/40', delay: '0.35s' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto flex items-center justify-center gap-1.5 h-16">
      {bars.map((bar, i) => (
        <div
          key={i}
          className={`w-1.5 ${bar.bg} ${bar.height} rounded-full animate-pulse`}
          style={{ animationDelay: bar.delay, animationDuration: '1.2s' }}
        />
      ))}
    </div>
  );
}
