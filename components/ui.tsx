import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  to?: string;
  href?: string;
  icon?: boolean;
}

// Hook for detecting when an element is in the viewport
const useIntersectionObserver = () => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!element) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);

  return [setElement, isVisible] as const;
};

export const FadeIn: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div 
      ref={ref as React.LegacyRef<HTMLDivElement>}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const CountUp: React.FC<{ 
  end: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string; 
  decimals?: number 
}> = ({ end, duration = 2000, prefix = '', suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const ease = 1 - Math.pow(1 - percentage, 4); // Ease out quart
      
      setCount(end * ease);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <span ref={ref as React.LegacyRef<HTMLSpanElement>}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

export const ParallaxBackground: React.FC<{ imageUrl: string; opacity?: number }> = ({ imageUrl, opacity = 0.15 }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: `url('${imageUrl}')`,
          opacity: opacity,
          transform: `translateY(${offset * 0.4}px)`, 
          height: '140%', 
          top: '-20%',
          width: '100%'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-900 pointer-events-none" />
    </>
  );
};

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  to, 
  href,
  icon = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-navy-900 text-white hover:bg-navy-800 shadow-lg shadow-navy-900/20",
    secondary: "bg-primary text-white hover:bg-sky-600 shadow-lg shadow-sky-500/20",
    outline: "border-2 border-navy-900 text-navy-900 hover:bg-navy-50",
    ghost: "text-navy-900 hover:bg-navy-50",
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string; dark?: boolean }> = ({ children, className = '', dark = false }) => {
  return (
    <div className={`rounded-xl p-6 shadow-sm ${dark ? 'glass-panel-dark' : 'glass-panel bg-white/80'} ${className}`}>
      {children}
    </div>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = 'bg-sky-100 text-sky-800' }) => {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
      {children}
    </span>
  );
};

export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div 
        ref={ref as React.LegacyRef<HTMLDivElement>}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        {children}
      </div>
    </section>
  );
};

export const AccordionItem: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`
        mb-4 rounded-xl border bg-white overflow-hidden transition-all duration-300
        ${isOpen 
          ? 'border-sky-200 shadow-md ring-1 ring-sky-100' 
          : 'border-slate-100 hover:border-sky-200 hover:shadow-lg hover:-translate-y-0.5'
        }
        ${className}
      `}
    >
      <button
        className="flex w-full items-center justify-between p-6 text-left font-bold text-navy-900 focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg transition-colors duration-300 ${isOpen ? 'text-sky-700' : 'group-hover:text-sky-600'}`}>
          {title}
        </span>
        <div className={`
          h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ml-4
          ${isOpen 
            ? 'bg-sky-100 text-sky-600 rotate-180' 
            : 'bg-slate-50 text-slate-400 group-hover:bg-sky-50 group-hover:text-sky-500'
          }
        `}>
          <ChevronDown size={18} />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 text-base">
          {children}
        </div>
      </div>
    </div>
  );
};