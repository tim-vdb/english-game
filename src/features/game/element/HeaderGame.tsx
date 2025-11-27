"use client";
import React from "react";

export default function FormComponent() {
  return (
    <div className="w-full max-w-xl mx-auto">

      {/* CARD WRAPPER */}
      <div className="bg-[#f3f2e3] border-4 border-[#ec672a] rounded-[1.75rem] p-10">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="font-cooper text-5xl text-[#7f2b13]">
            Form
          </h2>
          <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] mt-2">
            Wireframe Element Preview
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-8">

          {/* FIELD */}
          <div className="space-y-2">
            <label className="text-[#7f2b13] font-inter text-sm tracking-wide uppercase">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-[#ffffff] border-2 border-[#ec672a] rounded-xl 
                         px-4 py-3 text-[#7f2b13] font-inter placeholder-[#b77a63]
                         shadow-inner focus:outline-none focus:border-[#7f2b13] transition"
            />
          </div>

          {/* FIELD */}
          <div className="space-y-2">
            <label className="text-[#7f2b13] font-inter text-sm tracking-wide uppercase">
              Email Address
            </label>

            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full bg-[#ffffff] border-2 border-[#ec672a] rounded-xl 
                         px-4 py-3 text-[#7f2b13] font-inter placeholder-[#b77a63]
                         shadow-inner focus:outline-none focus:border-[#7f2b13] transition"
            />
          </div>

          {/* FIELD */}
          <div className="space-y-2">
            <label className="text-[#7f2b13] font-inter text-sm tracking-wide uppercase">
              Message
            </label>

            <textarea
              rows={4}
              placeholder="Your message…"
              className="w-full bg-white border-2 border-[#ec672a] rounded-xl 
                         px-4 py-3 text-[#7f2b13] font-inter placeholder-[#b77a63]
                         shadow-inner focus:outline-none focus:border-[#7f2b13] transition"
            />
          </div>

          {/* BUTTON */}
          <div className="flex justify-center pt-6">
            <button
              type="button"
              className="uppercase font-inter px-10 py-3 rounded-full
                         bg-[#ece547] text-[#7f2b13] tracking-[0.2em]
                          hover:shadow-[0_6px_0_#7f2b13]
                         hover:scale-105 transition"
            >
              Send
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
