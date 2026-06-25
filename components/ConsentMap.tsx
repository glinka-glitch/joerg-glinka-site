"use client"

import { useEffect, useState } from "react"
import Cookies from "js-cookie"

export default function ConsentMap() {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const consent = Cookies.get("glinka_cookie_consent")
    setAccepted(consent === "true" || consent === "yes")

    const handleAccept = () => setAccepted(true)
    window.addEventListener("cookie-consent-accepted", handleAccept)
    return () => window.removeEventListener("cookie-consent-accepted", handleAccept)
  }, [])

  if (!accepted) {
    return (
      <div className="bg-zinc-950 border border-white/10 rounded-[2rem] p-8 text-center">
        <h3 className="text-xl font-black uppercase">
          Google Maps
        </h3>

        <p className="mt-4 text-zinc-400 leading-relaxed">
          Die Karte wird erst nach Zustimmung zu externen Diensten geladen.
        </p>

        <p className="mt-3 text-sm text-zinc-500">
          Bitte akzeptieren Sie Cookies, um die Karte anzuzeigen.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
      <iframe
        src="https://maps.google.com/maps?q=51.01701,7.8533303&z=16&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Standort Jörg Glinka – Manfred-Schöne-Straße 12, 57462 Olpe"
      />
    </div>
  )
}