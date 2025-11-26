import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/hero-section";

const experienceHighlights = [
  {
    title: "Narrative brief",
    description:
      "A Lyon chef demands a website that reflects his gastronomic identity. Translate his world into UI.",
  },
  {
    title: "Maps & QR codes",
    description:
      "Solve puzzles, scan clues and unlock UI components one by one.",
  },
  {
    title: "Wireframe vivant",
    description:
      "The app progressively fills the wireframe as your team succeeds.",
  },
];

const gameplaySteps = [
  {
    title: "Preparation",
    subtitle: "Brief & intention",
    copy: "Define the universe, personas and constraints before entering the kitchen.",
  },
  {
    title: "Service",
    subtitle: "Resolution & Collection",
    copy: "Every riddle unlocks a brand element or interface component.",
  },
  {
    title: "Dressage",
    subtitle: "Assembly & feedback",
    copy: "Piece everything together and deliver the final wireframe.",
  },
];

const addOnFeatures = [
  "Progressive wireframe visualization",
  "Design & methodology glossary",
  "Bonus challenges via QR code",
  "Night mode for late workshops",
];

const ctaStats = [
  { value: "12", label: "Narrative maps" },
  { value: "18", label: "UI components" },
  { value: "24h", label: "Delivery" },
];

export default function Home() {
  return (
    <main className="bg-[#f3f2e3] text-[#7f2b13]">

      <HeroSection />

      {/* WHY DIFFERENT */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
            Why is it different ?
          </p>

          <h2 className="font-cooper text-4xl">
            A card game that teaches UX through play.
          </h2>

          <p className="font-inter text-lg max-w-2xl">
            Chef’s Blueprint transforms wireframing into a tactile narrative where
            every component is earned through collaboration.
          </p>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-3">
          {experienceHighlights.map((item) => (
            <div
              key={item.title}
              className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-6 shadow-md"
            >
            <h3 className="font-cooper text-2xl mb-3">{item.title}</h3>
            <p className="font-inter text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>

    </div>
    </section>


      {/* GAMEPLAY */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
            Gameplay
          </p>

          <h2 className="font-cooper text-4xl">
            Three acts, zero boredom.
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {gameplaySteps.map((step, index) => (
              <div
                key={step.title}
                className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-6 shadow-md"
    >
                <span className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
                  Act {index + 1}
                </span>

                <h3 className="font-cooper text-2xl mt-2">{step.title}</h3>
                <p className="font-inter text-sm">{step.subtitle}</p>

                <p className="font-inter text-sm mt-4 leading-relaxed">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

  {/* ADD-ON SECTION */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 grid gap-16 lg:grid-cols-2">
        
        {/* LEFT */}
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
            Digital add-on
          </p>

          <h2 className="font-cooper text-4xl">
            The app that reveals your wireframe.
          </h2>

          <p className="font-inter text-lg max-w-xl">
            A QR code unlocks animations, explanations and definitions,
            visualizing how your choices shape the interface.
          </p>

          <ul className="space-y-3 font-inter text-sm">
            {addOnFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#ec672a]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT BLOCK */}
        <div className="bg-white border-4 border-[#ec672a] rounded-[2rem] p-10 shadow-md space-y-8">
          <h3 className="font-cooper text-3xl">A ready-to-play workshop</h3>

            <p className="font-inter leading-relaxed">
              You receive the full kit: maps, puzzles, QR codes, facilitator guide
              and access to the app for live visual feedback.
            </p>

        <div className="grid gap-8 sm:grid-cols-3 text-center">
          {ctaStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-cooper text-3xl text-[#ec672a]">{stat.value}</p>
              <p className="font-inter text-xs uppercase tracking-[0.25em] text-[#7f2b13]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

  <Link
    href="/contact"
    className="bg-[#ec672a] text-white border-2 border-[#7f2b13] rounded-full px-6 py-3 font-inter uppercase tracking-wide shadow-md hover:scale-[1.03] transition"
  >
    Request the kit
  </Link>
</div>

      </section>

    </main>
  );
}
