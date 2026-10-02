# ShopHub - JavaScript Frameworks CA

An online shop built with Next.js, TypeScript and Tailwind CSS for the Noroff JavaScript Frameworks course assignment. Products come from the Noroff Online Shop API.

**Live demo:** https://javascript-frameworks-ca-daniel.netlify.app

![ShopHub product listing page](docs/screenshot.webp)

## Features

- Product listing with images, prices, discounts and ratings
- Search (debounced) and sorting by name, price and rating
- Product detail page with description, tags and reviews
- Shopping cart stored with Zustand: add and remove items, change quantities, see totals
- Checkout success page that clears the cart
- Contact form with validation (name, subject, email, message)
- Toast notifications for user actions
- Responsive layout for mobile, tablet and desktop

## Built with

- [Next.js 16](https://nextjs.org/) (App Router) and React 19
- TypeScript
- Tailwind CSS v4
- Zustand for cart state
- React Hot Toast
- [Noroff Online Shop API](https://docs.noroff.dev/docs/v2/basic/online-shop)

## Getting started

Requires Node.js 20.9 or newer.

```bash
git clone https://github.com/Daniel-leiken/javascript-frameworks-ca.git
cd javascript-frameworks-ca
npm install
npm run dev
```

Then open http://localhost:3000.

### Scripts

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## Project structure

```
app/          Routes: home, products/[id], cart, checkout/success, contact
components/   UI components (product grid, search, cart, forms, header, footer)
lib/          API calls, Zustand store, types and helper functions
docs/         README screenshot
```

## Improvements after submission

- Fixed the "Clear search" button: it reset the results but left the text in the search field. The search input is now controlled by the product grid, and the debounce actually works (it uses `setTimeout` with cleanup instead of creating a new debounced function on every render).
- Accessibility: label and `type="search"` on the search field, an `aria-label` with the item count on the cart link (the icon-only link on mobile had no text), `aria-label="Breadcrumb"` on the product breadcrumb, decorative icons hidden from screen readers, and a readable colour for the "No products found" text.
- Fixed all ESLint errors so `npm run lint` passes (JSX moved out of try/catch, unused variables removed, apostrophes escaped).
- Removed unused starter SVGs from `public/`.
- Rewrote this README: removed claims about tests that do not exist, corrected the Next.js version, and added a screenshot and the live link.

## AI usage

GitHub Copilot was used as an assistant during the development of this project, including generating example approaches, helping structure parts of the implementation, and supporting layout and UI consistency decisions.

## Contact

Daniel Strandheim

- GitHub: [Daniel-leiken](https://github.com/Daniel-leiken)
- LinkedIn: [daniel-strandheim](https://www.linkedin.com/in/daniel-strandheim)
