import { HeartHandshake } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 rounded-[28px] border border-border/40 bg-card/80 px-6 py-10 text-center shadow-[var(--shadow-soft)] backdrop-blur-soft sm:px-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3 text-primary">
          <HeartHandshake className="size-6" />
          <span className="text-xs uppercase tracking-[0.35em]">With Gratitude</span>
        </div>
        <p className="font-heading text-3xl text-foreground">
          Thank you for blessing our journey with your warmth and wishes.
        </p>
        <p className="text-sm text-muted-foreground">
          Kindly RSVP by 20th January 2026 · We cannot wait to celebrate with you.
        </p>
      </div>
    </footer>
  );
}

