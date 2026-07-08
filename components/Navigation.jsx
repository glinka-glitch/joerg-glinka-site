"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Navigation() {
  const pathname = usePathname()

  const active =
    "bg-white text-black px-4 py-2 rounded-full font-bold uppercase tracking-wide shadow-lg"

  const inactive =
    "text-sm uppercase tracking-wide text-white/60 hover:text-white transition"

  return (
    <nav className="hidden md:flex items-center gap-8">

      <Link
        href="/"
        scroll={true}
        className={pathname === "/" ? active : inactive}
      >
        Home
      </Link>

      <Link
        href="/about"
        scroll={true}
        className={pathname === "/about" ? active : inactive}
      >
        About
      </Link>

      <Link
        href="/portfolio"
        scroll={true}
        className={pathname === "/portfolio" ? active : inactive}
      >
        Portfolio
      </Link>

      <Link
        href="/contact"
        scroll={true}
        className={pathname === "/contact" ? active : inactive}
      >
        Contact
      </Link>

      <Link
        href="/ki-readiness-check"
        scroll={true}
        className={pathname === "/ki-readiness-check" ? active : inactive}
      >
        KI-Check
      </Link>

    </nav>
  )
}