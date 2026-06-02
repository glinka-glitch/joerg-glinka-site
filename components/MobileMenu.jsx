"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

const active =
  "text-fuchsia-400 text-2xl font-black uppercase flex items-center gap-3"

const inactive =
  "text-white text-2xl font-black uppercase flex items-center gap-3"

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white"
      >
        {open ? (
          <X className="w-8 h-8" />
        ) : (
          <Menu className="w-8 h-8" />
        )}
      </button>

      {open && (
        <div className="absolute top-24 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-10 flex flex-col gap-8 z-[9999]">
          <Link
  href="/"
  onClick={() => setOpen(false)}
  className={pathname === "/" ? active : inactive}
>
  {pathname === "/" && (
    <span className="w-2 h-2 rounded-full bg-fuchsia-500"></span>
  )}
  Home
</Link>

          <Link
  href="/about"
  onClick={() => setOpen(false)}
  className={pathname === "/about" ? active : inactive}
>
  {pathname === "/about" && (
    <span className="w-2 h-2 rounded-full bg-fuchsia-500"></span>
  )}
  About
</Link>

          <Link
  href="/portfolio"
  onClick={() => setOpen(false)}
  className={pathname === "/portfolio" ? active : inactive}
>
  {pathname === "/portfolio" && (
    <span className="w-2 h-2 rounded-full bg-fuchsia-500"></span>
  )}
  Portfolio
</Link>

          <Link
  href="/contact"
  onClick={() => setOpen(false)}
  className={pathname === "/contact" ? active : inactive}
>
  {pathname === "/contact" && (
    <span className="w-2 h-2 rounded-full bg-fuchsia-500"></span>
  )}
  Contact
</Link>

          <a
            href="https://calendly.com/glinka-ylcr/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-fuchsia-600 hover:bg-fuchsia-500 transition-all duration-300 px-6 py-4 rounded-full text-center text-sm font-bold uppercase tracking-wide"
          >
            Termin vereinbaren
          </a>
        </div>
      )}
    </div>
  )
}