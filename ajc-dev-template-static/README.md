# Static site template

A Next.js App Router shell that builds to a fully static site. `next build` writes HTML, CSS, and JavaScript to `out/` via `output: 'export'`.

## Scripts

```bash
npm run dev
```

Runs the local dev server.

```bash
npm run build
npm run preview
```

`build` emits the static site in `out/`. `preview` serves that folder. Run `build` before `preview`.

## Make it your site

Edit [`lib/site.ts`](lib/site.ts) for the site name, description, and nav. The root layout reads that file for metadata, the header, and the footer.

Add a route by creating `app/<route>/page.tsx` and a matching entry in `site.nav`. With `trailingSlash` enabled, `/about` is exported as `out/about/index.html`.

## Static export limits

These need a Node server and are not available in this template:

- Server Actions
- `cookies()` and `headers()`
- Redirects, rewrites, and custom headers in `next.config.ts`
- Incremental Static Regeneration
- Dynamic routes that omit `generateStaticParams`, or that set `dynamicParams: true`
- The default `next/image` optimizer (`images.unoptimized` is on so `next/image` still works with local files)

`basePath` is unset. Set it only when the host serves the site from a subpath, such as a GitHub project page.
