import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div
      className={`flex gap-3 md:gap-6 justify-center ${mounted ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}
    >
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="relative group"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-cyber-cyan/30 via-cyber-purple/20 to-transparent opacity-60 blur-sm group-hover:opacity-100 transition-opacity" />

          {/* Main container */}
          <div
            className="relative flex flex-col items-center justify-center w-16 h-20 md:w-24 md:h-28 rounded-xl"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}
          >
            {/* Number */}
            <span
              className="font-display text-2xl md:text-4xl font-bold tabular-nums"
              style={{
                background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 20px rgba(255,255,255,0.3)',
              }}
            >
              {String(unit.value).padStart(2, '0')}
            </span>

            {/* Label */}
            <span
              className="text-[10px] md:text-xs uppercase tracking-wider mt-1"
              style={{ color: '#8EBC8E' }}
            >
              {unit.label}
            </span>
          </div>

          {/* Separator colon (except last) */}
          {index < timeUnits.length - 1 && (
            <span
              className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 text-xl md:text-2xl font-bold opacity-40"
              style={{ color: '#8EBC8E' }}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
