import Link from "next/link";

const desks = [
  {
    title: "Risk heatmap",
    body: "See concentration across regions, chip classes, supplier posture, and exposure without opening five analyst decks.",
  },
  {
    title: "Alert feed",
    body: "Watch policy, logistics, and supplier disruption signals in one queue built for executive triage.",
  },
  {
    title: "Decision memo",
    body: "Turn the current board into a short recommendation the leadership team can actually use in a review.",
  },
];

const exposures = [
  "Lead-time shock",
  "Single-source nodes",
  "Export-control drift",
  "Foundry concentration",
  "Demand pull-forward",
  "Inventory air gap",
];

export default function Home() {
  return (
    <div className="space-y-10 text-slate-100">
      <section className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-[radial-gradient(circle_at_12%_0%,rgba(0,194,178,0.18),transparent_36%),linear-gradient(180deg,#07131a,#041015)] p-8 sm:p-10">
        <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
          Semiconductor command center
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Track shortages, geopolitics, and demand shocks from one control tower.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          SiliconControl Tower organizes semiconductor risk by region, chip class, supplier posture, and exposure so operators can brief leadership from a single surface.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/planner"
            className="rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Launch control tower
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg border border-white/20 px-4 py-2.5 text-sm text-slate-200 hover:bg-white/10"
          >
            View intelligence pricing
          </Link>
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-400">
          Working product shell for planning and briefing. This page does not claim live market feeds, customer counts, or outage statistics.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {desks.map((desk, index) => (
          <article
            key={desk.title}
            className="rounded-2xl border border-cyan-400/15 bg-slate-950/70 p-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
              Desk 0{index + 1}
            </p>
            <h2 className="mt-2 text-lg font-semibold text-white">{desk.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{desk.body}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-amber-400/20 bg-[#0c1014] p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Exposure board</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">The questions the tower is built to hold.</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {exposures.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-400">
          Open the planner to walk the decision surface. Pricing describes the intended intelligence tiers, not a billed production feed.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/planner"
            className="rounded-lg bg-amber-300 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-200"
          >
            Open the planner
          </Link>
          <Link
            href="/how-it-works"
            className="rounded-lg border border-white/20 px-4 py-2.5 text-sm text-slate-200 hover:bg-white/10"
          >
            How it works
          </Link>
        </div>
      </section>
    </div>
  );
}
