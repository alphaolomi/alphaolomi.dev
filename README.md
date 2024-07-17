# [Alpha's Personal website](alphaolomi.dev)

## Getting started

To get started with this template, first install the npm dependencies:

```bash
pnpm install
```

Next, create a `.env.local` file in the root of your project and set the `NEXT_PUBLIC_SITE_URL` variable to your site's public URL:

```ini
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXX
```

Next, run the development server:

```bash
pnpm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

---

For, production build:

```bash
pnpm run dev
```

Or

```bash
ANALYZE=true pnpm run build
```

This will automatically open tabs for

```
/project/path/.next/analyze/nodejs.html
/project/path/.next/analyze/edge.html
/project-path/.next/analyze/client.html
```

## Testing

Currently not priority.

### Thoughts/Vision

#### Unit Tests

Use Vitest with JSDOM and React Testing Library

- Start testing key files/components.
- Test each file in `src/`
- 80% Code coverage.

#### End 2 end Tests

Use Playwright.

Testing Strategy:

- Simple, testing page essentials only, (load ok, title, LCPs, key items)
- Test pages incrementally

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Credits

![Credits - Avatars Images](https://4.vercel.app/github/contributors/alphaolomi/alphaolomi.dev?strokeopacity=1)

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [MDX](https://mdxjs.com) - the MDX documentation
