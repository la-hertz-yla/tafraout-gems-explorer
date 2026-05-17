import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import hero from "@/assets/hero-tafraout.jpg";
import histoireImg from "@/assets/histoire.jpg";
import monumentsImg from "@/assets/monuments.jpg";
import tajineImg from "@/assets/tajine.jpg";
import rochersImg from "@/assets/rochers-peints.jpg";
import amandiersImg from "@/assets/amandiers.jpg";
import panoramaImg from "@/assets/panorama.jpg";
import ahwachImg from "@/assets/ahwach.jpg";
import bijouxImg from "@/assets/bijoux.jpg";
import { ArrowRight, Mountain, Sparkles, UtensilsCrossed } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tafraout — Découvrir la perle de l'Anti-Atlas" },
      { name: "description", content: "Explorez Tafraout : son histoire amazighe, ses monuments emblématiques comme les Rochers Peints, ses traditions, vêtements et sa cuisine berbère." },
      { property: "og:title", content: "Tafraout — Découvrir la perle de l'Anti-Atlas" },
      { property: "og:description", content: "Histoire, monuments, traditions et cuisine de Tafraout." },
    ],
  }),
  component: Home,
});

const sections = [
  {
    to: "/histoire" as const,
    label: "Histoire",
    title: "L'histoire d'une ville de granit rose",
    desc: "Des tribus Ammeln aux caravanes transsahariennes, plongez dans le passé d'une vallée à part.",
    img: histoireImg,
    icon: Sparkles,
  },
  {
    to: "/monuments" as const,
    label: "Monuments & Traditions",
    title: "Rochers peints, agadirs et fêtes amazighes",
    desc: "Découvrez les sites incontournables et les rituels qui font vibrer la vallée.",
    img: monumentsImg,
    icon: Mountain,
  },
  {
    to: "/cuisine" as const,
    label: "Vêtements & Repas",
    title: "Saveurs berbères et tissages d'argent",
    desc: "Tajines, amlou, couscous… et les meilleurs restaurants de la ville pour chaque spécialité.",
    img: tajineImg,
    icon: UtensilsCrossed,
  },
];

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img src={hero} alt="Granit rose et amandiers en fleurs à Tafraout" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl w-full px-5 md:px-8 pb-20 md:pb-28 pt-32">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/95 text-clay text-xs font-semibold tracking-widest uppercase shadow">
            ⵜⴰⴼⵔⴰⵡⵜ · Anti-Atlas
          </p>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-8xl font-semibold text-cream text-balance max-w-4xl leading-[0.95]">
            Explorez <span className="italic text-primary-foreground/95">Tafraout</span>, la vallée du granit rose.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-cream/90 text-balance">
            Entre rochers sculptés par le vent, palmeraies, amandiers en fleurs et villages berbères, laissez-vous porter par une terre où chaque pierre raconte une histoire.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/histoire"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform"
            >
              Commencer l'exploration <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/cuisine"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream/95 text-foreground font-medium hover:bg-cream"
            >
              Goûter la cuisine
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-5 md:px-8 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Bienvenue</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-balance">
          Une oasis sculptée dans la roche, bercée par les amandiers
        </h2>
        <p className="mt-5 text-lg text-muted-foreground text-balance">
          Nichée à 1 200 mètres d'altitude dans le Sud marocain, Tafraout est une petite ville
          de l'Anti-Atlas connue pour ses paysages lunaires, sa culture amazighe vivante et
          la chaleur de ses habitants. Trois portes pour la découvrir :
        </p>
      </section>

      {/* Sections menu */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-24 grid gap-6 md:grid-cols-3">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.to}
              to={s.to}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={s.img} alt="" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-cream/95 text-clay text-xs font-semibold tracking-wider uppercase">
                  {s.label}
                </div>
                <div className="absolute bottom-4 left-4 h-12 w-12 rounded-2xl bg-primary text-primary-foreground grid place-items-center shadow-lg">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold leading-tight">{s.title}</h3>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-primary font-medium">
                  Découvrir <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          );
        })}
      </section>

      {/* Quick facts band */}
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-center">
          {[
            { k: "1 200 m", v: "Altitude" },
            { k: "Février", v: "Festival des amandiers" },
            { k: "Tachelhit", v: "Langue amazighe parlée" },
            { k: "Granit rose", v: "Roche emblématique" },
          ].map((f) => (
            <div key={f.v}>
              <div className="font-display text-3xl md:text-4xl font-semibold">{f.k}</div>
              <div className="mt-1 text-sm uppercase tracking-widest opacity-80">{f.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Image showcase */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Aperçu</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold">Une vallée aux mille visages</h2>
          <p className="mt-4 text-muted-foreground">
            Des rochers peints aux amandiers en fleurs, des bijoux ciselés aux danses ahwach :
            laissez les images parler avant le voyage.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl group aspect-square md:aspect-auto">
            <img src={panoramaImg} alt="Panorama de Tafraout au coucher du soleil" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
              <p className="text-cream font-display text-2xl">La ville rose au coucher du soleil</p>
            </div>
          </div>
          {[
            { src: rochersImg, label: "Rochers Peints" },
            { src: amandiersImg, label: "Amandiers en fleurs" },
            { src: ahwachImg, label: "Danses ahwach" },
            { src: bijouxImg, label: "Bijoux d'argent" },
          ].map((g) => (
            <div key={g.label} className="relative overflow-hidden rounded-3xl group aspect-square">
              <img src={g.src} alt={g.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-cream font-medium text-sm">{g.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical info */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Préparer son voyage</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold">Bon à savoir avant de partir</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Quand partir ?",
                text: "Février-mars pour les amandiers en fleurs et le festival. Octobre-novembre pour la randonnée. Évitez juillet-août (chaleur intense).",
              },
              {
                title: "Comment y aller ?",
                text: "À 2h30 d'Agadir par la route (160 km), traversée spectaculaire de l'Anti-Atlas. Bus quotidiens depuis Agadir, Tiznit et Marrakech.",
              },
              {
                title: "Où dormir ?",
                text: "Riads traditionnels en centre-ville, auberges familiales dans la vallée d'Ammeln, ou bivouac chez l'habitant à Aguerd-Oudad.",
              },
              {
                title: "À ramener",
                text: "Amlou en pot, huile d'argan cosmétique, bijoux en argent et tapis berbères directement chez les coopératives féminines.",
              },
              {
                title: "Langues",
                text: "Tachelhit (langue locale), arabe darija et français très répandu. Quelques mots de tachelhit ouvrent toujours les cœurs.",
              },
              {
                title: "Respect des coutumes",
                text: "Tenue couvrante en dehors des hôtels, demander avant de photographier les personnes, retirer ses chaussures dans les maisons.",
              },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl bg-card border border-border p-6">
                <h3 className="font-display text-xl font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
