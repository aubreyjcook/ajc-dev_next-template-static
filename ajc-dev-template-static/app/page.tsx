import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{site.name}</h1>
      <p className="mt-4 max-w-xl text-lg leading-8">{site.description}</p>
    </div>
  );
}
