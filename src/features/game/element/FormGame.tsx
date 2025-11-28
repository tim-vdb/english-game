"use client";
import React, { useState } from "react";

export default function FormGame() {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Logique de soumission ici
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full max-w-md mx-auto py-20">
      {/* CARD WRAPPER - Fond marron comme la carte */}
      <div className="bg-[#7f2b13] rounded-2xl p-8 shadow-2xl">

        {/* TITLE */}
        <div className="mb-8">
          <h2 className="text-white font-bold text-3xl uppercase tracking-wider">
            Formulaire
          </h2>
        </div>

        {/* FORM */}
        <div className="space-y-6">

          {/* NAME FIELD */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-white font-bold text-sm uppercase tracking-widest"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white border-b-4 border-white
                         px-4 py-3 text-[#7f2b13] font-medium
                         focus:outline-none focus:border-[#ec672a] 
                         transition-colors duration-200"
            />
          </div>

          {/* BIRTHDATE FIELD */}
          <div className="space-y-2">
            <label
              htmlFor="birthdate"
              className="block text-white font-bold text-sm uppercase tracking-widest"
            >
              Birthdate
            </label>
            <input
              id="birthdate"
              name="birthdate"
              type="date"
              value={formData.birthdate}
              onChange={handleChange}
              className="w-full bg-white border-b-4 border-white
                         px-4 py-3 text-[#7f2b13] font-medium
                         focus:outline-none focus:border-[#ec672a] 
                         transition-colors duration-200"
            />
          </div>

          {/* EMAIL FIELD */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-white font-bold text-sm uppercase tracking-widest"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white border-b-4 border-white
                         px-4 py-3 text-[#7f2b13] font-medium
                         focus:outline-none focus:border-[#ec672a] 
                         transition-colors duration-200"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-6">
            <button
              onClick={handleSubmit}
              className="w-full bg-[#e8e6d4] text-[#7f2b13] font-bold text-lg 
                         uppercase tracking-wider px-8 py-4 rounded-full
                         hover:bg-white hover:shadow-lg
                         transform hover:scale-[1.02] 
                         transition-all duration-200"
            >
              Search
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// Version alternative avec plus de champs
export function FormGameExtended() {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="bg-[#7f2b13] rounded-2xl p-8 shadow-2xl border-4 border-[#ec672a]">

        <div className="mb-8 text-center">
          <h2 className="text-white font-bold text-4xl uppercase tracking-wider mb-2">
            Formulaire
          </h2>
          <div className="h-1 w-20 bg-[#ec672a] mx-auto"></div>
        </div>

        <div className="space-y-6">

          <div className="space-y-2">
            <label className="block text-white font-bold text-sm uppercase tracking-widest">
              Name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-white border-b-4 border-white rounded-lg
                         px-4 py-3 text-[#7f2b13] font-medium
                         placeholder-gray-400
                         focus:outline-none focus:border-[#ec672a] 
                         transition-colors duration-200"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-white font-bold text-sm uppercase tracking-widest">
              Birthdate
            </label>
            <input
              name="birthdate"
              type="date"
              value={formData.birthdate}
              onChange={handleChange}
              className="w-full bg-white border-b-4 border-white rounded-lg
                         px-4 py-3 text-[#7f2b13] font-medium
                         focus:outline-none focus:border-[#ec672a] 
                         transition-colors duration-200"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-white font-bold text-sm uppercase tracking-widest">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full bg-white border-b-4 border-white rounded-lg
                         px-4 py-3 text-[#7f2b13] font-medium
                         placeholder-gray-400
                         focus:outline-none focus:border-[#ec672a] 
                         transition-colors duration-200"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-white font-bold text-sm uppercase tracking-widest">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your message here..."
              className="w-full bg-white border-b-4 border-white rounded-lg
                         px-4 py-3 text-[#7f2b13] font-medium
                         placeholder-gray-400
                         focus:outline-none focus:border-[#ec672a] 
                         transition-colors duration-200 resize-none"
            />
          </div>

          <div className="pt-6">
            <button
              onClick={handleSubmit}
              className="w-full bg-[#e8e6d4] text-[#7f2b13] font-bold text-xl 
                         uppercase tracking-wider px-8 py-4 rounded-full
                         hover:bg-white hover:shadow-[0_8px_0_#ec672a]
                         transform hover:-translate-y-1
                         transition-all duration-200"
            >
              Search
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// Version minimaliste (comme la carte exacte)
export function FormGameMinimal() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-[#7f2b13] rounded-lg p-6 shadow-xl">

        <h2 className="text-white font-bold text-2xl uppercase mb-6">
          Formulaire
        </h2>

        <div className="space-y-5">

          <div>
            <label className="block text-white text-xs uppercase tracking-widest mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-white border-b-2 border-white
                         px-3 py-2 text-[#7f2b13]
                         focus:outline-none focus:border-[#ec672a]"
            />
          </div>

          <div>
            <label className="block text-white text-xs uppercase tracking-widest mb-2">
              Birthdate
            </label>
            <input
              type="date"
              className="w-full bg-white border-b-2 border-white
                         px-3 py-2 text-[#7f2b13]
                         focus:outline-none focus:border-[#ec672a]"
            />
          </div>

          <div>
            <label className="block text-white text-xs uppercase tracking-widest mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full bg-white border-b-2 border-white
                         px-3 py-2 text-[#7f2b13]
                         focus:outline-none focus:border-[#ec672a]"
            />
          </div>

          <div className="pt-4 flex justify-end">
            <button
              className="bg-[#e8e6d4] text-[#7f2b13] font-bold text-sm
                         uppercase px-6 py-2 rounded-full
                         hover:bg-white transition-colors"
            >
              Search
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}