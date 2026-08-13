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
    <main className="flex h-screen flex-col gap-4 overflow-hidden bg-background p-4 sm:p-6">
      <header className="shrink-0 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Paints</p>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Retail Product Pack
        </h1>
        <p className="text-xs text-muted-foreground">Select a system to open its demo</p>
      </header>

      <section className="grid min-h-0 flex-1 grid-cols-2 grid-rows-3 gap-3 sm:grid-cols-3 sm:grid-rows-2 sm:gap-4">
        {systems.map((s) => {
          const inner = (
            <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all group-hover:border-primary/40 group-hover:shadow-md">
              <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-muted">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={`${s.title} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-center text-[10px] uppercase tracking-widest text-muted-foreground">
                    Preview coming soon
                  </span>
                )}
              </div>
              <div className="flex shrink-0 flex-col gap-1 p-3">
                <h2 className="line-clamp-2 text-sm font-semibold leading-tight text-card-foreground">
                  {s.title}
                </h2>
                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                  {s.description}
                </p>
                {s.link && (
                  <span className="mt-1 text-xs font-medium text-primary">Open demo →</span>
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
              className="group block min-h-0"
            >
              {inner}
            </a>
          ) : (
            <div key={s.title} className="group min-h-0 cursor-default opacity-60">
              {inner}
            </div>
          );
        })}
      </section>
    </main>
  );
}
