"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DesktopNavbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const linksClasses = {
    base: "px-3 py-2 rounded-md text-sm font-medium transition-colors font-cooper uppercase tracking-wider",
    isActive:
      "underline decoration-2 decoration-[#ec672a] text-[#7f2b13] dark:decoration-yellow-600 dark:text-white",
    notActive: "text-[#7f2b13] hover:text-[#ec672a] dark:text-gray-300 dark:hover:text-[#ec672a]",
  };

  return (
    <nav className="container flex items-center justify-center gap-4 h-full w-full">
      {/* Navigation Desktop */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <Link
            href="/about"
            className={cn(
              linksClasses.base,
              isActive("/about")
                ? linksClasses.isActive
                : linksClasses.notActive
            )}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={cn(
              linksClasses.base,
              isActive("/contact")
                ? linksClasses.isActive
                : linksClasses.notActive
            )}
          >
            Contact Us
          </Link>
          <Link
            href="/team"
            className={cn(
              linksClasses.base,
              isActive("/team")
                ? linksClasses.isActive
                : linksClasses.notActive
            )}
          >
            Our Team
          </Link>
        </div>
      </div>
    </nav>
  );
}
