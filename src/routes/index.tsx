import { createFileRoute } from "@tanstack/react-router";
import meImg from "@/assets/image.png.asset.json";
import marketImg from "@/assets/image-2.png.asset.json";
import counsellingImg from "@/assets/image-3.png.asset.json";
import bestPracticesImg from "@/assets/best-practices.png";
import scalableCoachingImg from "@/assets/scalable-coaching.png";
import flashpointsImg from "@/assets/flashpoints.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Retailer Enablement System for Paints — System Demos" },
      {
        name: "description",
        content:
          "Explore the Paints retail enablement system: engagement, market discovery, counselling and more system demos in one place.",
      },
      { property: "og:title", content: "Retailer Enablement System for Paints — System Demos" },
      {
        property: "og:description",
        content:
          "Explore the Paints retail enablement system: engagement, market discovery, counselling and more system demos in one place.",
      },
    ],
  }),
  component: Index,
});

type System = {
  title: string;
  usedBy: string;
  description: string;
  image?: string;
  link?: string;
  comingSoon?: boolean;
};

const systems: System[] = [
  {
    title: "ME Retailer Engagement System",
    usedBy: "For Marketing Executives to engage with Retailers",
    description:
      "MEs use the app with each of their retailer for their day-to-day engagements as part of the field visits",
    image: meImg.url,
    link: "https://paints-retailer-engagement-system.lovable.app/",
  },
  {
    title: "Market Discovery System",
    usedBy: "For Demand Generators",
    description:
      "Front-line and market outreach teams use it to discover untapped markets and systematically reach out to them",
    image: marketImg.url,
    link: "https://paints-market-discovery-system.lovable.app/",
  },
  {
    title: "Distributor / Retailer Business Counselling System",
    usedBy: "For Sales Officers to consult large dealers",
    description:
      "Help businesses unlock their growth potential by identifying and adopting the practices that best fit their aspirations and customer needs",
    image: counsellingImg.url,
    link: "https://bpcl-ro-counsellingtool.lovable.app/",
  },
  {
    title: "Retailer Best Practices System",
    usedBy: "For Retailers/ Mom & Pop Stores to improve their business practices",
    description: "For the Retailers/Dealers to adopt best practices harvested from top retailers",
    image: bestPracticesImg,
    link: "https://cscbusinesstoolbox.illumine.in/",
  },
  {
    title: "Scalable Coaching System",
    usedBy: "For Area Sales Managers to coach their sales teams",
    description:
      "For ASM/TSMs to have coaching dialogue with their Sales Teams to address persistent challenges",
    image: scalableCoachingImg,
    comingSoon: true,
  },
  {
    title: "Flashpoints Management System",
    usedBy: "For sales executives to handle customer challenges",
    description:
      "For Sales Teams to deal with dynamic customer challenges real-time and share/access best practices of top sales officers across the network",
    image: flashpointsImg,
    comingSoon: true,
  },
];

function Index() {
  return (
    <main className="flex h-screen flex-col gap-4 overflow-hidden bg-background p-4 sm:p-6">
      <header className="shrink-0 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Retailer Enablement System
        </h1>
        <p className="text-lg font-medium uppercase tracking-[0.2em] text-primary">For Paints</p>
        <p className="text-xs text-muted-foreground">Select a system to open its demo</p>
      </header>

      <ProductView />
    </main>
  );
}

function ProductView() {
  return (
    <section className="grid min-h-0 flex-1 grid-cols-2 grid-rows-3 gap-3 sm:grid-cols-3 sm:grid-rows-2 sm:gap-4">
      {systems.map((s) => {
        const usedBy = (
          <p className="line-clamp-1 shrink-0 text-center text-[10px] font-semibold uppercase tracking-wide text-primary sm:text-[11px]">
            {s.usedBy}
          </p>
        );

        const inner = (
          <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all group-hover:border-primary/40 group-hover:shadow-md">
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-muted">
              {s.image ? (
                <img
                  src={s.image}
                  alt={`${s.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-contain"
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
              {s.link && <span className="mt-1 text-xs font-medium text-primary">Open demo →</span>}
              {s.comingSoon && (
                <span className="mt-1 w-fit rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Coming soon
                </span>
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
            className="group flex min-h-0 flex-col gap-1"
          >
            {usedBy}
            {inner}
          </a>
        ) : (
          <div key={s.title} className="group flex min-h-0 flex-col gap-1 cursor-default opacity-60">
            {usedBy}
            {inner}
          </div>
        );
      })}
    </section>
  );
}
