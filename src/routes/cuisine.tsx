import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import vetements from "@/assets/tamelhaft.jpeg";
import toghrifin from "@/assets/toghrifin.jpeg";
import tafarnout from "@/assets/tafarnout.jpeg";
import tajine from "@/assets/tajine.jpg";
import amlou from "@/assets/amlou.jpg";
import aghroum from "@/assets/aghroum.jpeg";
import couscous from "@/assets/couscous.jpg";
import bijoux from "@/assets/bijoux.jpg";
import baddaz from "@/assets/baddaz.jpeg";
import berkoukes from "@/assets/berkoukes.jpeg";
import bidaouz from "@/assets/bidaouz.jpeg";
import mechoui from "@/assets/mechoui.jpeg";
import boulfaf from "@/assets/boulfaf.jpeg";
import mrouzia from "@/assets/mrouzia.jpeg";
import bissara from "@/assets/bissara.jpeg";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/cuisine")({
  head: () => ({
    meta: [
      { title: "Vêtements & Repas de Tafraout — Cuisine berbère & restaurants" },
      { name: "description", content: "Vêtements traditionnels amazighs et cuisine de Tafraout : amlou, tajine, couscous, et les meilleurs restaurants pour les déguster." },
      { property: "og:title", content: "Vêtements & Repas de Tafraout" },
      { property: "og:description", content: "Tenues amazighes, plats berbères et adresses gourmandes." },
      { property: "og:image", content: tajine },
    ],
  }),
  component: Cuisine,
});

const vetementsItems = [
  {
    title: "Tamelhaft & Akhnif",
    text: "La tamelhaft est une longue pièce de tissu drapée, souvent noire à liserés colorés, portée par les femmes amazighes du Sud. L'akhnif, manteau de laine à grand œil rouge, protège les hommes du froid des montagnes.",
  },
  {
    title: "Bijoux d'argent berbères",
    text: "Fibules (tizerzai), colliers de pièces, bracelets gravés de symboles protecteurs, diadèmes (taounza) : l'argent ciselé est un véritable patrimoine transmis de mère en fille. Chaque pièce porte des motifs protecteurs contre le mauvais œil.",
  },
  {
    title: "Babouches & belghas",
    text: "Les babouches en cuir tanné à la main, souvent jaunes ou bordeaux, complètent la tenue traditionnelle pour les jours de fête.",
  },
  {
    title: "Tapis et tissages d'Ammeln",
    text: "Les femmes de la vallée tissent des tapis aux motifs géométriques rouges, noirs et écrus — chaque symbole raconte une histoire familiale.",
  },
  {
    title: "Henné & parures de mariage",
    text: "Avant les noces, la mariée reçoit le henné sur les mains et les pieds dans des motifs géométriques amazighes. Une cérémonie féminine accompagnée de chants et de youyous, qui peut durer toute une nuit.",
  },
  {
    title: "Djellaba & selham",
    text: "Pour les hommes, la djellaba blanche en hiver, beige en été, accompagnée du selham (cape à capuche) lors des grandes occasions. Les jeunes mariés portent souvent une djellaba brodée de fil d'or.",
  },
];

const plats = [
  {
    name: "Amlou",
    img: amlou,
    desc: "Pâte onctueuse à base d'amandes grillées, d'huile d'argan et de miel. C'est LA spécialité de Tafraout, servie au petit-déjeuner avec du pain chaud ou des crêpes msemen. Un trésor liquide aux saveurs de noisette et de soleil.",
    restaurants: [
      { name: "Café Atlas", info: "Centre-ville — la version maison la plus réputée, servie avec msemen tout juste sortis du feu." },
      { name: "Restaurant L'Étoile d'Agadir", info: "Plateau berbère complet où l'amlou est servi avec amandes entières, miel d'acacia et huile d'argan locale." },
      { name: "Coopérative Tifawine", info: "Coopérative féminine de la vallée d'Ammeln — dégustation et achat direct producteur." },
    ],
  },
  {
    name: "Tajine berbère aux amandes",
    img: tajine,
    desc: "Tajine d'agneau ou de poulet mijoté lentement avec pruneaux, amandes effilées, oignons confits, cannelle et miel. Le plat de fête par excellence à Tafraout, où l'amande locale joue le premier rôle.",
    restaurants: [
      { name: "Restaurant Marrakech", info: "Place principale — tajine d'agneau aux amandes considéré comme le meilleur de la ville depuis trente ans." },
      { name: "L'Arganier", info: "Cuisine soignée, tajines au feu de bois servis dans des plats en terre cuite traditionnels." },
      { name: "Restaurant Tanger", info: "Adresse populaire et familiale, portions généreuses et prix doux." },
    ],
  },
  {
    name: "Seksu (Couscous) du vendredi",
    img: couscous,
    desc: "Appelé seksu en tachelhit, le couscous aux sept légumes servi tous les vendredis midi est un rituel sacré. Semoule roulée à la main, bouillon parfumé au safran et au gingembre, agneau fondant et légumes de saison (courge, navets, carottes, courgettes, chou, oignons, pois chiches) issus des terrasses de la vallée.",
    restaurants: [
      { name: "Restaurant La Kasbah", info: "Couscous géant servi le vendredi sur une grande table commune — ambiance conviviale garantie." },
      { name: "Chez Sabir", info: "Petite adresse où le couscous est préparé par la patronne selon la recette familiale ammelnie." },
      { name: "Hôtel Les Amandiers", info: "Buffet vendredi avec couscous royal et vue panoramique sur les pitons rouges." },
    ],
  },
  {
    name: "Bidaouz — Couscous d'orge à l'argan",
    img: bidaouz,
    desc: "Spécialité ancestrale du Souss : seksu n tumzin, couscous d'orge concassée servi avec du lait fermenté (lben) ou simplement arrosé d'huile d'argan. Plat d'hiver chaleureux qui fait la fierté des familles ammelnies. On le mange dans un grand plat commun, à la main droite.",
    restaurants: [
      { name: "Auberge Chez Amaliya", info: "Bidaouz préparé à la demande, accompagné de lben de la ferme voisine." },
      { name: "Coopérative Toudarte", info: "Atelier-dégustation : on vous montre comment rouler l'orge avant de partager le plat." },
    ],
  },
  {
    name: "Tikourbabine — Berkoukes",
    img: berkoukes,
    desc: "Gros couscous (boulettes de semoule de la taille d'un petit pois) mijoté dans un bouillon de tomate, légumes, viande séchée (lkhli) et pois chiches. Plat d'hiver typique des montagnes du Sud, copieux et parfumé au cumin, ras el hanout et coriandre.",
    restaurants: [
      { name: "Chez Sabir", info: "Tikourbabine maison servi le mardi et le jeudi soir." },
      { name: "Restaurant Tanger", info: "Version généreuse au khli, parfaite pour les soirées fraîches." },
    ],
  },
  {
    name: "Baddaz — Couscous de maïs",
    img: baddaz,
    desc: "Couscous à base de semoule de maïs jaune, servi avec un tajine de légumes, d'huile d'argan et parfois de viande de chèvre. Plat des familles paysannes de la vallée, longtemps réservé aux récoltes, aujourd'hui retrouvé sur les tables des fêtes.",
    restaurants: [
      { name: "Maison d'hôtes Tigmi", info: "Baddaz traditionnel servi le dimanche midi sur réservation." },
    ],
  },
  {
    name: "Tagoula & Aghroum",
    img: aghroum,
    desc: "La tagoula (parfois écrite tagulla) est une bouillie épaisse d'orge ou de maïs, servie le matin dans un plat commun avec un puits central rempli d'huile d'argan et de miel. L'aghroum est le pain berbère, cuit sous la cendre ou dans le tafarnout (four en terre creusé dans le sol), dense et parfumé, compagnon de tous les repas.",
    restaurants: [
      { name: "Café Le Souss", info: "Tagoula matinale servie traditionnellement dans un bol commun." },
      { name: "Maisons d'hôtes de la vallée d'Ammeln", info: "Plusieurs riads servent l'aghroum cuit le matin même au feu de bois." },
    ],
  },
  {
    name: " Toghrifin — Msemen",
    img: toghrifin,
    desc: "Crêpes berbères ajourées, légères et spongieuses, cuites sur une plaque en argile. Servies au petit-déjeuner avec du beurre fondu (oudi) et du miel d'amandiers, ou avec l'amlou. Chaque famille a sa recette transmise oralement.",
    restaurants: [
      { name: "Café Atlas", info: "Toghrifin servies tièdes avec miel de jujubier et beurre de chèvre." },
      { name: "Riad Tafraout", info: "Buffet du matin avec choix de pâtes à tartiner locales : amlou, miel, beurre fermier." },
    ],
  },
  {
    name: "Tafarnout — Pain au four de terre",
    img: tafarnout,
    desc: "Galette de blé épaisse cuite contre les parois d'un four cylindrique en argile chauffé au bois (tafarnout, sœur du tandoor). Cuite en quelques minutes, elle développe une croûte fumée unique. C'est le pain des grandes occasions et des marchés.",
    restaurants: [
      { name: "Coopérative féminine d'Oumesnat", info: "Démonstration de cuisson tafarnout chaque mercredi matin." },
    ],
  },
  {
    name: "Méchoui d'agneau & Tanjia",
    img: mechoui,
    desc: "Pour les grandes occasions, l'agneau est rôti entier dans un four creusé dans la terre (méchoui), ou mijoté pendant des heures dans une jarre de terre cuite scellée et enfouie sous les braises (tanjia). Une cuisine de patience qui marque les mariages, les naissances et les fêtes religieuses.",
    restaurants: [
      { name: "Restaurant L'Arganier", info: "Méchoui sur réservation, accompagné de cumin, de pain berbère et de salade marocaine." },
      { name: "Auberge Chez Amaliya", info: "Tanjia traditionnelle préparée dans le four à pain communal de la vallée." },
    ],
  },
  {
    name: "Tahricht / Boulfaf — Brochettes de foie",
    img: boulfaf,
    desc: "Morceaux de foie d'agneau enroulés dans la crépine (la fine membrane qui entoure les viscères), épicés au cumin et au paprika, grillés sur la braise. Plat emblématique de l'Aïd al-Adha, dégusté en famille dès que les premiers morceaux sortent du barbecue.",
    restaurants: [
      { name: "Grillades du Souk", info: "Petites échoppes de la place du marché — boulfaf grillés à la commande chaque après-midi." },
      { name: "Restaurant Marrakech", info: "Tahricht servi en entrée chaude avec pain berbère et thé." },
    ],
  },
  {
    name: "Mrouzia — Tajine sucré aux amandes",
    img: mrouzia,
    desc: "Tajine d'agneau confit avec miel, amandes entières, raisins secs, cannelle et ras el hanout. Préparé pour conserver la viande après l'Aïd, il se déguste au fil des jours, encore meilleur réchauffé. Saveur sucrée-salée intense, très ancrée dans la tradition amazighe du Sud.",
    restaurants: [
      { name: "L'Arganier", info: "Mrouzia maison sur réservation, idéal pour les groupes." },
      { name: "Restaurant La Kasbah", info: "Version traditionnelle aux amandes de la vallée." },
    ],
  },
  {
    name: "Bissara à l'huile d'argan",
    img: bissara,
    desc: "Soupe épaisse de fèves cassées ou de pois cassés, parfumée à l'ail, au cumin et au paprika, arrosée d'un filet d'huile d'argan en fin de cuisson. Petit-déjeuner d'hiver des paysans de la vallée, qui réchauffe avant le travail dans les amandiers.",
    restaurants: [
      { name: "Café Le Souss", info: "Bissara servie chaque matin dès 7h, avec pain berbère et thé." },
      { name: "Échoppes du souk du mercredi", info: "Plusieurs petits stands proposent la bissara du jour aux maraîchers." },
    ],
  },
];

const restos = [
  { name: "Restaurant Marrakech", spec: "Tajines et couscous", area: "Place centrale" },
  { name: "L'Arganier", spec: "Cuisine berbère raffinée, méchoui", area: "Route d'Agadir" },
  { name: "Café Atlas", spec: "Petit-déjeuner berbère, amlou", area: "Centre-ville" },
  { name: "Restaurant La Kasbah", spec: "Couscous du vendredi", area: "Quartier nord" },
  { name: "Hôtel Les Amandiers", spec: "Buffet panoramique", area: "Hauteurs de la ville" },
  { name: "Chez Sabir", spec: "Cuisine maison ammelnie", area: "Aguerd-Oudad" },
  { name: "Café Le Souss", spec: "Tagoula et aghroum", area: "Souk" },
  { name: "Restaurant Tanger", spec: "Cuisine populaire, tajines", area: "Rue principale" },
];

function Cuisine() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Vêtements & Repas"
        title="L'élégance amazighe et les saveurs de la vallée"
        subtitle="Du tissage de l'argent aux parfums d'amande et d'argan : tout ce qui se porte et se savoure à Tafraout."
        image={tajine}
      />

      {/* Vêtements */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
          <div className="rounded-3xl overflow-hidden shadow-xl order-2 md:order-1">
            <img src={vetements} alt="Vêtements traditionnels amazighs" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Vêtements traditionnels</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold">Tisser, broder, parer</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Les habits de Tafraout racontent l'identité d'une vallée : laine épaisse pour
              l'hiver, étoffes brodées pour les fêtes, et toujours l'argent ciselé comme
              signature.
            </p>
            <div className="mt-8 space-y-4">
              {vetementsItems.map((v) => (
                <div key={v.title} className="rounded-2xl bg-card border border-border p-5">
                  <h3 className="font-display text-lg font-semibold text-primary">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bijoux focus */}
      <section className="bg-foreground text-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/80 font-semibold">Argent ciselé</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold">L'art des bijoutiers d'Ida Ou Nadif</h2>
            <p className="mt-4 text-cream/80 leading-relaxed">
              Depuis des siècles, les bijoutiers de la région d'Ida Ou Nadif, à quelques
              kilomètres de Tafraout, façonnent l'argent au marteau et au burin. Fibules
              triangulaires, pendentifs « main de Fatma », colliers à grosses perles
              d'ambre et de corail : chaque pièce raconte un statut, une famille, une
              région. La transmission se fait toujours de maître à apprenti, dans de
              petits ateliers de quartier.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src={bijoux} alt="Bijoux berbères en argent ciselé" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Plats */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">À table</p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold">Les saveurs de Tafraout</h2>
            <p className="mt-4 text-muted-foreground">
              Pour chaque plat emblématique, retrouvez les meilleures adresses de la ville
              pour le déguster.
            </p>
          </div>

          <div className="space-y-12">
            {plats.map((p, i) => (
              <article key={p.name} className="grid gap-8 md:grid-cols-2 items-center bg-card rounded-3xl overflow-hidden border border-border shadow-sm">
                <div className={`h-72 md:h-full ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="font-display text-3xl md:text-4xl font-semibold text-primary">{p.name}</h3>
                  <p className="mt-3 text-foreground/85 leading-relaxed">{p.desc}</p>
                  <div className="mt-6">
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
                      <MapPin className="h-4 w-4" /> Où le déguster à Tafraout
                    </div>
                    <ul className="mt-3 space-y-3">
                      {p.restaurants.map((r) => (
                        <li key={r.name} className="rounded-xl bg-secondary/60 p-4">
                          <div className="font-semibold text-foreground">{r.name}</div>
                          <div className="text-sm text-muted-foreground mt-0.5">{r.info}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Carnet d'adresses */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">Carnet d'adresses</p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold">Les bonnes tables de Tafraout</h2>
          <p className="mt-4 text-muted-foreground">
            Un récapitulatif rapide des restaurants, cafés et auberges où vivre une vraie
            expérience culinaire dans la vallée.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {restos.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border bg-card p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-semibold">
                <MapPin className="h-3 w-3" /> {r.area}
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold">{r.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{r.spec}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
