import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import img from "@/assets/histoire.jpg";

export const Route = createFileRoute("/histoire")({
  head: () => ({
    meta: [
      { title: "Histoire de Tafraout — Tribus Ammeln & vallée berbère" },
      { name: "description", content: "L'histoire de Tafraout : origines amazighes, tribus Ammeln, commerce caravanier et héritage du Sud marocain." },
      { property: "og:title", content: "Histoire de Tafraout" },
      { property: "og:description", content: "Des origines amazighes au présent : l'histoire de la vallée des Ammeln." },
      { property: "og:image", content: img },
    ],
  }),
  component: Histoire,
});

const timeline = [
  {
    year: "Antiquité",
    title: "Terre amazighe ancestrale",
    text: "La vallée d'Ammeln est habitée depuis des millénaires par les Berbères Chleuhs, parlant le tachelhit. Les villages s'accrochent au pied du Jbel Lekst, montagne sacrée des habitants.",
  },
  {
    year: "Moyen Âge",
    title: "Carrefour caravanier",
    text: "Tafraout devient un point de passage des caravanes transsahariennes reliant Marrakech, Sijilmassa et le Soudan, échangeant or, sel, dattes et amandes.",
  },
  {
    year: "XVIIIᵉ – XIXᵉ siècle",
    title: "L'âge des agadirs",
    text: "Les tribus construisent des greniers fortifiés collectifs (agadirs) dans les hauteurs, témoins d'une organisation tribale autonome où chaque famille avait sa cellule de stockage.",
  },
  {
    year: "XXᵉ siècle",
    title: "Émigration et retour",
    text: "Les hommes de la vallée partent travailler dans les grandes villes du Maroc et en Europe, puis reviennent investir dans leur région, donnant à Tafraout son visage moderne tout en préservant ses traditions.",
  },
  {
    year: "Aujourd'hui",
    title: "Destination culturelle",
    text: "Tafraout vit au rythme du Festival des Amandiers en février, attire grimpeurs, randonneurs et amateurs d'art berbère, sans jamais perdre son identité.",
  },
];

function Histoire() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Histoire"
        title="La vallée d'Ammeln, mémoire vivante du Sud marocain"
        subtitle="Une terre berbère où chaque village, chaque pierre, chaque grenier raconte des siècles de résilience et d'art de vivre."
        image={img}
      />

      <section className="mx-auto max-w-4xl px-5 md:px-8 py-16">
        <p className="text-lg leading-relaxed text-foreground/90">
          Tafraout, dont le nom signifie <em>« bassin »</em> en tachelhit, est nichée au cœur
          de la vallée des Ammeln, dans la province de Tiznit. Entourée de pitons de granit
          rose qui rougeoient au coucher du soleil, la ville a longtemps été le centre
          commercial et spirituel d'une vingtaine de villages berbères perchés sur les flancs
          du Jbel Lekst.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-5 md:px-8 pb-20">
        <div className="relative border-l-2 border-primary/30 pl-8 space-y-10">
          {timeline.map((t) => (
            <div key={t.year} className="relative">
              <span className="absolute -left-[42px] top-1 h-5 w-5 rounded-full bg-primary ring-4 ring-background shadow" />
              <div className="text-sm font-semibold uppercase tracking-widest text-primary">{t.year}</div>
              <h3 className="mt-1 font-display text-2xl md:text-3xl font-semibold">{t.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 md:px-8 pb-20">
        <div className="rounded-3xl overflow-hidden bg-card border border-border grid md:grid-cols-2">
          <img src={img} alt="Vieux village berbère de Tafraout" loading="lazy" className="h-full w-full object-cover" />
          <div className="p-8 md:p-10">
            <h3 className="font-display text-3xl font-semibold">Le saviez-vous ?</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Les habitants de la vallée d'Ammeln sont historiquement réputés pour leur
              esprit entrepreneurial : on les appelle souvent <strong className="text-foreground">« les Soussis »</strong>,
              et ils ont fondé une grande partie des épiceries traditionnelles dans tout
              le Maroc, créant un réseau commercial unique.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
