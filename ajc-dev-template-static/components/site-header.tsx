import Link from "next/link";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="relative border-b border-foreground/10">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-4">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
