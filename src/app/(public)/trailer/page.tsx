"use client";

export default function TrailersPage() {
  return (
    <main className="bg-[#f3f2e3] text-[#7f2b13]">
      <section className="max-w-5xl mx-auto px-6 lg:px-12 py-20 space-y-20">

        {/* HEADER */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
            Trailer
          </p>

          <h1 className="font-cooper text-5xl leading-tight">
            Chef’s Blueprint — Official Trailer
          </h1>

          <p className="font-inter text-lg">
            Discover the experience behind the narrative quiz game made for
            restaurants, culinary students, and UX beginners.
          </p>
        </div>

        {/* VIDEO BLOCK */}
        <div className="bg-white border-4 border-[#ec672a] rounded-[1.5rem] p-10 shadow-md">
          <div className="aspect-video w-full rounded-xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/DfYlVkFJdnI"
              title="Chef's Blueprint Trailer"
              className="w-full h-full"
              allowFullScreen
            />
          </div>

          <p className="font-inter text-sm text-[#7f2b13]/80 mt-6 leading-relaxed">
            This trailer introduces the core gameplay loop, the story, and the
            unique UX-driven mechanics behind Chef’s Blueprint.
          </p>
        </div>

      </section>
    </main>
  );
}
