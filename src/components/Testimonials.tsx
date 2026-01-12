import { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { BlurText, PixelCard } from '@/components/effects';

const testimonials = [
  {
    quote: "Inspiria gave me clarity, not just motivation. It showed me exactly how to bridge the gap between academics and the real corporate world.",
    name: "SHRAVANI KUMBHAR",
    branch: "BE/EXTC"
  },
  {
    quote: "I came for the certificate, but stayed for the experience. Met real mentors and made connections that actually matter.",
    name: "YASH RAIKAR",
    branch: "BE/IT"
  },
  {
    quote: "Inspiria 4.0 felt more like a tech conference than a college event. Everything, from speakers to execution, was top class.",
    name: "TANISH RAJWAR",
    branch: "BE/IT"
  },
];

const TestimonialCard = ({ quote, name, branch }: { quote: string; name: string; branch: string }) => (
  <div className="min-w-[280px] md:min-w-[400px] mx-3 md:mx-4 h-[240px] md:h-[280px]">
    <PixelCard variant="default" gap={10} className="group w-full h-full rounded-2xl overflow-hidden glass-dark border-0">
      <div className="absolute inset-0 flex flex-col p-6 md:p-8 z-10 hover:text-white transition-colors duration-300">
        <div className="flex flex-col flex-1 relative">
          <Quote className="w-4 h-4 md:w-5 md:h-5 text-accent/40 group-hover:text-accent mb-3 transition-colors duration-300 rotate-180" />
          <p className="flex-1 text-[#8EBC8E] group-hover:text-white leading-snug md:leading-relaxed text-xs md:text-sm transition-colors duration-300 font-medium px-1">
            {quote}
          </p>
          <div className="flex justify-end mt-2">
            <Quote className="w-4 h-4 md:w-5 md:h-5 text-accent/40 group-hover:text-accent transition-colors duration-300" />
          </div>
        </div>
        <div className="border-t border-white/10 pt-3 md:pt-4 mt-3">
          <h4 className="font-semibold text-foreground group-hover:text-primary-foreground uppercase tracking-wide text-[10px] md:text-xs transition-colors duration-300">{name}</h4>
          <p className="text-accent font-medium text-[9px] md:text-[11px]">{branch}</p>
        </div>
      </div>
    </PixelCard>
  </div>
);

export const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  // Quadruple the testimonials for smoother infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const handleScroll = () => {
      // Resume animation when scrolling on mobile
      if (isPaused) {
        setIsPaused(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPaused]);

  return (
    <section id="testimonials" className="relative pt-10 pb-20 md:pt-16 md:pb-24 overflow-hidden animate-fade-in-up">
      <div className="container relative z-10 mx-auto px-4 mb-10 md:mb-14">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            <span className="gold-shimmer-text">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-5" />
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            <BlurText delay={200}>Student Testimonials</BlurText>
          </h3>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative z-10 w-full overflow-hidden mask-linear-fade">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />

        {/* Scrolling content - Dual List Architecture */}
        <div className="flex w-max"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`flex shrink-0 animate-loop-scroll [animation-duration:25s] md:[animation-duration:40s] ${isPaused ? '[animation-play-state:paused]' : ''}`}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`list1-${index}`} {...testimonial} />
            ))}
          </div>
          <div className={`flex shrink-0 animate-loop-scroll [animation-duration:25s] md:[animation-duration:40s] ${isPaused ? '[animation-play-state:paused]' : ''}`} aria-hidden="true">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`list2-${index}`} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
