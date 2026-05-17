import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import img from "@/assets/monuments.jpg";
import traditionsImg from "@/assets/traditions.jpg";
import histoireImg from "@/assets/histoire.jpg";
import rochersImg from "@/assets/rochers-peints.jpg";
import chapeauImg from "@/assets/chapeau-napoleon.jpg";
import agadirImg from "@/assets/agadir.jpg";
import amandiersImg from "@/assets/amandiers.jpg";
import ahwachImg from "@/assets/ahwach.jpg";

export const Route = createFileRoute("/monuments")({
  head: () => ({
    meta: [
      { title: "Monuments & Traditions de Tafraout" },
      { name: "description", content: "Rochers peints, Chapeau de Napoléon, agadirs et festival des amandiers : monuments et traditions de Tafraout." },
      { property: "og:title", content: "Monuments & Traditions de Tafraout" },
      { property: "og:description", content: "Les sites emblématiques et rituels amazighes de la vallée." },
      { property: "og:image", content: img },
    ],
  }),
  component: Monuments,
});

const monuments = [
  {
    title: "Les Rochers Peints",
    desc: "À 3 km au sud de Tafraout, près du village d'Aguerd-Oudad, l'artiste belge Jean Vérame a peint en 1984 d'immenses blocs de granit en bleu, rouge et violet, aidé de pompiers et de 18 tonnes de peinture. Quarante ans plus tard, les couleurs se sont patinées par le soleil et le vent, donnant à l'œuvre une dimension presque mystique. Accessible à pied ou en 4x4, le site se visite idéalement en fin d'après-midi.",
    img: rochersImg,
  },
  {
    title: "Le Chapeau de Napoléon",
    desc: "Rocher naturel en forme de bicorne dominant le village d'Aguerd-Oudad. Cette silhouette improbable, sculptée par l'érosion, est devenue le symbole de Tafraout. Le spot est idéal au coucher du soleil, quand la roche s'embrase de rose orangé et que les ombres s'allongent sur la palmeraie en contrebas.",
    img: chapeauImg,
  },
  {
    title: "Les agadirs (greniers collectifs)",
    desc: "Greniers fortifiés berbères perchés sur les falaises, certains datent du XIIIᵉ siècle. L'Agadir d'Id Aïssa et celui d'Oumesnat, transformé en musée vivant par un habitant aveugle, témoignent d'une organisation tribale unique : chaque famille y conservait grain, huile, documents et bijoux dans une cellule scellée, protégée par un gardien désigné par la jamaâ (assemblée).",
    img: agadirImg,
  },
  {
    title: "La vallée des Ammeln",
    desc: "26 villages roses accrochés au pied du Jbel Lekst (2 359 m), entourés de palmeraies et de terrasses d'amandiers. Un balcon naturel sur l'Anti-Atlas, où chaque village (Oumesnat, Tagdicht, Tirnmatmat…) conserve son agadir, sa mosquée et ses sources. La traversée à pied est l'une des plus belles randonnées du Sud marocain.",
    img: amandiersImg,
  },
  {
    title: "La Maison Berbère d'Oumesnat",
    desc: "Petit musée familial installé dans une authentique maison de la vallée. On y découvre les ustensiles du quotidien, les bijoux d'argent, le métier à tisser et les techniques de construction en pisé. Le guide, descendant des bâtisseurs, raconte la vie d'autrefois avec humour et émotion.",
    img: img,
  },
  {
    title: "Le Jbel Lekst",
    desc: "Surnommé « la montagne des lions », ce massif de 2 359 m domine la vallée. Sacré pour les habitants, il offre des panoramas spectaculaires sur l'Anti-Atlas et reste un terrain de jeu prisé des grimpeurs venus du monde entier pour son granit rose unique.",
    img: histoireImg,
  },
];

const traditions = [
  {
    title: "Festival des Amandiers",
    text: "Chaque février depuis 1990, lorsque les amandiers blanchissent la vallée, Tafraout célèbre la récolte pendant trois jours : ahwach, troupes folkloriques venues de tout le Souss, défilés en habits traditionnels, marchés d'artisanat et concours de la plus belle amande.",
  },
  {
    title: "Ahwach & Ahidous",
    text: "Danses collectives mixtes accompagnées de bendirs (tambours plats) et de naqus (gong métallique). Hommes et femmes forment deux lignes face à face et chantent en tachelhit des poèmes improvisés, parfois jusqu'à l'aube, lors des mariages et des fêtes saisonnières.",
  },
  {
    title: "Tatouages et symboles amazighs",
    text: "Le triangle, le losange, le « œil de perdrix », la lettre Yaz (ⵣ) symbole de l'homme libre… ces motifs ancestraux ornent les visages des anciennes (tatouages au henné ou à l'encre), les tapis, les portes de bois et les bijoux d'argent.",
  },
  {
    title: "Tiwizi — l'entraide villageoise",
    text: "Tradition millénaire d'entraide : les villageois se rassemblent gratuitement pour bâtir une maison, récolter les amandes ou réparer une seguia (canal d'irrigation). Un grand repas collectif clôt toujours la journée de travail.",
  },
  {
    title: "Mariages amazighes",
    text: "Cérémonies de trois à sept jours où la mariée, vêtue de la tamelhaft noire et parée de tous les bijoux d'argent de sa famille, est portée en procession. Henné, youyous, ahwach et festins ponctuent chaque étape.",
  },
  {
    title: "Souk hebdomadaire du mercredi",
    text: "Le grand souk de Tafraout, chaque mercredi, rassemble les habitants des 26 villages : amandes, huile d'argan, miel de jujubier, dattes, épices, tapis, poteries et bétail s'y échangent depuis des siècles.",
  },
];

function Monuments() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Monuments & Traditions"
        title="Pierres peintes, greniers perchés et fêtes amazighes"
        subtitle="Un patrimoine vivant entre art contemporain et rituels millénaires."
        image={img}
      />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">À visiter</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold">Monuments emblématiques</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Six sites incontournables qui résument l'âme géologique, artistique et humaine de la vallée.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {monuments.map((m) => (
            <article key={m.title} className="group rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img src={m.img} alt={m.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold">{m.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img src={ahwachImg} alt="Danse ahwach autour du feu" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Traditions</p>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold">L'âme amazighe de la vallée</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                À Tafraout, la culture se vit au quotidien : dans les chants, l'artisanat,
                l'hospitalité et les fêtes saisonnières rythmées par les amandiers. Six
                traditions vivantes qui forgent l'identité de la vallée.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {traditions.map((t) => (
                  <div key={t.title} className="rounded-2xl bg-card p-5 border border-border">
                    <h3 className="font-display text-lg font-semibold text-primary">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Galerie</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold">Tafraout en images</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { src: rochersImg, alt: "Rochers peints de Jean Vérame" },
            { src: chapeauImg, alt: "Le Chapeau de Napoléon au coucher du soleil" },
            { src: agadirImg, alt: "Agadir berbère perché" },
            { src: amandiersImg, alt: "Amandiers en fleurs face au Jbel Lekst" },
            { src: ahwachImg, alt: "Danse ahwach nocturne" },
            { src: traditionsImg, alt: "Tenues amazighes traditionnelles" },
          ].map((g) => (
            <div key={g.alt} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img src={g.src} alt={g.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-cream text-sm font-medium">{g.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
