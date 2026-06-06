const stats = [
  { value: "76%", label: "Lower cloud costs", sub: "Docker + cloud-native re-architecture" },
  { value: "75%", label: "Manual work automated", sub: "Multi-agent reconciliation system" },
  { value: "96%", label: "AI detection accuracy", sub: "Zero-day malware classifier" },
  { value: "99.99%", label: "Production uptime", sub: "Cross-platform SaaS platform" },
];

export default function Stats() {
  return (
    <section aria-label="Impact at a glance" className="mt-10">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <li
            key={s.label}
            className="rounded-lg border border-slate-200/10 bg-slate-800/40 p-4 transition hover:border-blue-300/40 hover:bg-slate-800/70"
          >
            <p className="text-2xl font-bold tracking-tight text-blue-300 sm:text-3xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-200">{s.label}</p>
            <p className="mt-0.5 text-xs leading-snug text-slate-500">{s.sub}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
