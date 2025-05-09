Here’s a basic `README.md` file for the `@sandeep-jaiswar/tailwind-preset` package, designed to describe the purpose and usage of your custom Tailwind CSS preset with design system.

---

### 📄 `README.md`

````markdown
# @sandeep-jaiswar/tailwind-preset

A sharable Tailwind CSS preset — built with consistency, scalability, and dark-mode support in mind.

## ✨ Features

- color system
- Custom font stack
- Spacing, border radius, and other utilities
- Designed to be used across apps and packages

## 📦 Installation

Using **Bun**:

```bash
bun add -D tailwindcss @sandeep-jaiswar/tailwind-preset
````

Using **npm**:

```bash
npm install -D tailwindcss @sandeep-jaiswar/tailwind-preset
```

Using **yarn**:

```bash
yarn add -D tailwindcss @sandeep-jaiswar/tailwind-preset
```

## ⚙️ Usage

In your `tailwind.config.js` or `tailwind.config.ts`:

```ts
import preset from '@sandeep-jaiswar/tailwind-preset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: ['./src/**/*.{ts,tsx,js,jsx}'], // your app files
};
```

## 🎨 Custom Theme

The preset extends Tailwind’s default theme with:

* **Colors**: Brand, background, text, and border palettes
* **Font**: Netflix-like sans-serif stack
* **Border Radius**: Smooth rounded corners
* **Spacing**: Extended scale for layout consistency

## 🛠️ Development

This preset is built using TypeScript and published as an ES module. Tailwind plugins can be added if needed in the future.

To build locally:

```bash
bun run build
```

## 📘 License

MIT License — [Sandeep Jaiswar](https://github.com/sandeep-jaiswar)
