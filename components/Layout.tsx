
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BarChart3, Settings, ShieldCheck, Database, Globe, Truck, ShoppingCart, Factory, Phone, Mail, Linkedin, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { 
      name: 'Services', 
      path: '/services',
      submenu: [
        { name: 'Fractional CFO', path: '/services/fractional-cfo', icon: BarChart3 },
        { name: 'CFO + Automation', path: '/services/cfo-automation', icon: Settings },
        { name: 'ERP Implementation', path: '/services/erp-implementation', icon: Database },
        { name: 'Financial Due Diligence', path: '/services/financial-due-diligence', icon: ShieldCheck },
      ]
    },
    { 
      name: 'Industries', 
      path: '/industries',
      submenu: [
        { name: 'E-commerce & DTC', path: '/industries/ecommerce', icon: ShoppingCart },
        { name: 'Logistics & Distribution', path: '/industries/logistics', icon: Truck },
        { name: 'Import/Export', path: '/industries/trade', icon: Globe },
        { name: 'Manufacturing', path: '/industries/manufacturing', icon: Factory },
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
        className={`fixed w-full z-50 transition-all duration-300 ease-in-out border-b ${
            scrolled 
            ? 'bg-navy-900/95 backdrop-blur-md shadow-sm border-white/10 py-2' 
            : 'bg-transparent border-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
            {/* Logo Section */}
             <Link to="/" className="flex items-center space-x-2 group relative z-50">
                <Logo className="h-8 md:h-10" dark={true} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
                {navLinks.map((link) => (
                    <div key={link.name} className="relative group px-4 py-2">
                        <div className="flex items-center cursor-pointer">
                            <Link 
                                to={link.submenu ? '#' : link.path} 
                                className={`flex items-center text-sm font-bold transition-colors text-slate-300 hover:text-white group-hover:text-white`}
                            >
                                {link.name}
                                {link.submenu && (
                                    <ChevronDown 
                                        className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 text-slate-400 group-hover:text-white"
                                        strokeWidth={2.5}
                                    />
                                )}
                            </Link>
                        </div>

                        {/* Enhanced Dropdown */}
                        {link.submenu && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/10 border border-slate-100 p-2 overflow-hidden ring-1 ring-slate-900/5">
                                    {link.submenu.map((sub) => (
                                        <Link 
                                            key={sub.path} 
                                            to={sub.path} 
                                            className="flex items-start p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                        >
                                            <div className="shrink-0 p-2.5 bg-white border border-slate-100 rounded-lg text-slate-500 group-hover/item:text-sky-600 group-hover/item:border-sky-100 shadow-sm transition-all duration-200">
                                                <sub.icon size={20} strokeWidth={1.5} />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-bold text-navy-900 group-hover/item:text-sky-700 transition-colors">
                                                    {sub.name}
                                                </p>
                                                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                                                   View details
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center pl-4">
                <a 
                    href="https://calendly.com/dp-luucka/confidential-consultation" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-primary rounded-full hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:-translate-y-0.5"
                >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                </a>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center relative z-50">
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="p-2 rounded-lg transition-colors focus:outline-none text-white hover:bg-white/10"
                >
                    {isOpen ? <X size={24} className="text-navy-900 lg:text-white" /> : <Menu size={24} />}
                </button>
            </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
       <div className={`lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="h-full flex flex-col pt-24 pb-6 px-6 overflow-y-auto">
                <div className="space-y-8 flex-grow">
                    {navLinks.map((link) => (
                        <div key={link.name} className="space-y-4">
                            {link.submenu ? (
                                <>
                                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-200/50">
                                        {link.name}
                                    </div>
                                    <div className="grid gap-4 pl-2">
                                        {link.submenu.map((sub) => (
                                            <Link 
                                                key={sub.path} 
                                                to={sub.path} 
                                                className="flex items-center space-x-4 p-2 rounded-xl active:bg-slate-50 transition-colors"
                                            >
                                                <div className="text-slate-500 bg-slate-50 p-2 rounded-lg"><sub.icon size={20} /></div>
                                                <span className="font-bold text-navy-900 text-lg">{sub.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link 
                                    to={link.path} 
                                    className="block text-2xl font-bold text-navy-900 hover:text-sky-600 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-100">
                    <a 
                        href="https://calendly.com/dp-luucka/confidential-consultation" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center w-full px-6 py-4 text-base font-bold text-white bg-primary rounded-xl hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/20"
                    >
                        Schedule Consultation
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </div>
       </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="inline-block">
               <Logo className="h-8 md:h-10" dark />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Institutional-grade financial leadership for middle-market companies. CFO services, Automation, and ERP implementation.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://x.com/luuckaCFO" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/luucka" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"><Linkedin size={20} /></a>
              <a href="mailto:info@luucka.com" className="hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/fractional-cfo" className="hover:text-white transition-colors">Fractional CFO</Link></li>
              <li><Link to="/services/cfo-automation" className="hover:text-white transition-colors">CFO + Automation</Link></li>
              <li><Link to="/services/erp-implementation" className="hover:text-white transition-colors">ERP Implementation</Link></li>
              <li><Link to="/services/financial-due-diligence" className="hover:text-white transition-colors">Due Diligence</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/industries/ecommerce" className="hover:text-white transition-colors">E-commerce & DTC</Link></li>
              <li><Link to="/industries/logistics" className="hover:text-white transition-colors">Logistics & Distribution</Link></li>
              <li><Link to="/industries/trade" className="hover:text-white transition-colors">Import/Export</Link></li>
              <li><Link to="/industries/manufacturing" className="hover:text-white transition-colors">Manufacturing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Mail size={16} className="mt-0.5" />
                <a href="mailto:info@luucka.com" className="hover:text-white">info@luucka.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={16} className="mt-0.5" />
                <a href="tel:7862284288" className="hover:text-white">(786) 228-4288</a>
              </li>
              <li className="text-slate-400 mt-4">
                221 W Hallandale Beach Blvd #513<br />
                Hallandale Beach, FL 33009
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} LUUCKA INC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/legal/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/legal/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/legal/cookies" className="hover:text-white">Cookie Policy</Link>
            <Link to="/legal/disclaimer" className="hover:text-white">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
