import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#inspiria', label: 'Home' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#testimonials', label: 'Testimonials' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'glass-dark py-3 shadow-lg shadow-black/20'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Premium Logo */}
        <a href="#inspiria" className="group flex items-center gap-2">
          <div className="bg-transparent py-0 transition-all duration-300">
            <img
              src="/images/inspiria logo.png"
              alt="Inspiria Logo"
              className="h-14 w-auto object-contain"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-lg ${activeSection === link.href.slice(1)
                ? 'text-gold bg-white/5'
                : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.label}
              <span className="nav-link-underline" />
            </a>
          ))}
          <a href="https://tpc-ticketing-system.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button
              className="relative overflow-hidden bg-[#B4DCB5] hover:bg-[#A8D8A8] text-[#212D5F] font-bold px-6 py-2 rounded-full border border-[#8EBC8E]/30 shadow-lg shadow-[#8EBC8E]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#8EBC8E]/50"
            >
              <span className="relative z-10">REGISTER</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8EBC8E]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-dark mt-2 mx-4 rounded-xl p-4 animate-fade-in-up">
          <div className="flex flex-col gap-4 items-center text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold transition-colors py-2 w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="https://tpc-ticketing-system.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto mt-2">
              <Button
                className="bg-[#B4DCB5] hover:bg-[#A8D8A8] text-[#212D5F] font-semibold w-full px-8 rounded-full"
              >
                REGISTER
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
