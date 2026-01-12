import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';
import { LightRays, Hyperspeed, SparklesText } from '@/components/effects';
import { CountdownTimer } from '@/components/CountdownTimer';

// Event date - January 13, 2026 at 1:00 PM
const EVENT_DATE = new Date('2026-01-13T13:00:00');

const hyperspeedOptions = {
  onSpeedUp: () => { },
  onSlowDown: () => { },
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.03, 400 * 0.2],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x222F66,
    shoulderLines: 0xFFFFFF,
    brokenLines: 0xFFFFFF,
    leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
    rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
    sticks: 0x03B3C3,
  }
};

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isExpired, setIsExpired] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // Check if event has already passed
    const checkExpiry = () => {
      if (new Date().getTime() >= EVENT_DATE.getTime()) {
        setIsExpired(true);
      }
    };

    checkExpiry();
    const expiryInterval = setInterval(checkExpiry, 1000);
    return () => clearInterval(expiryInterval);
  }, []);

  // Parallax mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePos({ x: x * 10, y: y * 10 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="inspiria"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#222F66' }}
    >


      <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, zIndex: 10, display: 'flex', justifyContent: 'center' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={2.4}
          lightSpread={1.4}
          rayLength={3.0}
          fadeDistance={1.7}
          saturation={1.7}
          followMouse={true}
          mouseInfluence={0.6}
          noiseAmount={0.21}
          distortion={0}
          className="custom-rays"
        />
      </div>

      {/* Hyperspeed Effect - Centered Background Layer */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', opacity: 0.6 }}>
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </div>

      {/* Floating particles - slower on hover */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hero-particles">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full particle-float ${Math.random() > 0.5 ? 'bg-cyber-cyan/50' : 'bg-[#8EBC8E]/40'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Hero Content - 3D Floating Effect */}
      <div
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
        style={{
          transform: `perspective(1000px) rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Tagline moved to top - "The Blueprint for your Future" */}
        <p
          className={`text-sm md:text-xl tracking-[0.2em] uppercase mb-6 md:mb-8 font-semibold ${mounted ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          style={{ color: '#8EBC8E' }}
        >
          The Blueprint for your Future
        </p>

        {/* 3D Floating Title Container - Single Line */}
        <h1
          className={`hero-title-3d flex items-baseline justify-center gap-2 md:gap-4 font-display text-[clamp(2.8rem,11vw,9rem)] font-bold whitespace-nowrap mb-8 md:mb-12 ${mounted ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}
          style={{
            animation: mounted ? 'hero-float 6s ease-in-out infinite' : 'none',
            color: 'white',
            textShadow: `
                0 0 20px rgba(255,255,255,0.2),
                0 10px 20px rgba(0,0,0,0.5)
              `,
          }}
        >
          {/* INSPIRIA -银色 */}
          <span className="hero-text-3d" style={{ transform: 'translateZ(40px)' }}>
            <SparklesText
              colors={['#99CCFF', '#ADD8E6', '#E0FFFF']}
              style={{
                background: 'linear-gradient(135deg, #C0C0C0 0%, #FFFFFF 30%, #C0C0C0 50%, #E0E0E0 70%, #C0C0C0 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gold-shimmer 3s ease-in-out infinite',
                display: 'inline-block'
              }}
            >
              INSPIRIA
            </SparklesText>
          </span>

          {/* 5.0 - 金色 */}
          <span className="hero-text-5" style={{ transform: 'translateZ(40px)' }}>
            <SparklesText
              colors={['#8EBC8E', '#A8D8A8', '#B4DCB5']}
              style={{
                background: 'linear-gradient(135deg, #8EBC8E 0%, #B4DCB5 30%, #8EBC8E 50%, #A8D8A8 70%, #8EBC8E 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 30px rgba(142,188,142,0.4))',
                animation: 'gold-shimmer 3s ease-in-out infinite',
                display: 'inline-block'
              }}
            >
              5.0
            </SparklesText>
          </span>
        </h1>

        {/* Countdown Timer - Hides after January 13th 1PM */}
        {!isExpired && (
          <div className="mb-12 md:mb-16">
            <CountdownTimer targetDate={EVENT_DATE} />
          </div>
        )}

        {/* Button - solid, bold, premium, no glass */}
        <div
          className={`${mounted ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
            }`}
        >
          <a href="https://tpc-ticketing-system.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#B4DCB5] text-[#212D5F] hover:bg-[#A8D8A8] font-bold px-12 py-7 text-base rounded-full transition-all hover:scale-105 uppercase tracking-wider shadow-[0_10px_40px_rgba(180,220,181,0.3)]"
            >
              Register
            </Button>
          </a>
        </div>
      </div>



      {/* Seamless transition gradient - extended and softened */}
      <div
        className="absolute bottom-[-1px] left-0 w-full h-[10vh] z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(var(--background)) 0%, hsla(var(--background), 0.5) 20%, hsla(var(--background), 0) 100%)'
        }}
      />
    </section>
  );
};
