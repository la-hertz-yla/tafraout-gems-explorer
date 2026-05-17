export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center font-display">ⵜ</span>
            <span className="font-display text-lg font-semibold">Tafraout</span>
          </div>
          <p className="text-muted-foreground max-w-xs">
            Au cœur de l'Anti-Atlas, entre granit rose et amandiers en fleurs.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-foreground">Explorer</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>Histoire & origines</li>
            <li>Monuments & traditions</li>
            <li>Vêtements & cuisine</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-foreground">Bon à savoir</h4>
          <p className="text-muted-foreground">
            Meilleure période : février (festival des amandiers) et octobre.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Découvrir Tafraout — Hommage à la culture amazighe.
      </div>
    </footer>
  );
}
