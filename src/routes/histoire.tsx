import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import img from "@/assets/histoire.jpg";
import panoramaImg from "@/assets/panorama.jpg";
import amandiersImg from "@/assets/amandiers.jpg";
import agadirImg from "@/assets/agadir.jpg";

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
    text: "La vallée d'Ammeln est habitée depuis des millénaires par les Berbères Chleuhs, parlant le tachelhit. Les villages s'accrochent au pied du Jbel Lekst, montagne sacrée des habitants. Des gravures rupestres préislamiques découvertes dans les environs témoignent d'une présence humaine continue.",
  },
  {
    year: "Moyen Âge",
    title: "Carrefour caravanier",
    text: "Tafraout devient un point de passage des caravanes transsahariennes reliant Marrakech, Sijilmassa et le Soudan, échangeant or, sel, dattes et amandes. La vallée prospère grâce à ses oasis et à son artisanat de l'argent, déjà réputé dans tout le Maghreb.",
  },
  {
    year: "XVIIIᵉ – XIXᵉ siècle",
    title: "L'âge des agadirs",
    text: "Les tribus construisent des greniers fortifiés collectifs (agadirs) dans les hauteurs, témoins d'une organisation tribale autonome où chaque famille avait sa cellule de stockage. La jamaâ, assemblée des chefs de famille, régit la vie sociale, l'eau et la justice selon l'azref, le droit coutumier amazigh.",
  },
  {
    year: "Début XXᵉ siècle",
    title: "Résistance et protectorat",
    text: "La région résiste longtemps à la colonisation française : ce n'est qu'en 1934 que l'Anti-Atlas est totalement « pacifié ». Tafraout conserve néanmoins son autonomie culturelle et linguistique pendant tout le protectorat.",
  },
  {
    year: "XXᵉ siècle",
    title: "Émigration et retour",
    text: "Les hommes de la vallée partent travailler dans les grandes villes du Maroc et en Europe, puis reviennent investir dans leur région : maisons en pierre rose, écoles, mosquées, routes. Une diaspora soudée qui finance encore aujourd'hui le développement local.",
  },
  {
    year: "Aujourd'hui",
    title: "Destination culturelle",
    text: "Tafraout vit au rythme du Festival des Amandiers en février, attire grimpeurs, randonneurs et amateurs d'art berbère du monde entier, sans jamais perdre son identité. Coopératives féminines d'huile d'argan et d'amlou font rayonner les saveurs de la vallée bien au-delà du Maroc.",
  },
];

const figures = [
  { k: "26", v: "villages dans la vallée d'Ammeln" },
  { k: "1934", v: "intégration au Maroc moderne" },
  { k: "2 359 m", v: "altitude du Jbel Lekst" },
  { k: "± 5 000", v: "habitants à Tafraout-ville" },
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
        <p className="mt-5 text-lg leading-relaxed text-foreground/90">
          Cette terre est le berceau des <strong>Soussis</strong>, ces commerçants berbères
          dont les épiceries quadrillent aujourd'hui tout le Maroc et une partie de l'Europe.
          Mais derrière la modernité, la vallée a préservé sa langue (le tachelhit), son
          architecture de pisé rose, ses tatouages, ses chants ahwach et sa cuisine à base
          d'amandes et d'huile d'argan, deux trésors locaux reconnus mondialement.
        </p>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-center">
          {figures.map((f) => (
            <div key={f.v}>
              <div className="font-display text-3xl md:text-4xl font-semibold text-primary">{f.k}</div>
              <div className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">{f.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16">
        <div className="rounded-3xl overflow-hidden">
          <img src={panoramaImg} alt="Vue aérienne de Tafraout au coucher du soleil" loading="lazy" className="w-full h-[420px] object-cover" />
        </div>
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
          <img src={agadirImg} alt="Vieux village berbère de Tafraout" loading="lazy" className="h-full w-full object-cover" />
          <div className="p-8 md:p-10">
            <h3 className="font-display text-3xl font-semibold">Le saviez-vous ?</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Les habitants de la vallée d'Ammeln sont historiquement réputés pour leur
              esprit entrepreneurial : on les appelle souvent <strong className="text-foreground">« les Soussis »</strong>,
              et ils ont fondé une grande partie des épiceries traditionnelles dans tout
              le Maroc, créant un réseau commercial unique.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cet esprit migrateur a tissé une diaspora active depuis Casablanca jusqu'à
              Paris, qui revient chaque été dans la vallée pour les fêtes familiales,
              maintenant vivante une culture millénaire.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 md:px-8 pb-24">
        <div className="rounded-3xl overflow-hidden bg-card border border-border grid md:grid-cols-2">
          <div className="p-8 md:p-10 order-2 md:order-1">
            <h3 className="font-display text-3xl font-semibold">Langue & identité</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              À Tafraout, on parle d'abord le <strong className="text-foreground">tachelhit</strong>,
              variante du tamazight pratiquée par près de 8 millions de personnes au sud du
              Maroc. L'alphabet tifinagh, ancien de plus de 2 500 ans, est aujourd'hui
              enseigné à l'école et orne les enseignes officielles.
            </p>
            <p className="mt-4 text-2xl font-display text-primary">ⵜⴰⴼⵔⴰⵡⵜ</p>
            <p className="mt-1 text-sm text-muted-foreground">« Tafraout » en tifinagh</p>
          </div>
          <img src={amandiersImg} alt="Amandiers en fleurs dans la vallée" loading="lazy" className="h-full w-full object-cover order-1 md:order-2" />
        </div>
      </section>
    </PageShell>
  );
}
