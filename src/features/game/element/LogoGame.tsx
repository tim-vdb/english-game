'use client';

import React from 'react';
import Image from 'next/image';

export default function HeaderGame() {
  const navLinks = [
    { name: 'RESERVE', href: '/reserve' },
    { name: 'MENU', href: '/menu' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="w-full bg-white border-b-2 border-black py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo à gauche */}
        <div className="flex-shrink-0">
          <Image 
            src="/logo.svg" 
            alt="Chef's Blueprint Logo" 
            width={280} 
            height={80}
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation au centre */}
        <nav className="flex space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="bg-[#e8e6d4] text-white font-black text-lg tracking-wide
                         px-8 py-3 uppercase 
                         hover:bg-[#d8d6c4] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Icône Chef à droite */}
        <div className="flex-shrink-0 w-[70px] h-[70px] relative">
          <div 
            className="w-full h-full bg-[#e8e6d4]"
            style={{
              WebkitMaskImage: 'url(/images/icon_chef.png)',
              maskImage: 'url(/images/icon_chef.png)',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center'
            }}
          />
        </div>
        
      </div>
    </header>
  );
}

// Version alternative avec header fixe (si besoin pour le jeu)
export function HeaderGameFixed() {
  const navLinks = [
    { name: 'RESERVE', href: '/reserve' },
    { name: 'MENU', href: '/menu' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b-2 border-black py-4 px-8 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo à gauche */}
        <div className="flex-shrink-0">
          <Image 
            src="/logo.svg" 
            alt="Chef's Blueprint Logo" 
            width={280} 
            height={80}
            className="object-contain"
            priority
          />
        </div>

        {/* Navigation au centre */}
        <nav className="flex space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="bg-[#e8e6d4] text-white font-black text-lg tracking-wide
                         px-8 py-3 uppercase 
                         hover:bg-[#d8d6c4] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Icône Chef à droite */}
        <div className="flex-shrink-0">
          <Image 
            src="/images/icon_chef.png" 
            alt="Chef Icon" 
            width={70} 
            height={70} 
            className="object-contain"
          />
        </div>
        
      </div>
    </header>
  );
}

// Version responsive pour mobile
export function HeaderGameResponsive() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const navLinks = [
    { name: 'RESERVE', href: '/reserve' },
    { name: 'MENU', href: '/menu' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="w-full bg-white border-b-2 border-black py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo à gauche */}
        <div className="flex-shrink-0">
          <Image 
            src="/logo.svg" 
            alt="Chef's Blueprint Logo" 
            width={200} 
            height={60}
            className="object-contain md:w-[280px] md:h-[80px]"
            priority
          />
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="bg-[#e8e6d4] text-white font-black text-lg tracking-wide
                         px-8 py-3 uppercase 
                         hover:bg-[#d8d6c4] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Icône Chef à droite */}
        <div className="flex items-center space-x-4">
          {/* Burger menu mobile */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="flex-shrink-0">
            <Image 
              src="/images/icon_chef.png" 
              alt="Chef Icon" 
              width={50} 
              height={50} 
              className="object-contain md:w-[70px] md:h-[70px]"
            />
          </div>
        </div>
        
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block bg-[#e8e6d4] text-white font-black text-lg tracking-wide
                         px-6 py-3 uppercase text-center
                         hover:bg-[#d8d6c4] transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}