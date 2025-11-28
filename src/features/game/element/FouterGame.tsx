'use client';

import React from 'react';

const resourcesLinks = ['Tutorial', 'Guides', 'FAQ'];
const companyLinks = ['About Us', 'Careers', 'Contact'];
const socialLinks = ['Twitter', 'Instagram', 'LinkedIn'];

export default function FooterGame() {
  return (
    <div className="w-full bg-[#ec672a] text-white rounded-b-xl pt-12 pb-8 shadow-[0px_-5px_15px_-3px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider mb-10 uppercase border-b border-white/50 pb-3 drop-shadow">
          FOOTER
        </h1>

        {/* GRID COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 text-sm">

          {/* RESOURCES */}
          <div>
            <h3 className="text-lg font-bold tracking-widest mb-4 uppercase drop-shadow">
              RESOURCES
            </h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(/\s/g, '-')}`}
                    className="hover:text-[#f3f2e3] transition-colors block border-b border-white/30 pb-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-lg font-bold tracking-widest mb-4 uppercase drop-shadow">
              COMPANY
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(/\s/g, '-')}`}
                    className="hover:text-[#f3f2e3] transition-colors block border-b border-white/30 pb-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-lg font-bold tracking-widest mb-4 uppercase drop-shadow">
              SOCIAL
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`/social/${link.toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f3f2e3] transition-colors block border-b border-white/30 pb-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-6 border-t border-white/40 text-center text-xs tracking-wide text-[#7f2b13]">
          © {new Date().getFullYear()} Chef's Blueprint Game. Tous droits réservés.
        </div>
      </div>
    </div>
  );
}
