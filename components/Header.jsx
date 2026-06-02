import Link from "next/link"
import Image from "next/image"

import Navigation from "./Navigation"
import MobileMenu from "./MobileMenu"

export default function Header() {
  return (
    <header className="sticky top-0 w-full z-[9999] backdrop-blur-md bg-black/90 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-4">

          <Image
            src="/logo.png"
            alt="Jörg Glinka Logo"
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
          />

          <div>
            <h1 className="text-xl font-black tracking-tight">
              JÖRG GLINKA
            </h1>

            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 mt-1">
              AI-Driven Growth & E-Commerce
            </p>
          </div>

        </Link>

        <div className="flex items-center gap-6">

  <Navigation />

  <a
    href="https://calendly.com/glinka-ylcr/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden md:inline-flex bg-fuchsia-600 hover:bg-fuchsia-500 transition-all duration-300 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide shadow-2xl hover:scale-105"
  >
    Termin vereinbaren
  </a>

  <MobileMenu />

</div>

      </div>

    </header>
  )
}