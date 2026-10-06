/** Maquette de navigateur abstraite (aucune capture réelle). */
export function BrowserMockup() {
  return (
    <div aria-hidden className="overflow-hidden rounded-2xl border border-line-strong bg-elev shadow-soft">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="ml-3 h-5 flex-1 rounded-md bg-muted" />
      </div>
      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between">
          <span className="h-3 w-20 rounded bg-ink/80" />
          <div className="flex gap-2">
            <span className="h-2 w-10 rounded bg-line-strong" />
            <span className="h-2 w-10 rounded bg-line-strong" />
            <span className="h-5 w-16 rounded-full bg-accent" />
          </div>
        </div>
        <div className="space-y-2 pt-4">
          <span className="block h-5 w-4/5 rounded bg-ink/80" />
          <span className="block h-5 w-3/5 rounded bg-ink/80" />
          <span className="mt-3 block h-2.5 w-2/3 rounded bg-line-strong" />
        </div>
        <div className="grid grid-cols-3 gap-3 pt-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-2 rounded-xl border border-line p-3">
              <span className="block aspect-[4/3] rounded-lg bg-muted" />
              <span className="block h-2 w-3/4 rounded bg-line-strong" />
              <span className="block h-2 w-1/2 rounded bg-accent/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
