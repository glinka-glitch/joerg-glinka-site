"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navigation() {
  const pathname = usePathname()

  const active =
    "bg-fuchsia-600 text-white px-4 py-2 rounded-full font-bold uppercase tracking-wide shadow-lg"

  const inactive =
    "text-sm uppercase tracking-wide text-white hover:text-fuchsia-500 transition"

  return (
    <nav className="hidden md:flex items-center gap-8">

      <Link
        href="/"
        className={pathname === "/" ? active : inactive}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={pathname === "/about" ? active : inactive}
      >
        About
      </Link>

      <Link
        href="/portfolio"
        className={pathname === "/portfolio" ? active : inactive}
      >
        Portfolio
      </Link>

      <Link
        href="/contact"
        className={pathname === "/contact" ? active : inactive}
      >
        Contact
      </Link>

    </nav>
  )
}