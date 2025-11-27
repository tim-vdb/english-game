"use client";

import Image from "next/image";

export default function GameDesignPage() {
  return (
    <main className="bg-[#f3f2e3] text-[#7f2b13]">
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 space-y-20">

        {/* ------------------ HERO ------------------ */}
        <header className="space-y-6 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#cb3005] font-inter">
            Game Design Overview
          </p>

          <h1 className="font-cooper text-5xl leading-tight">
            The Card Game Behind Chef’s Blueprint
          </h1>

          <p className="font-inter text-lg leading-relaxed">
            Discover the mechanics, intentions and core gameplay loops behind our
            narrative quiz game. The aim? Learn how wireframes work — while having fun.
          </p>
        </header>

       {/* ------------------ BOX PRESENTATION ------------------ */}
        <div className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-10 shadow-md grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">Game Box</p>
                    <h2 className="font-cooper text-3xl">Box Design & Layout</h2>
                    <p className="font-inter leading-relaxed text-sm">
                        Here is the full box template, showing front, back, and side designs.
                        Hover over the image to see the names of the faces.
                    </p>
                <p className="font-inter text-sm italic opacity-70">
                    “Every detail matters — from color to typography.”
                </p>
        </div>

        <div className="relative group flex justify-center">
            <Image
                src="/images/face_box.png"
                alt="Game box template"
                width={400}
                height={400}
                className="rounded-lg object-contain transition-transform duration-300 group-hover:scale-110"
            />
    
  </div>
</div>


        {/* ------------------ GAME SUMMARY ------------------ */}
        <div className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-10 shadow-md">
          <h2 className="font-cooper text-3xl mb-6">Game Summary</h2>
          <ul className="font-inter text-sm space-y-2">
            <li>⏱ <strong>Time:</strong> 30 minutes</li>
            <li>👥 <strong>Players:</strong> 1–6</li>
            <li>🎂 <strong>Ages:</strong> 10 and up</li>
            <li>📚 <strong>Introduction:</strong> play the Tutorial adventure first</li>
          </ul>
        </div>

        {/* ------------------ SETUP & GAMEPLAY ------------------ */}
        <section className="grid gap-10 md:grid-cols-2 items-start">

          {/* Setup */}
          <div className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-10 shadow-md space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">Setup</p>
            <h2 className="font-cooper text-3xl">Setting Up the Game</h2>
            <ul className="font-inter text-sm leading-relaxed space-y-3">
              <li>• Place the deck in the center of the table</li>
              <li>• Do not spread out the cards</li>
              <li>• If using the app, create your player account</li>
              <li>• If playing without the app: place each won wireframe element in front of you</li>
            </ul>
          </div>

          {/* Gameplay Loop */}
          <div className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-10 shadow-md space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">Gameplay loop</p>
            <h2 className="font-cooper text-3xl">How the Game Works</h2>
            <ul className="font-inter text-sm leading-relaxed space-y-3">
              <li>• The oldest player draws a card and reads the riddle</li>
              <li>• If the player answers correctly → they earn a wireframe element</li>
              <li>• If wrong → they must give one of their elements to their right neighbor</li>
              <li>• The first to complete the full wireframe wins</li>
            </ul>
          </div>

        </section>

        {/* ------------------ CARDS SECTION ------------------ */}
        <div className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-10 shadow-md">
          <h2 className="font-cooper text-3xl mb-6">Card Types & Designs</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            
            {/* Riddle Card */}
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/images/question.png"
                alt="Riddle Card"
                width={150}
                height={220}
                className="rounded-lg shadow-md hover:scale-105 transition-transform"
              />
              <p className="uppercase text-xs tracking-[0.25em] text-[#ec672a]">Riddle Card</p>
              <p className="text-sm font-inter">Solve a UX question to earn a wireframe element.</p>
            </div>

            {/* Bonus Card */}
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/images/card_bonus.png"
                alt="Bonus Card"
                width={150}
                height={220}
                className="rounded-lg shadow-md hover:scale-105 transition-transform"
              />
              <p className="uppercase text-xs tracking-[0.25em] text-[#0a8a2f]">Bonus Card</p>
              <p className="text-sm font-inter">Gain extra elements or helpful QR codes.</p>
            </div>

            {/* Penalty Card */}
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/images/penalty_card.png"
                alt="Penalty Card"
                width={150}
                height={220}
                className="rounded-lg shadow-md hover:scale-105 transition-transform"
              />
              <p className="uppercase text-xs tracking-[0.25em] text-[#d62828]">Penalty Card</p>
              <p className="text-sm font-inter">Lose time and delay your progress.</p>
            </div>

            {/* Card Back */}
            <div className="flex flex-col items-center space-y-2">
              <Image
                src="/images/back.png"
                alt="Card Back"
                width={150}
                height={220}
                className="rounded-lg shadow-md hover:scale-105 transition-transform"
              />
              <p className="uppercase text-xs tracking-[0.25em] text-[#7f2b13]">Card Back</p>
              <p className="text-sm font-inter">Signature design visible on all cards.</p>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}
