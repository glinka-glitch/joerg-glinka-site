"use client"

import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import Link from "next/link"

const COOKIE_NAME = "glinka_cookie_consent"
const COOKIE_EXPIRES_DAYS = 180

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Cookie is only readable client-side; checking here (instead of a lazy
    // initializer) keeps the server-rendered and first client render both
    // "hidden", avoiding a hydration mismatch.
    if (!Cookies.get(COOKIE_NAME)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true)
    }
  }, [])

  if (!visible) return null

  function handleAccept() {
    Cookies.set(COOKIE_NAME, "true", { expires: COOKIE_EXPIRES_DAYS })
    setVisible(false)
    window.dispatchEvent(new CustomEvent("cookie-consent-accepted"))
  }

  function handleDecline() {
    Cookies.set(COOKIE_NAME, "false", { expires: COOKIE_EXPIRES_DAYS })
    setVisible(false)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-white/10 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <p className="flex-1 text-sm leading-relaxed text-zinc-300 m-0">
          Diese Website verwendet Cookies und externe Dienste zur
          Bereitstellung von Funktionen. Weitere Informationen finden Sie in der{" "}
          <Link
            href="/datenschutz"
            className="text-cyan-400 hover:text-cyan-300 underline"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>

        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={handleDecline}
            className="rounded-full px-[18px] py-[10px] font-bold bg-zinc-900 text-white border border-white/10"
          >
            Ablehnen
          </button>

          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full px-[18px] py-[10px] font-bold bg-yellow-400 text-black"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
