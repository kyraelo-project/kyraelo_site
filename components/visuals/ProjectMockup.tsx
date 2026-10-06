import type { Project } from "@/lib/content";

/** Mockups abstraits (formes simples) illustrant chaque type de projet. */
export function ProjectMockup({ type }: { type: Project["visual"] }) {
  return (
    <div aria-hidden className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-muted">
      <div className="bg-dots absolute inset-0" />
      <div className="relative w-[78%] rounded-xl border border-line-strong bg-elev p-3 shadow-soft transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02]">
        {type === "chat" && (
          <div className="space-y-2">
            <span className="block h-5 w-2/3 rounded-lg rounded-bl-sm bg-muted" />
            <span className="ml-auto block h-5 w-1/2 rounded-lg rounded-br-sm bg-accent" />
            <span className="block h-5 w-3/4 rounded-lg rounded-bl-sm bg-muted" />
            <div className="flex gap-1.5 pt-1">
              <span className="h-4 w-12 rounded-full border border-accent/50" />
              <span className="h-4 w-12 rounded-full border border-accent/50" />
            </div>
          </div>
        )}
        {type === "pipeline" && (
          <div className="grid grid-cols-3 gap-2">
            {[3, 2, 1].map((n, c) => (
              <div key={c} className="space-y-1.5 rounded-lg bg-muted p-1.5">
                <span className="block h-1.5 w-2/3 rounded bg-line-strong" />
                {Array.from({ length: n }).map((_, k) => (
                  <span key={k} className={`block h-5 rounded-md border border-line bg-elev ${c === 2 ? "border-accent/50" : ""}`} />
                ))}
              </div>
            ))}
          </div>
        )}
        {type === "dashboard" && (
          <div className="grid grid-cols-[1fr_3fr] gap-2">
            <div className="space-y-1.5 rounded-lg bg-muted p-1.5">
              {[0, 1, 2, 3].map((k) => (
                <span key={k} className={`block h-2 rounded ${k === 1 ? "bg-accent" : "bg-line-strong"}`} />
              ))}
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-1.5">
                {[0, 1, 2].map((k) => (
                  <span key={k} className="block h-6 rounded-md border border-line" />
                ))}
              </div>
              <div className="flex h-14 items-end gap-1 rounded-md border border-line p-1.5">
                {[40, 65, 50, 80, 60, 90, 75].map((h, k) => (
                  <span key={k} style={{ height: `${h}%` }} className="flex-1 rounded-sm bg-accent/70" />
                ))}
              </div>
            </div>
          </div>
        )}
        {type === "shop" && (
          <div className="flex items-center gap-2">
            <div className="grid flex-1 grid-cols-2 gap-1.5">
              {[0, 1, 2, 3].map((k) => (
                <span key={k} className="block aspect-square rounded-md bg-muted" />
              ))}
            </div>
            <span className="flex flex-col items-center">
              <svg width="28" height="10" viewBox="0 0 28 10">
                <line x1="0" y1="5" x2="28" y2="5" className="dash-flow stroke-accent" strokeWidth="1.5" />
              </svg>
            </span>
            <div className="flex-1 space-y-1.5 rounded-lg border border-accent/40 p-1.5">
              {[0, 1, 2, 3].map((k) => (
                <span key={k} className="block h-2 rounded bg-line-strong" />
              ))}
            </div>
          </div>
        )}
        {type === "calendar" && (
          <div>
            <span className="block h-2 w-1/3 rounded bg-line-strong" />
            <div className="mt-2 grid grid-cols-7 gap-1">
              {Array.from({ length: 21 }).map((_, k) => (
                <span key={k} className={`block aspect-square rounded ${k === 10 ? "bg-accent" : "bg-muted"}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
