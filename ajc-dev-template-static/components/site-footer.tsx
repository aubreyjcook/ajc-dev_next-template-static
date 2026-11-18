import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto w-full max-w-3xl px-6 py-6 text-sm">
        <p>{site.name}</p>
      </div>
    </footer>
  );
}
