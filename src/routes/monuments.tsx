import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import img from "@/assets/monuments.jpg";
import traditionsImg from "@/assets/traditions.jpg";
import histoireImg from "@/assets/histoire.jpg";

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
    desc: "À quelques kilomètres de Tafraout, l'artiste belge Jean Vérame a peint en 1984 d'immenses blocs de granit en bleu, rouge et violet. Une œuvre d'art à ciel ouvert devenue iconique.",
    img: img,
  },
  {
    title: "Le Chapeau de Napoléon",
    desc: "Rocher naturel en forme de bicorne dominant le village d'Aguerd-Oudad. Spot favori au coucher du soleil quand la roche s'embrase de rose orangé.",
    img: histoireImg,
  },
  {
    title: "Les agadirs (greniers collectifs)",
    desc: "Greniers fortifiés berbères perchés sur les falaises. L'Agadir d'Oumesnat et celui d'Id Aïssa témoignent de l'organisation tribale de la vallée.",
    img: histoireImg,
  },
  {
    title: "La vallée des Ammeln",
    desc: "26 villages roses accrochés au pied du Jbel Lekst (2 359 m), entourés de palmeraies et de terrasses d'amandiers. Un balcon naturel sur l'Anti-Atlas.",
    img: img,
  },
];

const traditions = [
  {
    title: "Festival des Amandiers",
    text: "Chaque février, lorsque les amandiers blanchissent la vallée, Tafraout célèbre la récolte avec musiques ahwach, danses, contes et marchés artisanaux.",
  },
  {
    title: "Ahwach & Ahidous",
    text: "Danses collectives mixtes accompagnées de bendirs (tambours plats). Hommes et femmes forment des cercles et chantent en tachelhit jusqu'à tard dans la nuit.",
  },
  {
    title: "Tatouages et symboles amazighs",
    text: "Le triangle, le losange, le « œil de perdrix »… autant de symboles berbères que l'on retrouve tatoués sur les visages des anciennes, et tissés dans les tapis.",
  },
  {
    title: "Tiwizi — l'entraide villageoise",
    text: "Tradition millénaire d'entraide : les villageois se rassemblent pour bâtir une maison, récolter les amandes ou réparer un canal d'irrigation.",
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
              <img src={traditionsImg} alt="Femmes amazighes en habits traditionnels" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Traditions</p>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold">L'âme amazighe de la vallée</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                À Tafraout, la culture se vit au quotidien : dans les chants, l'artisanat,
                l'hospitalité et les fêtes saisonnières rythmées par les amandiers.
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
    </PageShell>
  );
}
