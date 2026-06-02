"use client";

import { useState } from "react";

export default function ContactForm() {
  const [startedAt] = useState(Date.now());
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website"),
      startedAt,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      form.reset();
    } else {
      setError(true);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="editorial-card bg-zinc-900 border border-white/10 rounded-[2rem] p-6 md:p-10 space-y-5 md:space-y-6"
    >
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6">
          Anfrage senden
        </p>

        <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em]">
          Lassen Sie uns über Ihr Projekt sprechen.
        </h2>
      </div>

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full bg-black border border-white/10 rounded-2xl px-5 md:px-6 py-4 md:py-5"
      />

      <input
        type="email"
        name="email"
        placeholder="E-Mail"
        required
        className="w-full bg-black border border-white/10 rounded-2xl px-5 md:px-6 py-4 md:py-5"
      />

      <textarea
        name="message"
        placeholder="Ihre Nachricht"
        required
        rows={6}
        className="w-full bg-black border border-white/10 rounded-2xl px-5 md:px-6 py-4 md:py-5 resize-none"
      />

      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="hidden"
      />

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-3 bg-fuchsia-600 hover:bg-fuchsia-500 transition duration-300 px-6 md:px-10 py-4 md:py-5 rounded-full uppercase tracking-wide font-bold w-full sm:w-auto"
      >
        {loading ? "Wird gesendet..." : "Anfrage senden"}
      </button>

     {success && (
  <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-green-300">
    <strong>Vielen Dank für Ihre Anfrage.</strong>
    <br />
    Ich werde mich zeitnah bei Ihnen melden.
  </div>
)}

      {error && (
  <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300">
    Die Nachricht konnte derzeit nicht versendet werden.
    <br />
    Bitte schreiben Sie alternativ direkt an:
    <br />
    <a
      href="mailto:joerg@glinka.tech"
      className="underline"
    >
      joerg@glinka.tech
    </a>
  </div>
)}
    </form>
  );
}



