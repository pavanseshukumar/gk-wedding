import { HeartHandshake } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 rounded-[32px] border border-border/45 bg-card/85 px-6 py-12 text-center shadow-[var(--shadow-soft)] backdrop-blur-soft sm:px-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <div className="flex items-center gap-3 text-primary">
          <HeartHandshake className="size-6" />
          <span className="text-[0.65rem] uppercase tracking-[0.4em]">
            శుభాశయములతో • ధన్యవాదాలు
          </span>
        </div>
        <p className="font-heading text-3xl text-foreground leading-relaxed tracking-[0.02em] sm:text-4xl sm:leading-[1.7]">
          మీ ఆశీస్సులు మా కొత్త లైఫ్‌కు పాజిటివ్ వైబ్స్ ఇస్తాయి. ఈ స్పెషల్ డేలో మాతో కలిసి
          సెలబ్రేట్ చేసిన ఫ్రెండ్స్ & ఫ్యామ్ అందరికీ హార్ట్‌ఫెల్ట్ థాంక్స్.
        </p>
        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
          Your blessings bring the warmest vibes to our new journey. Thank you for being with us on
          this special day and making every ritual feel extra magical.
        </p>
      </div>
    </footer>
  );
}

