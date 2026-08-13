import { createFileRoute } from "@tanstack/react-router";
import meImg from "@/assets/image.png.asset.json";
import marketImg from "@/assets/image-2.png.asset.json";
import counsellingImg from "@/assets/image-3.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paints Retail Product Pack — System Demos" },
      {
        name: "description",
        content:
          "Explore the Paints retail product pack: engagement, market discovery, counselling and more system demos in one place.",
      },
      { property: "og:title", content: "Paints Retail Product Pack — System Demos" },
      {
        property: "og:description",
        content:
          "Explore the Paints retail product pack: engagement, market discovery, counselling and more system demos in one place.",
      },
    ],
  }),
  component: Index,
});

type System = {
  title: string;
  description: string;
  image?: string;
  link?: string;
};

const systems: System[] = [
  {
    title: "ME Retailer Engagement System",
    description:
      "MEs use the app with each of their retailer for their day-to-day engagements as part of the field visits",
    image: meImg.url,
    link: "https://paints-retailer-engagement-system.lovable.app/",
  },
  {
    title: "Market Discovery System",
    description:
      "Front-line and market outreach teams use it to discover untapped markets and systematically reach out to them",
    image: marketImg.url,
    link: "https://paints-market-discovery-system.lovable.app/",
  },
  {
    title: "Distributor / Retailer Business Counselling System",
    description:
      "Help businesses unlock their growth potential by identifying and adopting the practices that best fit their aspirations and customer needs",
    image: counsellingImg.url,
    link: "https://bpcl-ro-counsellingtool.lovable.app/",
  },
  { title: "Retailer Best Practices System", description: "Coming soon" },
  { title: "Scalable Coaching System", description: "Coming soon" },
  { title: "Flashpoints Management System", description: "Coming soon" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <header className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Paints</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Retail Product Pack
        </h1>
        <p className="mt-3 text-muted-foreground">Select a system to open its demo</p>
      </header>

      <section className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {systems.map((s) => {
          const inner = (
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-lg">
              <div className="flex aspect-[16/9] items-center justify-center overflow-hidden bg-muted">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={`${s.title} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    Preview coming soon
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h2 className="text-lg font-semibold text-card-foreground">{s.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                {s.link && (
                  <span className="mt-auto pt-4 text-sm font-medium text-primary">Open demo →</span>
                )}
              </div>
            </div>
          );

          return s.link ? (
            <a
              key={s.title}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {inner}
            </a>
          ) : (
            <div key={s.title} className="group cursor-default opacity-60">
              {inner}
            </div>
          );
        })}
      </section>
    </main>
  );
}
