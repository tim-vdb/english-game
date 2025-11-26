import Image from "next/image";

const gameFeatures = [
  {
    title: "Solve puzzles",
    description:
      "Narrative and logical challenges that guide you toward the essential elements of the future website.",
    icon: "🧩",
  },
  {
    title: "Collect elements",
    description:
      "Each step lets you obtain a component of the wireframe: header, menu, buttons, navigation, CTA…",
    icon: "🎴",
  },
  {
    title: "Assemble the wireframe",
    description:
      "Piece by piece, you reconstruct the structure of the Chef’s website.",
    icon: "🎯",
  },
];

const playModes = [
  {
    title: "Hybrid version",
    description: "Combine cards + application for total immersion.",
    icon: "📱",
  },
  {
    title: "Physical version only",
    description: "Play entirely with the physical cards, no phone needed.",
    icon: "✋",
  },
];

export default function Page() {
  return (
    <main className="bg-[#f3f2e3] text-[#7f2b13]">

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 space-y-20">

        {/* ---------------- HERO ABOUT ---------------- */}
        <div className="grid gap-14 lg:grid-cols-2 items-center">

          {/* LEFT */}
          <div className="space-y-6 text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
              About Chef’s Blueprint
            </p>

            <h1 className="font-cooper text-5xl leading-tight text-left">
              A hybrid escape game centered on wireframe design.
            </h1>
            
            <p className="font-inter text-lg leading-relaxed">
              The Chef is preparing the opening of an exceptional restaurant.
              He wants a website reflecting his identity, but nothing can start:
              the developer cannot build anything without a complete wireframe.
            </p>

            <div className="flex gap-4 text-sm font-inter text-[#7f2b13]">
              <span>🎯 1–6 players</span>
              <span>⏱ 50 minutes</span>
              <span>📱 Hybrid mode</span>
            </div>
          </div>

          {/* RIGHT: SIMPLE LOGO */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/logo.svg"
              alt="Chef’s Blueprint game"
              width={380}
              height={380}
              className="object-contain"
            />
          </div>

        </div>

        {/* ---------------- STORY SECTION ---------------- */}
        <div className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-10 shadow-md space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
            The story
          </p>

          <h2 className="font-cooper text-3xl">
            Your mission: build the perfect wireframe
          </h2>

          <p className="font-inter text-base leading-relaxed">
            The wireframe defines the structure of the site: navigation, layout,
            buttons, menus… Without it, nothing can move forward. Your objective:
            explore, solve, collect and assemble each piece to deliver the Chef’s
            final wireframe.
          </p>
        </div>

        {/* ---------------- GAME CONCEPT ---------------- */}
        <div className="space-y-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
            How it works
          </p>

          <h2 className="font-cooper text-4xl">The concept of the game</h2>

          <div className="grid gap-10 md:grid-cols-3">
            {gameFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-8 shadow-md space-y-3"
              >
                <span className="text-3xl">{feature.icon}</span>

                <span className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
                  Step {index + 1}
                </span>

                <h3 className="font-cooper text-2xl">{feature.title}</h3>

                <p className="font-inter text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- PLAY MODES ---------------- */}
        <div className="grid gap-14 lg:grid-cols-2 items-start">

          {/* LEFT */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
              Play modes
            </p>

            <h2 className="font-cooper text-4xl">
              A hybrid experience (or 100% physical)
            </h2>

            <p className="font-inter leading-relaxed text-lg">
              Whether hybrid or physical, the goal remains the same: reconstruct
              the Chef's complete wireframe using the elements you unlock.
            </p>

            <div className="space-y-6">
              {playModes.map((mode) => (
                <div key={mode.title} className="flex items-start gap-4">
                  <span className="text-3xl">{mode.icon}</span>
                  <div>
                    <h3 className="font-cooper text-xl">{mode.title}</h3>
                    <p className="font-inter text-sm text-[#7f2b13]">
                      {mode.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-10 shadow-md text-left space-y-8 font-inter">

            <div>
              <h3 className="font-cooper text-2xl mb-2">Equipment</h3>
              <ul className="space-y-2 text-sm">
                <li>• Deck of Chef’s Blueprint cards</li>
                <li>• QR codes for the add-on</li>
                <li>• Smartphone or tablet (optional)</li>
                <li>• Table space to assemble the physical wireframe</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#ec672a]">
              <h3 className="font-cooper text-2xl mb-2">Skills developed</h3>
              <ul className="space-y-2 text-sm">
                <li>• Teamwork and coordination</li>
                <li>• Clear communication</li>
                <li>• UX-focused problem solving</li>
                <li>• Attention to detail</li>
              </ul>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}
