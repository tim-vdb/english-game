"use client";

import { Book, Timer, Users, Sparkles, Layers, Star } from "lucide-react";

export default function RulesPage() {
  return (
    <main className="bg-[#f3f2e3] text-[#7f2b13]">
      <section className="max-w-5xl mx-auto px-6 lg:px-12 py-20 space-y-20">

        {/* ---------------- HERO ---------------- */}
        <div className="text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
            Game Rules
          </p>

          <h1 className="font-cooper text-6xl leading-tight">
            How to play Chef’s Blueprint
          </h1>

          <p className="font-inter text-lg max-w-3xl mx-auto leading-relaxed">
            Enter a fast-paced quiz adventure where each correct answer helps you build
            the full wireframe of a restaurant website.  
            <br />
            In just 30 minutes, become the best head chef… of UX design.
          </p>
        </div>

        {/* ---------------- INTRO CARDS ---------------- */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* TIME */}
          <div className="bg-white border-4 border-[#ec672a] rounded-2xl p-6 shadow-md text-center space-y-3">
            <Timer className="mx-auto h-10 w-10 text-[#ec672a]" />
            <p className="font-cooper text-2xl">30 minutes</p>
            <p className="font-inter text-sm">A short, intense design challenge.</p>
          </div>

          {/* PLAYERS */}
          <div className="bg-white border-4 border-[#ec672a] rounded-2xl p-6 shadow-md text-center space-y-3">
            <Users className="mx-auto h-10 w-10 text-[#ec672a]" />
            <p className="font-cooper text-2xl">1–6 players</p>
            <p className="font-inter text-sm">Solo or multiplayer competition.</p>
          </div>

          {/* AGES */}
          <div className="bg-white border-4 border-[#ec672a] rounded-2xl p-6 shadow-md text-center space-y-3">
            <Book className="mx-auto h-10 w-10 text-[#ec672a]" />
            <p className="font-cooper text-2xl">Ages 10+</p>
            <p className="font-inter text-sm">Simple rules, deep strategy.</p>
          </div>

        </div>

        {/* ---------------- SECTION: STORY ---------------- */}
        <div className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-12 shadow-md space-y-6">
          <h2 className="font-cooper text-4xl flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-[#ec672a]" />
            The Story
          </h2>

          <p className="font-inter text-lg leading-relaxed">
            You are competing to become the <strong>best head chef at Wireframe</strong>.
            Solve riddles, unlock components, and assemble the full restaurant website model
            before the others.  
            Every correct answer brings you closer to victory.
          </p>
        </div>

        {/* ---------------- SECTION: SETUP ---------------- */}
        <div className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-12 shadow-md space-y-8">
          <h2 className="font-cooper text-4xl flex items-center gap-2">
            <Layers className="h-7 w-7 text-[#ec672a]" />
            Setup
          </h2>

          <ul className="space-y-4 text-sm leading-relaxed font-inter list-disc ml-6">
            <li>Place the deck in the center — no spreading the cards.</li>
            <li>Start with the <strong>Tutorial Adventure</strong> to learn the rules effortlessly.</li>
            <li>
              <strong>If you play with the app :</strong> create your account and get ready to scan QR codes.
            </li>
            <li>
              <strong>If you play without the app :</strong> place wireframe elements physically
              on the table when you earn them.
            </li>
          </ul>
        </div>

        {/* ---------------- SECTION: GAMEPLAY ---------------- */}
        <div className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-12 shadow-md space-y-8">
          <h2 className="font-cooper text-4xl flex items-center gap-2">
            <Star className="h-7 w-7 text-[#ec672a]" />
            Gameplay Loop
          </h2>

          <ol className="list-decimal ml-6 space-y-5 font-inter text-sm leading-relaxed">
            <li>The oldest player draws a Riddle Card and asks the player on their right.</li>
            <li>If the answer is correct → The player receives a wireframe element.</li>
            <li>If the answer is wrong → They must let their right neighbor steal one element.</li>
            <li>The answering player (correct or not) becomes the next game master.</li>
            <li>The first player to complete their wireframe wins the game.</li>
          </ol>
        </div>

        {/* ---------------- SECTION: CARD TYPES ---------------- */}
        <div className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-12 shadow-md space-y-8">
          <h2 className="font-cooper text-4xl">Card Types</h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Riddle Cards */}
            <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-4">
              <h3 className="font-cooper text-2xl text-[#ec672a]">Riddle Cards</h3>
              <p className="font-inter text-sm">
                Solve the puzzle to earn a wireframe element.
              </p>
            </div>

            {/* Bonus Cards */}
            <div className="p-6 bg-[#f5fff5] rounded-xl border border-green-600/30 shadow-sm space-y-4">
              <h3 className="font-cooper text-2xl text-green-700">Bonus Cards</h3>
              <p className="font-inter text-sm">
                Grant QR codes or special wireframe components.
              </p>
            </div>

            {/* Penalty Cards */}
            <div className="p-6 bg-[#fff5f5] rounded-xl border border-red-600/30 shadow-sm space-y-4">
              <h3 className="font-cooper text-2xl text-red-700">Penalty Cards</h3>
              <p className="font-inter text-sm">
                Delay your progress with time-consuming setbacks.
              </p>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}
