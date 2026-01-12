import { useState } from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { GridScan, TrueFocus } from '@/components/effects';

const tabs = [
  { id: 'inspiria', label: 'INSPIRIA 5.0' },
  { id: 'speaker', label: 'SPEAKER' },
  { id: 'gallery', label: 'IMAGE GALLERY' },
  { id: 'about', label: 'ABOUT TPC-PCE' },
];

export const EventSchedule = () => {
  const [activeTab, setActiveTab] = useState('inspiria');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'inspiria':
        return (
          <div className="max-w-4xl mx-auto">
            <Card className="glass-dark border-0 shadow-lg overflow-hidden" style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)' }}>
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-6">
                  Welcome to Inspiria 5.0
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                  Inspiria 5.0, the flagship event of TPC-PCE, is designed to equip students with
                  the essential skills and knowledge needed to tackle real-world challenges. By
                  blending industry insights with interactive sessions, the event features expert-led
                  talks and engaging activities that enhance practical understanding. Its primary
                  aim is to cultivate the right mindset, deepen industry awareness, and seamlessly bridge academic learning with real-world experience.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case 'speaker':
        return (
          <div className="max-w-5xl mx-auto">
            <Card className="glass-dark border-0 shadow-lg overflow-hidden" style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)' }}>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Speaker Info & Photo - 1/3 */}
                  <div className="md:col-span-1 p-6 flex flex-col items-center justify-center bg-gradient-to-br from-white/10 via-accent/5 to-transparent backdrop-blur-md border-r border-white/10 text-center relative overflow-hidden group/shine">
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none" />

                    {/* Name & Role moved above image */}
                    <div className="mb-6 w-full relative z-10">
                      <h3 className="text-2xl font-display font-bold text-gradient-gold mb-2 leading-tight drop-shadow-sm">
                        Mr. Pramod Baviskar
                      </h3>
                      <p className="text-primary-foreground/90 font-medium text-sm leading-snug">
                        AI Data Science Analyst at<br />Accenture Strategy & Consulting
                      </p>
                    </div>

                    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-4 border-accent/20 group max-w-[280px] mx-auto z-10">
                      <img
                        src="/images/speaker.jpg"
                        alt="Mr. Pramod Baviskar"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl" />
                      {/* Image Shine */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Tags moved below image */}
                    <div className="mt-6 flex flex-wrap justify-center gap-3 relative z-10">
                      <div className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-semibold text-accent uppercase tracking-wider shadow-sm backdrop-blur-sm">
                        Keynote Speaker
                      </div>
                      <div className="px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-[10px] font-semibold text-primary uppercase tracking-wider shadow-sm backdrop-blur-sm">
                        Industry Expert
                      </div>
                    </div>
                  </div>

                  {/* Session Content - 2/3 */}
                  <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center text-center">
                    <h4 className="text-accent uppercase tracking-widest text-lg md:text-xl font-bold mb-4 border-b border-accent/20 pb-4 inline-block w-full text-center">
                      The Blueprint for your Future
                    </h4>

                    <p className="text-white/80 leading-relaxed text-base md:text-lg mb-2 text-center max-w-2xl mx-auto">
                      Specializing in AI, GenAI and data-driven systems, his professional
                      journey reflects the evolving demands of today’s tech industry. An AI Data Science Analyst at Accenture Strategy & Consulting, Mr. Pramod Baviskar specializes in AI, GenAI and data-driven systems. His professional journey reflects the evolving demands of today’s tech industry.
                    </p>

                    {/* Event Details Block */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto w-full">
                      {/* Time & Location */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col items-start justify-center space-y-3 hover:bg-white/10 transition-colors duration-300 shadow-md">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-accent" />
                          <span className="text-sm text-white/90 font-medium">2:00 PM – 4:00 PM</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-white/90 font-medium leading-tight text-left">Auditorium, Pillai College of Engineering, New Panvel</span>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors duration-300 shadow-md flex flex-col items-center">
                        <div className="flex items-center gap-2 mb-3">
                          <Phone className="w-4 h-4 text-accent" />
                          <span className="text-xs font-bold text-accent uppercase tracking-wider">For Queries</span>
                        </div>
                        <div className="space-y-2 text-xs text-white/70 w-full max-w-[240px]">
                          <div className="flex justify-between items-center group/item hover:bg-white/5 p-1 rounded transition-colors border-b border-white/5">
                            <span className="group-hover/item:text-white transition-colors font-medium">Atharv Gunjal</span>
                            <span className="text-white/90 font-mono tracking-wide">8779261491</span>
                          </div>
                          <div className="flex justify-between items-center group/item hover:bg-white/5 p-1 rounded transition-colors">
                            <span className="group-hover/item:text-white transition-colors font-medium">Jidnyasa Chimane</span>
                            <span className="text-white/90 font-mono tracking-wide">9769498575</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'gallery':
        const galleryImages = [
          '/images/gallery-1.jpg',
          '/images/gallery-2.jpg',
          '/images/gallery-3.jpg',
          '/images/gallery-4.jpg',
          '/images/gallery-5.jpg',
          '/images/gallery-6.jpg',
        ];
        const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages, ...galleryImages];

        return (
          <div className="relative overflow-hidden group py-4">
            {/* Gradient Masking */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee-slow group-hover:[animation-play-state:paused] whitespace-nowrap">
              {duplicatedImages.map((src, index) => (
                <div key={index} className="flex-none w-[300px] h-[200px] md:w-[400px] md:h-[250px] mx-4 rounded-2xl overflow-hidden shadow-2xl border border-white/10 glass-dark">
                  <img
                    src={src}
                    alt={`Event gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="max-w-4xl mx-auto">
            <Card className="glass-dark border-0 shadow-lg overflow-hidden" style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)' }}>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-0 flex items-center justify-center min-h-[200px] group overflow-hidden">
                    <img
                      src="/images/about-tpc-group.jpg"
                      alt="TPC PCE Group"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-gradient-gold mb-3">About TPC-PCE</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      The Training and Placement Committee (TPC) serves as a robust bridge
                      between academic learning and professional excellence. Managed with a vision
                      to nurture "industry-ready" graduates, the committee operates as an integrated
                      ecosystem that handles everything from skill development to corporate
                      recruitment.TPC ensures that every eligible student has the platform to launch a
                      successful career. Its commitment to holistic development makes it the
                      cornerstone of the institution’s success in the competitive engineering landscape.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="schedule" className="relative pt-20 pb-10 md:pt-28 md:pb-16 bg-background overflow-hidden">
      {/* Top Transition Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />

      {/* Grid Scan Background */}
      <div className="absolute inset-0 pointer-events-none">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            <span className="gold-shimmer-text">Event Schedule</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          <TrueFocus
            items={tabs.map(tab => tab.label)}
            manualMode={true}
            blurAmount={0.5}
            borderColor="#8EBC8E"
            glowColor="rgba(142, 188, 142, 0.6)"
            animationDuration={0.6}
            defaultIndex={0}
            onIndexChange={(index) => setActiveTab(tabs[index].id)}
          />
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto animate-fade-in-up">
          {renderTabContent()}
        </div>
      </div>

      {/* Bottom Transition Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />


    </section>
  );
};
