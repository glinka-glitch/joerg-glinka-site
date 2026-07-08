"use client"

import { useState } from "react"
import Link from "next/link"
import {
  categories,
  getMaturityBand,
  getQuickWin,
} from "@/lib/kiReadinessQuestions"

const MAX_SCORE_PER_QUESTION = 4
const QUESTIONS_PER_CATEGORY = 2
const MAX_CATEGORY_SCORE = MAX_SCORE_PER_QUESTION * QUESTIONS_PER_CATEGORY

export default function KiReadinessCheck() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})

  const totalSteps = categories.length
  const isResultsStep = step === totalSteps

  function selectAnswer(questionId: string, score: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: score }))
  }

  function restart() {
    setAnswers({})
    setStep(0)
  }

  if (isResultsStep) {
    const maxTotalScore = totalSteps * MAX_CATEGORY_SCORE

    const totalScore = categories.reduce((sum, category) => {
      return (
        sum +
        category.questions.reduce(
          (qSum, q) => qSum + (answers[q.id] ?? 0),
          0
        )
      )
    }, 0)

    const overallPercent = Math.round((totalScore / maxTotalScore) * 100)
    const band = getMaturityBand(overallPercent)

    const categoryResults = categories.map((category) => {
      const categoryScore = category.questions.reduce(
        (sum, q) => sum + (answers[q.id] ?? 0),
        0
      )
      const percent = Math.round((categoryScore / MAX_CATEGORY_SCORE) * 100)
      return { id: category.id, label: category.label, percent }
    })

    const weakestCategory = categoryResults.reduce((weakest, current) =>
      current.percent < weakest.percent ? current : weakest
    )

    return (
      <div className="editorial-card bg-zinc-900 border border-white/10 rounded-[2rem] p-6 md:p-10">
        <div className="inline-block bg-cyan-400 text-black px-4 py-2 font-black uppercase tracking-wide rotate-[-2deg] mb-6">
          {band.label}
        </div>

        <div className="text-5xl md:text-7xl font-black text-white">
          {overallPercent}%
        </div>

        <p className="mt-4 type-body max-w-2xl">
          {band.description}
        </p>

        <div className="mt-10 md:mt-12 flex flex-col gap-5">
          {categoryResults.map((result) => (
            <div key={result.id}>
              <div className="flex items-center justify-between mb-2">
                <span className="type-label !text-zinc-300">
                  {result.label}
                </span>
                <span className="type-label !text-cyan-400">
                  {result.percent}%
                </span>
              </div>

              <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-cyan-400"
                  style={{ width: `${result.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 md:p-8">
          <p className="type-label !text-cyan-400 mb-3">
            Ihre größte Chance
          </p>

          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            {getQuickWin(weakestCategory.id)}
          </p>
        </div>

        <div className="mt-10 md:mt-12 pt-10 border-t border-white/10">
          <p className="type-body max-w-2xl">
            Diese Einschätzung zeigt einen Ausschnitt meiner Arbeitsweise als KI-Manager. Lassen Sie uns über Ihre Situation sprechen.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex btn-primary justify-center">
              Gespräch vereinbaren
            </Link>

            <button
              type="button"
              onClick={restart}
              className="btn-ghost"
            >
              Nochmal starten
            </button>
          </div>
        </div>
      </div>
    )
  }

  const category = categories[step]
  const isStepComplete = category.questions.every((q) => answers[q.id] !== undefined)

  return (
    <div className="editorial-card bg-zinc-900 border border-white/10 rounded-[2rem] p-6 md:p-10">
      <div className="flex items-center justify-between mb-3">
        <span className="type-label !text-zinc-400">
          Schritt {step + 1} von {totalSteps}
        </span>

        <span className="type-label !text-cyan-400">
          {category.label}
        </span>
      </div>

      <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden mb-10">
        <div
          className="h-full rounded-full bg-cyan-400 transition-all duration-300"
          style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
        />
      </div>

      <div className="flex flex-col gap-10">
        {category.questions.map((question) => (
          <div key={question.id}>
            <h3 className="type-h3 mb-5">
              {question.text}
            </h3>

            <div className="grid sm:grid-cols-2 gap-3">
              {question.answers.map((answer) => {
                const selected = answers[question.id] === answer.score

                return (
                  <button
                    key={answer.text}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => selectAnswer(question.id, answer.score)}
                    className={`text-left px-5 py-4 rounded-2xl border transition ${
                      selected
                        ? "bg-white text-black border-white"
                        : "border-white/10 text-zinc-300 hover:border-cyan-400/50"
                    }`}
                  >
                    {answer.text}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className={`btn-ghost ${step === 0 ? "opacity-0 pointer-events-none" : ""}`}
        >
          ← Zurück
        </button>

        <button
          type="button"
          onClick={() => setStep((s) => s + 1)}
          disabled={!isStepComplete}
          className={`btn-secondary ${!isStepComplete ? "opacity-40 pointer-events-none" : ""}`}
        >
          {step === totalSteps - 1 ? "Ergebnis anzeigen" : "Weiter"}
        </button>
      </div>
    </div>
  )
}
