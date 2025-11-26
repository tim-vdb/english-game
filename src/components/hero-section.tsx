'use client'
import Link from "next/link";
import Image from "next/image";


export default function HeroSection() {
  return (
    <section className="bg-[#f3f2e3] text-[#7f2b13] py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid gap-16 lg:grid-cols-2 items-center">

        {/* LEFT TEXT */}
        <div className="space-y-6 text-left">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
            Serious game studio
          </p>

          <h1 className="font-cooper text-5xl leading-tight text-[#7f2b13] text-left">
            Chef’s Blueprint,<br />
            the experience that makes you love wireframes.
          </h1>

          <p className="text-lg text-[#7f2b13] font-inter">
            Solve puzzles brigade-style, unlock UI components via QR codes,
            and witness the live creation of a perfect wireframe for a demanding Lyon chef.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="bg-[#ec672a] text-white border-2 border-[#7f2b13] rounded-full px-6 py-3 font-inter uppercase tracking-wide shadow-md hover:scale-[1.03] transition"
            >
              Discover the universe
            </Link>

            <Link
              href="/contact"
              className="bg-[#f3f2e3] text-[#ec672a] border-2 border-[#ec672a] rounded-full px-6 py-3 font-inter uppercase tracking-wide hover:bg-[#ec672a]/10 transition"
            >
              Book a demo
            </Link>
          </div>

          {/* FEATURE LIST */}
          <ul className="space-y-2 text-sm text-[#7f2b13] font-inter">
            <li className="flex gap-2 items-center">
              <span className="h-2 w-2 rounded-full bg-[#ec672a]" />
              Narrative escape game inspired by haute cuisine
            </li>
            <li className="flex gap-2 items-center">
              <span className="h-2 w-2 rounded-full bg-[#ec672a]" />
              Wireframe methodology taught through puzzles
            </li>
            <li className="flex gap-2 items-center">
              <span className="h-2 w-2 rounded-full bg-[#ec672a]" />
              QR-powered add-on with live visual feedback
            </li>
          </ul>
        </div>

        {/* RIGHT: LOGO SIMPLE, SANS CARTE */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/logo.svg"
            alt="Chef's Blueprint logo"
            width={380}
            height={380}
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
