import Image from "next/image";

const steps = [
  {
    title: "Brief & intention",
    description:
      "We gather the restaurant's universe, the UI constraints, and the number of players.",
  },
  {
    title: "Prototype & playtest",
    description:
      "We adjust the cards, QR codes and wireframe add-on based on your feedback.",
  },
  {
    title: "Activation",
    description: "Delivery of the Chef’s Blueprint kit and live support on the day.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#f3f2e3] text-[#7f2b13]">
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-20 space-y-20">

        {/* ---------------- HERO CONTACT ---------------- */}
        <div className="grid gap-14 lg:grid-cols-2 items-start">
          
          {/* LEFT */}
          <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#cb3005] font-inter">
            Contact the studio
          </p>

            <h1 className="font-cooper text-5xl leading-tight text-left">
              Let's talk about your Chef’s Blueprint experience.
            </h1>

            <p className="font-inter text-lg leading-relaxed">
              Whether you're preparing a workshop, a training session or an immersive
              evening, our team answers your questions and builds a customized
              kit for your leader.
            </p>

            <div className="flex gap-4 text-sm font-inter">
              <span>📍 Lyon & remote</span>
              <span>⏱ Answer &lt; 24h</span>
              <span>🌐 FR / EN</span>
            </div>

            <button className="font-inter rounded-md bg-[#ec672a] text-white px-6 py-3 text-sm uppercase tracking-[0.2em] shadow-md hover:scale-[1.03] transition">
              Book discovery call
            </button>
          </div>

          {/* RIGHT — FORM */}
          <div className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-10 shadow-md">
            <form
              id="contact-form"
              action="https://formspree.io/f/mgvezdao"
              method="POST"
              className="flex flex-col gap-5 text-sm font-inter"
            >
              <input type="hidden" name="contact_number" value="697483" />

              <label className="flex flex-col gap-2">
                Full name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ex. Camille Martin"
                  className="rounded-md border border-[#ec672a] px-3 py-2 focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                Organisation
                <input
                  type="text"
                  name="company"
                  placeholder="École, studio, collectif…"
                  className="rounded-md border border-[#ec672a] px-3 py-2 focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@mail.com"
                  className="rounded-md border border-[#ec672a] px-3 py-2 focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                Your message
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="message..."
                  className="rounded-md border border-[#ec672a] px-3 py-2 focus:outline-none"
                ></textarea>
              </label>

              <button
                type="submit"
                className="rounded-md bg-[#7f2b13] px-6 py-3 text-white uppercase tracking-[0.2em] text-xs font-semibold hover:bg-[#5d1f0f] transition"
>
                Submit
              </button>
            </form>
          </div>

        </div>

        {/* ---------------- PROCESS STEPS ---------------- */}
        <div className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-10 shadow-md">
          <h2 className="font-cooper text-3xl mb-8">
            How we work with your kitchen crew
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.title} className="space-y-3 font-inter">
                <div className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-semibold">
                  {step.title}
                </div>
                <p className="text-sm leading-relaxed">{step.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* ---------------- DOWNLOAD GUIDE ---------------- */}
        <div className="grid gap-14 md:grid-cols-2 items-center bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-12 shadow-md">
          
          {/* LEFT */}
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
              Download
            </p>

            <h3 className="font-cooper text-3xl">
              Chef’s Blueprint Guide 2025
            </h3>

            <p className="font-inter text-sm leading-relaxed">
              Discover our pricing structure, detailed game flow, and tips
              for adapting the scenario to various culinary identities.
              Receive the full PDF instantly via email.
            </p>

            <form
              action="https://formspree.io/f/mgvezdao"
              method="POST"
              className="flex flex-col gap-3 sm:flex-row"
            >
              <input type="hidden" name="contact_number" value="kit-download" />

              <input
                type="email"
                name="download_email"
                required
                placeholder="your@restaurant.com"
                className="flex-1 rounded-md border border-[#ec672a] px-4 py-3 text-sm focus:outline-none"
              />

              <button
                type="submit"
                className="rounded-md bg-[#ec672a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:scale-[1.03] transition"
              >
                Envoyer
              </button>
            </form>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/logo.svg"
              alt="Chef’s Blueprint mobile add-on"
              width={380}
              height={380}
              className="object-contain"
            />
          </div>

        </div>

      </section>
    </main>
  );
}
