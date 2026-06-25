"use client"

import Link from "next/link"
import CookieConsent from "react-cookie-consent"

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Akzeptieren"
      declineButtonText="Ablehnen"
      enableDeclineButton
      cookieName="glinka_cookie_consent"
      onAccept={() => {
  window.dispatchEvent(
    new CustomEvent("cookie-consent-accepted")
  )
}}
      expires={180}
      style={{
        background: "#000000",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "16px",
      }}
      contentStyle={{
        margin: 0,
        color: "#d4d4d8",
        fontSize: "14px",
        lineHeight: "1.6",
      }}
      buttonStyle={{
        background: "#c026d3",
        color: "#ffffff",
        borderRadius: "9999px",
        padding: "10px 18px",
        fontWeight: 700,
        border: "none",
      }}
      declineButtonStyle={{
        background: "#18181b",
        color: "#ffffff",
        borderRadius: "9999px",
        padding: "10px 18px",
        fontWeight: 700,
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      Diese Website verwendet Cookies und externe Dienste zur
      Bereitstellung von Funktionen. Weitere Informationen finden Sie in der{" "}
      <Link
        href="/datenschutz"
        className="text-cyan-400 hover:text-cyan-300 underline"
      >
        Datenschutzerklärung
      </Link>.
    </CookieConsent>
  )
}