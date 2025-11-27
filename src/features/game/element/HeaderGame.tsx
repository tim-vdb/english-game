'use client';

import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';

interface HeaderProps {
  GAME_NAME?: string;
  timeRemaining?: string; 
  currentLevel?: number;
  playersCount?: number;
}

export default function HeaderGame({ 
  GAME_NAME = "Chef's Blueprint", 
  timeRemaining, 
  currentLevel, 
  playersCount 
}: HeaderProps) {
  return (
    <header className="bg-[#f5f1e8] border-2 border-black py-6 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo + Title */}
        <div className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="Chef's Blueprint Logo" 
            width={180} 
            height={80}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            {['RESERVE', 'MENU', 'CONTACT'].map((item) => (
              <li key={item}>
                <a 
                  href="#"
                  className="bg-[#ff6b3d] text-white font-bold text-xl px-8 py-3 
                             hover:bg-[#e85a2d] transition-colors
                             tracking-wide uppercase"
                  style={{ fontFamily: 'Cooper, serif' }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Chef Icon */}
        <div className="flex items-center">
          <div className="relative w-20 h-20">
            <Image 
              src="/images/icon_chef.png" 
              alt="Chef Icon" 
              width={80} 
              height={80} 
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </header>
  );
}

// Version alternative avec le User icon de Lucide si besoin
export function HeaderGameAlt({ 
  GAME_NAME = "Chef's Blueprint", 
  timeRemaining, 
  currentLevel, 
  playersCount 
}: HeaderProps) {
  return (
    <header className="bg-[#f5f1e8] border-2 border-black py-6 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo + Title */}
        <div className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="Chef's Blueprint Logo" 
            width={180} 
            height={80}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            {['RESERVE', 'MENU', 'CONTACT'].map((item) => (
              <li key={item}>
                <a 
                  href="#"
                  className="bg-[#ff6b3d] text-white font-bold text-xl px-8 py-3 
                             hover:bg-[#e85a2d] transition-colors
                             tracking-wide uppercase inline-block"
                  style={{ fontFamily: 'Cooper, serif' }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Chef Icon avec Lucide */}
        <div className="relative">
          <div className="w-16 h-16 flex flex-col items-center justify-center">
            {/* Toque de chef stylisée */}
            <div className="relative">
              <div className="w-10 h-7 bg-[#ff6b3d] rounded-t-full mb-1">
                <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#ff6b3d] rounded-full"></div>
              </div>
              {/* Icône utilisateur */}
              <div className="w-10 h-10 bg-[#ff6b3d] rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}