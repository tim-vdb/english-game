"use client";

import { BookOpen, Layout, Layers, Palette } from "lucide-react";

export default function DocsPage() {
    return (
        <main className="bg-[#f3f2e3] text-[#7f2b13]">
            <section className="max-w-5xl mx-auto px-6 lg:px-12 py-20 space-y-20">

                {/* ---------------- HERO ---------------- */}
                <div className="text-center space-y-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#ec672a] font-inter">
                        Documentation
                    </p>

                    <h1 className="font-cooper text-6xl leading-tight">
                        Glossary & Terms
                    </h1>

                    <p className="font-inter text-lg max-w-3xl mx-auto leading-relaxed">
                        Master the vocabulary of web design and wireframing.
                        <br />
                        Learn the essential terms to excel in Chef's Blueprint.
                    </p>
                </div>

                {/* ---------------- SECTION: WEB ELEMENTS ---------------- */}
                <div className="bg-white border-4 border-[#ec672a] rounded-3xl p-12 shadow-md space-y-8">
                    <h2 className="font-cooper text-4xl flex items-center gap-2">
                        <Layout className="h-7 w-7 text-[#ec672a]" />
                        Web Elements
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Header</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                The section located at the top of a web page. It generally contains the logo,
                                the main navigation, and sometimes a search engine or shortcuts.
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Body</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                The main content area of a web page. It contains all the sections and information
                                that the user sees when browsing the page.
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Footer</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                Area located at the bottom of a web page. It often contains secondary links,
                                legal information, contact details, credits or shortcuts.
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Logo</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                A graphic symbol representing the identity of a project, brand, or product.
                                It is the main visual element for recognition.
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Navbar</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                A navigation bar that allows the user to access the different sections or pages
                                of a website. It is often located in the header, but can also be in the sidebar.
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Form</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                A set of fields allowing the user to enter information (text, options, checkboxes, buttons).
                                Examples: contact form, login form, registration form.
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Sidebar</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                A vertical area located on one side of a page. It is used to display secondary content
                                such as filters, an additional menu, or tools.
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">CTA (Call-to-action)</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                An interactive element designed to encourage a specific action (button, link, banner).
                                Examples: "Sign up", "Download", "Get started".
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Grid</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                A grid system used to organize the elements of a page. It defines alignment, margins,
                                columns, and the overall structure.
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Blocks</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                Rectangular content units used in a layout. Each block represents a piece of information
                                or a module (title, image, paragraph, map, button, etc.).
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Section Hero</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                The main section located at the top of the body, just below the header. It usually contains
                                a strong title, a main image or visual, and sometimes a CTA. It's the first thing people notice.
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Content</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                All the information present on a page: text, images, videos, data, interactive elements.
                                This is what the user reads, watches or manipulates.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ---------------- SECTION: WIREFRAME FIDELITY ---------------- */}
                <div className="bg-white border-4 border-[#ec672a] rounded-3xl p-12 shadow-md space-y-8">
                    <h2 className="font-cooper text-4xl flex items-center gap-2">
                        <Layers className="h-7 w-7 text-[#ec672a]" />
                        Wireframe Fidelity
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-[#fdfaf4] rounded-xl border-2 border-[#7f2b13] shadow-sm space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-[#7f2b13] rounded-full"></div>
                                <h3 className="font-cooper text-xl text-[#7f2b13]">Low-fidelity</h3>
                            </div>
                            <p className="font-inter text-sm leading-relaxed">
                                Very basic, black and white illustrations showing a "big picture" of a layout,
                                often created manually with pencils or markers. UI elements are represented as boxes
                                and lines followed by short captions. It shows the basic structure of a user interface.
                            </p>
                            <p className="font-inter text-xs text-[#ec672a] font-semibold">
                                = Skeleton
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border-2 border-[#7f2b13] shadow-sm space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-[#7f2b13] rounded-full"></div>
                                <h3 className="font-cooper text-xl text-[#7f2b13]">Mid-fidelity</h3>
                            </div>
                            <p className="font-inter text-sm leading-relaxed">
                                Black and white but show more detailed and realistic layout. They can be created manually
                                or using digital tools. Text can be included and designers can provide more detailed
                                comments on each element.
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border-2 border-[#ec672a] shadow-sm space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-[#ec672a] rounded-full"></div>
                                <h3 className="font-cooper text-xl text-[#ec672a]">High-fidelity</h3>
                            </div>
                            <p className="font-inter text-sm leading-relaxed">
                                This is a mockup, created with digital tools. They are built in colour and present the
                                screens similar to the final version. Designers focus on typography and UI elements.
                            </p>
                            <p className="font-inter text-xs text-[#ec672a] font-semibold">
                                = Mockup / UI wireframes
                            </p>
                        </div>
                    </div>
                </div>

                {/* ---------------- SECTION: UI/UX ---------------- */}
                <div className="bg-white border-4 border-[#ec672a] rounded-3xl p-12 shadow-md space-y-8">
                    <h2 className="font-cooper text-4xl flex items-center gap-2">
                        <Palette className="h-7 w-7 text-[#ec672a]" />
                        UI / UX
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-[#f5fff5] rounded-xl border border-green-600/30 shadow-sm space-y-3">
                            <h3 className="font-cooper text-2xl text-green-700">UI (User Interface)</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                Visual and interactive aspect of an interface: buttons, colours, typography, styles,
                                icons, graphic components.
                            </p>
                        </div>

                        <div className="p-6 bg-[#fff5f5] rounded-xl border border-blue-600/30 shadow-sm space-y-3">
                            <h3 className="font-cooper text-2xl text-blue-700">UX (User Experience)</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                The overall experience felt by the user when using a product. Includes usability,
                                fluidity, navigation logic, satisfaction, and ease of use.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ---------------- SECTION: OTHER TERMS ---------------- */}
                <div className="bg-white border-4 border-[#ec672a] rounded-3xl p-12 shadow-md space-y-8">
                    <h2 className="font-cooper text-4xl flex items-center gap-2">
                        <BookOpen className="h-7 w-7 text-[#ec672a]" />
                        Other Terms
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Placeholder</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                Temporary element used while waiting for the final content (empty image, placeholder text
                                like "Lorem ipsum", generic icon, etc.).
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Draft</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                A first version of something, not finalised.
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Layout</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                The way elements are set out on the page or screen, e.g. header at the top, body in the
                                middle, footer at the bottom, positioning of images.
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Seamless</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                Fluid, without obstacles: a seamless user experience.
                            </p>
                        </div>

                        <div className="p-6 bg-[#fdfaf4] rounded-xl border border-[#ec672a]/40 shadow-sm space-y-3">
                            <h3 className="font-cooper text-xl text-[#ec672a]">Template</h3>
                            <p className="font-inter text-sm leading-relaxed">
                                Something that is used as a pattern or an example for something else.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}
