import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowLeftRight, ArrowUp, ArrowUpDown, ChevronRight, User, Users } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import meImg from "@/assets/image.png.asset.json";
import marketImg from "@/assets/image-2.png.asset.json";
import counsellingImg from "@/assets/image-3.png.asset.json";
import bestPracticesImg from "@/assets/best-practices.png";
import scalableCoachingImg from "@/assets/scalable-coaching.png";
import flashpointsImg from "@/assets/flashpoints.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paints Precision Knowledge Enablement Pack — System Demos" },
      {
        name: "description",
        content:
          "Explore the Paints precision knowledge enablement pack: engagement, market discovery, counselling and more system demos in one place.",
      },
      { property: "og:title", content: "Paints Precision Knowledge Enablement Pack — System Demos" },
      {
        property: "og:description",
        content:
          "Explore the Paints precision knowledge enablement pack: engagement, market discovery, counselling and more system demos in one place.",
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
  { title: "Retailer Best Practices System", description: "Coming soon", image: bestPracticesImg },
  { title: "Scalable Coaching System", description: "Coming soon", image: scalableCoachingImg },
  { title: "Flashpoints Management System", description: "Coming soon", image: flashpointsImg },
];

type MapSystem = {
  title: string;
  image?: string;
  link?: string;
};

const mapSystems: { top: MapSystem[]; bottom: MapSystem } = {
  top: [
    { title: "Business Coaching System", image: scalableCoachingImg },
    {
      title: "Retailer Engagement System",
      image: meImg.url,
      link: "https://paints-retailer-engagement-system.lovable.app/",
    },
    {
      title: "Retailer Business Improvement System",
      image: bestPracticesImg,
    },
  ],
  bottom: {
    title: "Systematic Engagement & Discovery System",
    image: marketImg.url,
    link: "https://paints-market-discovery-system.lovable.app/",
  },
};

function Index() {
  const [view, setView] = useState<"map" | "products">("map");

  return (
    <main className="flex h-screen flex-col gap-4 overflow-hidden bg-background p-4 sm:p-6">
      <header className="shrink-0 text-center">
        <p className="text-lg font-medium uppercase tracking-[0.2em] text-primary">Paints</p>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Precision Knowledge Enablement Pack
        </h1>

        <ToggleGroup
          type="single"
          value={view}
          onValueChange={(v) => v && setView(v as "map" | "products")}
          className="mx-auto mt-3 inline-flex rounded-full border border-border bg-muted p-1"
        >
          <ToggleGroupItem
            value="map"
            className="rounded-full px-4 py-1.5 text-xs font-semibold data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            Engagement Map View
          </ToggleGroupItem>
          <ToggleGroupItem
            value="products"
            className="rounded-full px-4 py-1.5 text-xs font-semibold data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
          >
            Product View
          </ToggleGroupItem>
        </ToggleGroup>
      </header>

      {view === "map" ? <EngagementMapView /> : <ProductView />}
    </main>
  );
}

function ModelBox({ model, className }: { model: MapSystem; className?: string }) {
  const content = (
    <div
      className={cn(
        "group relative flex h-full min-h-[92px] w-full flex-col overflow-hidden rounded-2xl border-2 border-amber-400 bg-white shadow-[0_2px_10px_-2px_rgba(0,0,0,0.12)] ring-1 ring-amber-100 transition-all",
        model.link
          ? "hover:-translate-y-1 hover:border-amber-500 hover:shadow-[0_10px_24px_-6px_rgba(217,119,6,0.35)]"
          : "opacity-90",
        className,
      )}
    >
      {model.image && (
        <img
          src={model.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />
      <span className="absolute bottom-2 right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 shadow-sm">
        <ChevronRight className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
      </span>
      {model.link && (
        <span className="absolute bottom-2 left-2.5 z-10 rounded-full bg-primary/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-primary-foreground shadow-sm">
          Open demo
        </span>
      )}
    </div>
  );

  return (
    <div className="flex h-full flex-col gap-2">
      <h3 className="flex items-start justify-center gap-1.5 text-center text-[11px] font-bold leading-tight text-foreground sm:text-xs">
        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
        {model.title}
      </h3>
      {model.link ? (
        <a
          href={model.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block flex-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {content}
        </a>
      ) : (
        <div className="flex-1 cursor-default">{content}</div>
      )}
    </div>
  );
}

function PersonNode({
  label,
  connectRight,
}: {
  label: string;
  connectRight?: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center gap-1.5 text-center">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 shadow-sm ring-2 ring-primary/20 sm:h-12 sm:w-12">
        <User className="h-5 w-5 text-primary sm:h-6 sm:w-6" strokeWidth={1.75} />
      </span>
      <span className="text-[10px] font-semibold leading-tight text-foreground sm:text-xs">
        {label}
      </span>
      {connectRight && <FlowDot className="right-0 top-5 -translate-y-1/2 translate-x-1/2" />}
    </div>
  );
}

function FlowDot({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-amber-300 bg-background shadow-sm",
        className,
      )}
    >
      <ArrowLeftRight className="h-3 w-3 text-amber-500" strokeWidth={2.25} />
    </span>
  );
}

function FlowDown({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center py-1", className)}>
      <div className="h-3 w-px bg-gradient-to-b from-transparent to-amber-300" />
      <ArrowDown className="-mt-0.5 h-4 w-4 text-amber-400" strokeWidth={2} />
    </div>
  );
}

function EngagementMapView() {
  return (
    <section className="min-h-0 flex-1 overflow-auto rounded-2xl border border-border bg-gradient-to-br from-muted/70 via-background to-primary/5 p-4 shadow-inner sm:p-8">
      <div className="mx-auto grid min-w-[680px] max-w-4xl grid-cols-[1fr_1fr_1fr_1.15fr] gap-x-4 sm:gap-x-6">
        {/* row 1: top boxes, each in its own column */}
        <div className="col-start-1 row-start-1">
          <ModelBox model={mapSystems.top[0]} />
        </div>
        <div className="col-start-2 row-start-1">
          <ModelBox model={mapSystems.top[1]} />
        </div>
        <div className="col-start-3 row-start-1">
          <ModelBox model={mapSystems.top[2]} />
        </div>

        {/* customer ecosystem column, spanning the people rows */}
        <div className="col-start-4 row-span-6 row-start-1 flex flex-col items-center justify-center gap-3">
          <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-center text-[10px] font-bold italic tracking-wide text-primary sm:text-xs">
            Customer Ecosystem
          </span>
          <EcosystemCluster />
        </div>

        {/* row 2: down arrows into the ASM / ME / Dealer chain */}
        <div className="col-start-1 row-start-2">
          <FlowDown className="items-center justify-center" />
        </div>
        <div className="col-start-2 row-start-2">
          <FlowDown className="items-center justify-center" />
        </div>
        <div className="col-start-3 row-start-2">
          <FlowDown className="items-center justify-center" />
        </div>

        {/* row 3: ASM -> ME -> Dealer/Retailer -> Pull, each node in its own matching column */}
        <div className="col-start-1 row-start-3 flex justify-center">
          <PersonNode label="Area Sales Manager" connectRight />
        </div>
        <div className="col-start-2 row-start-3 flex justify-center">
          <PersonNode label="Marketing Executive" connectRight />
        </div>
        <div className="col-start-3 row-start-3 flex justify-center">
          <PersonNode label="Dealer / Retailer" connectRight />
        </div>
        <div className="col-start-4 row-start-3 flex flex-col items-center gap-1 self-start pl-2">
          <ArrowLeftRight className="h-4 w-4 text-primary/60" strokeWidth={1.75} />
          <span className="text-[10px] font-semibold italic text-muted-foreground">Pull</span>
        </div>

        {/* row 4: vertical double arrow, aligned under Dealer/Retailer */}
        <div className="col-start-3 row-start-4 flex justify-center py-1">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-amber-300 bg-background shadow-sm">
            <ArrowUpDown className="h-4 w-4 text-amber-500" strokeWidth={2} />
          </span>
        </div>

        {/* row 5: Demand Generator -> Contractors/Painters, under ME / Dealer columns */}
        <div className="col-start-2 row-start-5 flex justify-center">
          <PersonNode label="Demand Generator" connectRight />
        </div>
        <div className="col-start-3 row-start-5 flex justify-center">
          <PersonNode label="Contractors / Painters" connectRight />
        </div>

        {/* row 6: arrow up into Demand Generator */}
        <div className="col-start-2 row-start-6 flex flex-col items-center justify-center py-1">
          <ArrowUp className="mb-0.5 h-4 w-4 text-amber-400" strokeWidth={2} />
          <div className="h-3 w-px bg-gradient-to-t from-transparent to-amber-300" />
        </div>

        {/* row 7: bottom model box under Demand Generator, reaching toward the ecosystem */}
        <div className="col-span-2 col-start-2 row-start-7 flex items-end gap-2 pt-1">
          <ModelBox model={mapSystems.bottom} className="min-h-[72px]" />
        </div>
        <div className="col-start-4 row-start-7 flex items-center justify-center gap-1 self-center pb-2">
          <div className="h-px w-4 bg-gradient-to-r from-amber-300 to-transparent" />
          <ArrowLeftRight className="h-4 w-4 shrink-0 text-primary/60" strokeWidth={1.75} />
        </div>
      </div>
    </section>
  );
}

function EcosystemCluster() {
  return (
    <div className="relative flex h-full min-h-[220px] w-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_35%,var(--color-background),var(--color-muted))] p-4 shadow-inner ring-1 ring-border">
      <div className="grid grid-cols-3 gap-x-2 gap-y-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/15"
          >
            <Users className="h-3.5 w-3.5 text-primary/70" strokeWidth={1.75} />
          </span>
        ))}
      </div>
      <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-border bg-background px-2 py-0.5 text-[9px] font-bold italic text-muted-foreground shadow-sm sm:text-[10px]">
        Builders
      </span>
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background px-2 py-0.5 text-[9px] font-bold italic text-muted-foreground shadow-sm sm:text-[10px]">
        Home Owners
      </span>
    </div>
  );
}

function ProductView() {
  return (
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
  );
}
