/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Radio, Activity } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: '首頁' },
    { id: 'intro', label: '主題介紹' },
    { id: 'mechanism', label: '成癮機制' },
    { id: 'cases', label: '日常案例' },
    { id: 'research', label: '研究資料' },
    { id: 'shortvideo', label: '短影音成果' },
    { id: 'solution', label: '反思與解方' },
  ];

  // Dynamically determine navbar text & bg styling based on how dark the current section is
  const isDarkThemeActive = ['cases', 'research', 'shortvideo', 'solution'].includes(activeSection);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="nav-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDarkThemeActive
            ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 text-zinc-100 shadow-lg'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200 text-slate-800 shadow-md'
          : isDarkThemeActive
          ? 'bg-transparent text-zinc-100'
          : 'bg-transparent text-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand Zone */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className={`p-2 rounded-lg transition-transform hover:scale-105 duration-200 ${
              isDarkThemeActive ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-600'
            }`}>
              {isDarkThemeActive ? (
                <Activity id="logo-icon-pulse" className="w-6 h-6 animate-pulse" />
              ) : (
                <Radio id="logo-icon-signal" className="w-6 h-6 animate-pulse text-blue-600" />
              )}
            </div>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight flex items-center gap-2">
              離不開的日常
              <span className={`text-xs uppercase font-mono px-1.5 py-0.5 rounded tracking-widest ${
                isDarkThemeActive ? 'bg-red-500/20 text-red-400' : 'bg-blue-100 text-blue-700'
              }`}>
                {isDarkThemeActive ? 'ADDICTED' : 'ONLINE'}
              </span>
            </span>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  id={`nav-btn-${item.id}`}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isDarkThemeActive
                        ? 'bg-red-600 text-white shadow-md shadow-red-900/50'
                        : 'bg-blue-600 text-white shadow-md shadow-blue-500/40'
                      : isDarkThemeActive
                      ? 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkThemeActive ? 'text-zinc-300 hover:bg-zinc-800' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div id="mobile-nav-panel" className={`md:hidden px-2 pt-2 pb-4 space-y-1 sm:px-3 animate-fadeIn border-t transition-all duration-300 ${
          isDarkThemeActive 
            ? 'bg-zinc-950/95 border-zinc-800 text-zinc-100' 
            : 'bg-white/95 border-slate-200 text-slate-800'
        }`}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                id={`mobile-nav-btn-${item.id}`}
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? isDarkThemeActive
                      ? 'bg-red-600 text-white shadow-inner'
                      : 'bg-blue-600 text-white shadow-inner'
                    : isDarkThemeActive
                    ? 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
