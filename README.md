# Modern Rasoi website (FoodHub repo)

Static multilingual website (English, Hindi, Marathi, Gujarati) for **Modern Rasoi** (*Traditional taste, modern convenience*), a ready-to-cook food brand in Mahim/Dadar, Mumbai. Paratha mixes are the first product category and the flagship range; more categories will follow. Built with [Astro](https://astro.build), with no backend. Customers choose products and the site opens WhatsApp with the order already typed out.

**Status:** dummy site in *coming soon* mode, with placeholder product details.

Live (Phase 1): https://sarvesh00.github.io/FoodHub/

Nothing needs to run on a laptop. Every push to `main` is built and deployed by GitHub Actions.

---

## Where things live

| What | File |
|---|---|
| Brand name, colours, WhatsApp number, FSSAI number, switches | `src/site.config.ts` |
| Delivery pincodes, delivery fee, minimum order | `src/site.config.ts` → `delivery` |
| Product categories (e.g. Paratha mixes) | `src/data/categories.json` |
| Products (category, flagship flag, packs, prices, ingredients, allergens, shelf life, cooking steps) | `src/data/products.json` |
| Our story, How to cook tips, FAQ | `src/data/pages.json` |
| Shipping, refund, privacy, terms | `src/data/policies.ts` |
| Buttons, menus, labels and all other interface text | `src/i18n/ui.ts` |
| Colours, fonts, layout | `src/styles/global.css` |

Every text field has `en`, `hi`, `mr`, `gu` versions. If a language is missing, the English text is shown, so you can add translations gradually.

## Common changes

- **Rename the brand:** edit `brandName` (and `brandNameLocal`) in `src/site.config.ts`.
- **Add the WhatsApp number:** `whatsappNumber: '919812345678'` (country code, no `+`, no spaces). While it is empty, WhatsApp opens and asks which contact to send to, which is handy for testing.
- **Change a price:** edit `priceRupees` in `src/data/products.json`.
- **Add a product:** copy a product block in `products.json`, change the `slug` and text, set its `category`, and set `"status": "active"`. Use `"upcoming"` to show it under *Coming later*. Add `"featured": true` to show it on the home page as a flagship.
- **Add a category:** add a block to `categories.json`. It gets its own page at `/<lang>/collections/<slug>/` and a section on the Products page as soon as it has an active product.
- **Deliver to a new area:** add `'4000xx': 'Area name'` to `delivery.pincodes`.

## Switches (`src/site.config.ts`)

| Switch | Now | Meaning |
|---|---|---|
| `demoMode` | `true` | Yellow "sample site" banner at the top |
| `orderingEnabled` | `false` | `false` = coming soon / notify me. `true` = full WhatsApp order form |
| `allowIndexing` | `false` | Lets Google index the site |
| `showPrices` | `true` | Shows prices while in coming-soon mode |

The build **fails on purpose** if `orderingEnabled` is `true` but `fssaiNumber` is not a 14-digit number.

## Launch checklist

- [x] Brand name: Modern Rasoi
- [ ] Trademark check (IP India), domain and Instagram handle for Modern Rasoi
- [ ] FSSAI registration done, then `fssaiNumber` set (it appears in the footer and on product pages)
- [ ] Real prices, pack sizes, ingredients and allergens from the actual recipe
- [ ] Shelf life confirmed by lab testing (the "6 months" on the site is a placeholder)
- [ ] Hindi, Marathi and Gujarati proofread by native speakers (`ui.ts`, `products.json`, `pages.json`)
- [ ] Policy pages reviewed by a CA or lawyer, then translated
- [ ] "Our story" rewritten by the founder (`pages.json` → `story`)
- [ ] Product photos (replacing the illustrated placeholders)
- [ ] WhatsApp Business number, Instagram handle, email
- [ ] Delivery pincodes, delivery fee and minimum order confirmed
- [ ] `demoMode: false`, `allowIndexing: true`, `orderingEnabled: true`
- [ ] Google Business Profile created, with its link in `googleBusinessProfileUrl`
- [ ] Optional: free [GoatCounter](https://www.goatcounter.com) analytics, with the code in `analytics.goatcounterCode`

## Deployment

### Phase 1: GitHub Pages (now)

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions** (one-time).
2. Push to `main`. `.github/workflows/deploy-pages.yml` builds and deploys.

### Phase 2: AWS S3 + CloudFront (after the domain is bought)

To do: a CloudFormation template plus a workflow that deploys via GitHub OIDC, with a role scoped to one bucket and one distribution, so no AWS access keys are stored. Set `BASE_PATH: /` and `SITE_URL: https://your-domain` for that build.

### Phase 3

Cart and checkout with a payment gateway, plus Shiprocket and Delhivery for courier delivery.

## Project layout

```
src/
  site.config.ts          brand + switches (start here)
  data/                   products, page text, policies
  i18n/ui.ts              interface strings (4 languages)
  lib/                    helpers (i18n, links, products)
  components/             header, footer, product card, illustrations
  layouts/Base.astro      <head>, SEO, hreflang, JSON-LD
  pages/
    index.astro           language redirect
    [lang]/...            all pages, generated for en/hi/mr/gu
    [lang]/collections/   one page per product category
    sitemap.xml.ts, robots.txt.ts
```
