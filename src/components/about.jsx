export default function About() {
  return (
    <section id="about" className="mt-15 flex justify-center flex-col">
      <h2 className="lg:hidden text-2xl font-bold tracking-tight text-white sm:text-3xl">
        About
      </h2>
      <p className="mt-4 leading-normal text-gray-400">
        I'm a software engineer who ships <span className="font-medium text-slate-200">autonomous AI
        agents and cloud-native backends for US enterprises</span> — building from Karachi while
        delivering on US time. I like the hard, measurable problems: making systems reliable at scale,
        teaching them to reason with LLMs, and cutting the cloud bill while I'm at it.
      </p>
      <p className="mt-4 leading-normal text-gray-400">
        Over the last two years I've led distributed teams across the full SDLC for Blue Ocean
        Strategic Partners (Pittsburgh) and Bits Generation, owning everything from high-availability
        REST APIs and Docker deployments to multi-agent RAG pipelines. My edge is delivering
        enterprise-grade work remotely — and proving the impact in numbers, not adjectives.
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-3" aria-label="What I do">
        <li className="rounded-lg border border-slate-200/10 bg-slate-800/30 p-4">
          <h3 className="text-sm font-semibold text-slate-200">Agentic AI</h3>
          <p className="mt-1 text-xs leading-snug text-slate-500">
            Multi-agent systems, RAG, and self-correcting LLM workflows with LangGraph & OpenAI.
          </p>
        </li>
        <li className="rounded-lg border border-slate-200/10 bg-slate-800/30 p-4">
          <h3 className="text-sm font-semibold text-slate-200">Backend at scale</h3>
          <p className="mt-1 text-xs leading-snug text-slate-500">
            Secure, high-availability REST APIs and SaaS platforms in Python &amp; TypeScript.
          </p>
        </li>
        <li className="rounded-lg border border-slate-200/10 bg-slate-800/30 p-4">
          <h3 className="text-sm font-semibold text-slate-200">Cloud &amp; cost</h3>
          <p className="mt-1 text-xs leading-snug text-slate-500">
            Docker/K8s, AWS &amp; Azure architecture tuned to cut spend without losing uptime.
          </p>
        </li>
      </ul>

      <p className="mt-6 leading-normal text-gray-400">
        Away from the keyboard, you'll find me on the futsal court, at the gym, or out for tea with
        friends.
      </p>
    </section>
  );
}
