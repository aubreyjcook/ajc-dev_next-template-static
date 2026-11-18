import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-lg leading-8">
        That page does not exist.{" "}
        <Link href="/" className="underline">
          Go home
        </Link>
        .
      </p>
    </div>
  );
}
