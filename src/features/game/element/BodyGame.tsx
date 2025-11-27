'use client';

import React from 'react';
import Image from 'next/image';

export default function BodyGame() {
  return (
    <div className="min-h-screen bg-[#f3f2e3] font-inter">      

      {/* ---------------- HERO ---------------- */}
      <section className="relative py-20 flex flex-col items-center text-center px-4">

        {/* Chef Image */}
        <div className="relative w-full max-w-4xl mx-auto mb-16">
          <Image
            src="/images/chef_icon.png"
            alt="Chef in Kitchen"
            width={1024}
            height={512}
            className="w-full h-auto rounded-3xl shadow-[0_8px_0_#7f2b13]"
          />
          <span className="absolute top-6 right-8 text-[8rem] font-black text-[#ece547] drop-shadow-[0_6px_0_#7f2b13] opacity-90">
            #1
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[#7f2b13] text-5xl font-cooper font-bold mb-16 drop-shadow-sm leading-tight">
            Who will be the first to build the complete wireframe?
        </h2>

        {/* Interactive Cards */}
        <div className="flex flex-wrap justify-center items-center gap-10 mb-20">
          {[1, 2, 3].map((card) => (
            <button
              key={card}
              className="relative w-64 h-48 bg-white border-4 border-[#7f2b13] rounded-2xl
                         shadow-[0_6px_0_#ec672a] hover:shadow-[0_10px_0_#ec672a]
                         hover:scale-105 transition-all duration-300 flex items-center justify-center p-6 group"
            >
              {/* Fake Wireframe Lines */}
              <div className="space-y-3 w-full px-4">
                <div className="h-2 bg-[#7f2b13] rounded"></div>
                <div className="h-2 bg-[#7f2b13] rounded w-10/12"></div>
                <div className="h-2 bg-[#7f2b13] rounded w-9/12"></div>
                <div className="h-2 bg-[#ec672a] rounded w-8/12"></div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute -bottom-5 -right-5 w-12 h-12 bg-[#ece547] border-4 border-[#7f2b13] 
                              rounded-xl flex items-center justify-center text-[#7f2b13] text-2xl
                              rotate-12 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_4px_0_#7f2b13]">
                ▶
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
