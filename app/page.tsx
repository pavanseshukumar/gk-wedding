import { BentoGallery } from "@/components/BentoGallery";
import { Details } from "@/components/Details";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InvitationText } from "@/components/InvitationText";
import { ThemeToggle } from "@/components/ThemeToggle";

const navigation = [
  { href: "#invitation", label: "Invitation" },
  { href: "#details", label: "Details" },
  { href: "#gallery", label: "Gallery" },
] as const;

export default function HomePage() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-4 pb-24 pt-12 sm:px-6 lg:px-10 lg:pb-28">
      <header className="sticky top-6 z-30 flex items-center justify-between rounded-full border border-border/60 bg-background/80 px-6 py-3 shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/15 font-heading text-lg text-primary shadow-inner shadow-primary/20">
            GK
          </span>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
              Girish & Kavya
            </span>
            <span className="font-heading text-base text-foreground">
              Wedding Celebration
            </span>
          </div>
        </div>
        <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-xs uppercase tracking-[0.35em] transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </header>

      <Hero />
      <InvitationText />
      <Details />
      <BentoGallery />
      <Footer />
    </main>
  );
}

