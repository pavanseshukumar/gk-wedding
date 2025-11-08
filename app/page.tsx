import { CoupleSpotlight } from "@/components/CoupleSpotlight";
import { Lamp } from "lucide-react";

import { BentoGallery } from "@/components/BentoGallery";
import { Details } from "@/components/Details";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InvitationText } from "@/components/InvitationText";
import { ThemeToggle } from "@/components/ThemeToggle";

const navigation = [
  { href: "#invitation", label: "Invitation" },
  { href: "#details", label: "Schedule" },
  { href: "#gallery", label: "Gallery" },
] as const;

export default function HomePage() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-4 pb-28 pt-12 sm:px-6 lg:px-10">
      <header className="sticky top-6 z-30 flex items-center justify-between rounded-full border border-border/60 bg-background/85 px-6 py-3 shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="inline-flex size-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary shadow-inner shadow-primary/25">
            <Lamp className="size-5" />
          </span>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-[0.7rem] uppercase tracking-[0.38em] text-muted-foreground">
              Girish & Kalyani
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-[0.6rem] uppercase tracking-[0.38em] transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </header>

      <Hero />
      <InvitationText />
      <CoupleSpotlight />
      <Details />
      <BentoGallery />
      <Footer />
    </main>
  );
}

