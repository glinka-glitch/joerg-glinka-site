import Link from "next/link"
import Image from "next/image"

import Navigation from "./Navigation"
import MobileMenu from "./MobileMenu"

export default function Header() {
  return (
   <header className="sticky top-0 left-0 w-full z-[9999] backdrop-blur-md bg-black/90 border-b border-white/10">

    <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-4">

          <Image
            src="/logo.png"
            alt="Jörg Glinka Logo"
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
          />

          <div>
            <p className="text-xl font-black tracking-tight">
              JÖRG GLINKA
            </p>

            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-400 mt-1 leading-tight">
  <span className="md:hidden">
    KI-Management
  </span>

  <span className="hidden md:inline">
    KI-Management & Digitale Transformation
  </span>
</p>
          </div>

        </Link>

        <div className="flex items-center gap-6">

  <Navigation />

  <MobileMenu />

</div>

      </div>

    </header>
  )
}