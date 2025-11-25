# 🚀 TeamSync - Modern SaaS Landing Page

A high-performance, multi-language landing page for TeamSync, a remote team collaboration platform. Built with modern web technologies and best practices for optimal user experience and SEO.

![Astro](https://img.shields.io/badge/Astro-4.0-FF5D01?logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 🎨 Design & UX

- **Modern UI/UX** - Clean, professional design with smooth animations and transitions
- **Dark Mode** - Full dark mode support with manual toggle (defaults to light mode)
- **Responsive Design** - Mobile-first approach, optimized for all screen sizes
- **Accessibility** - WCAG compliant with proper ARIA labels and semantic HTML

### 🌍 Internationalization (i18n)

- **6 Languages Supported** - English, Spanish, German, Portuguese, French, Chinese
- **DeepL Integration** - Automated translation workflow using DeepL API
- **SEO Optimized** - Proper `lang` attributes and localized meta tags
- **Dynamic Routes** - `/` (English), `/es/`, `/de/`, `/pt/`, `/fr/`, `/zh/`

### ⚡ Performance

- **Lighthouse Score 100** - Perfect scores across all metrics
- **Static Site Generation** - Pre-rendered pages for instant loading
- **Optimized Assets** - Minified CSS/JS, optimized images
- **Fast Navigation** - Client-side routing with smooth transitions

### 🛠️ Developer Experience

- **TypeScript** - Full type safety across the codebase
- **ESLint & Prettier** - Consistent code formatting and linting
- **Playwright Tests** - E2E testing for critical user flows
- **Hot Module Replacement** - Instant feedback during development

## 🏗️ Tech Stack

### Core Framework

- **[Astro 4.0](https://astro.build)** - Static Site Generator with partial hydration
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling

- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **Custom Design System** - Consistent colors, spacing, and typography

### Internationalization

- **Astro i18n** - Native internationalization support
- **[DeepL API](https://www.deepl.com/pro-api)** - Automated translation service
- **JSON-based translations** - Easy to manage and update

### Form Handling

- **[Formspree](https://formspree.io/)** - Contact form backend (no server required)

### Testing & Quality

- **[Playwright](https://playwright.dev/)** - End-to-end testing
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

### Deployment

- **GitHub Pages** - Free hosting with automatic deployments
- **GitHub Actions** - CI/CD pipeline for automated builds and tests

## 📁 Project Structure

```
landing-saas/
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Pricing.astro
│   │   ├── FAQ.astro
│   │   ├── ContactForm.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── LanguagePicker.astro
│   │   └── LandingPage.astro
│   ├── i18n/              # Internationalization
│   │   ├── locales/       # Translation JSON files
│   │   │   ├── en.json
│   │   │   ├── es.json
│   │   │   ├── de.json
│   │   │   ├── pt.json
│   │   │   ├── fr.json
│   │   │   └── zh.json
│   │   └── translations.ts
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Routes
│   │   ├── index.astro    # English (/)
│   │   └── [lang]/
│   │       └── index.astro # Other languages (/es/, /de/, etc.)
│   ├── styles/            # Global styles
│   │   └── global.css
│   └── utils/             # Utility functions
│       ├── constants.ts
│       └── i18n.ts
├── scripts/               # Automation scripts
│   └── translate.js       # DeepL translation automation
├── tests/                 # E2E tests
│   └── e2e/
│       └── landing-page.spec.ts
├── docs/                  # Documentation
│   ├── TRANSLATION_GUIDE.md
│   └── PERFORMANCE_OPTIMIZATION.md
└── .github/
    └── workflows/
        └── deploy.yml     # CI/CD pipeline
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/landing-saas.git
cd landing-saas
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Development Commands

| Command              | Action                                      |
| :------------------- | :------------------------------------------ |
| `npm run dev`        | Start dev server at `localhost:4321`        |
| `npm run build`      | Build production site to `./dist/`          |
| `npm run preview`    | Preview production build locally            |
| `npm run lint`       | Run ESLint                                  |
| `npm run lint:fix`   | Fix ESLint errors automatically             |
| `npm run format`     | Format code with Prettier                   |
| `npm run test`       | Run Playwright tests                        |
| `npm run test:ui`    | Run tests with Playwright UI                |
| `npm run translate`  | Auto-translate missing i18n keys with DeepL |

## 🌍 Translation Workflow

This project uses an automated translation system powered by DeepL.

### Quick Start

1. **Get DeepL API Key** (free tier: 500,000 chars/month)

   - Visit [DeepL API](https://www.deepl.com/pro-api)
   - Sign up and copy your API key

2. **Configure environment**

```bash
cp .env.example .env
# Edit .env and add: DEEPL_API_KEY=your_key_here
```

3. **Add new translations**

   - Edit only `src/i18n/locales/en.json` (source language)
   - Run `npm run translate`
   - All other languages update automatically! ✨

### Adding a New Language

```bash
# 1. Add to src/i18n/translations.ts
# 2. Create empty JSON file
echo '{}' > src/i18n/locales/it.json
# 3. Run translation
npm run translate
```

📖 **Full documentation:** [TRANSLATION_GUIDE.md](./docs/TRANSLATION_GUIDE.md)

## 🎨 Customization

### Colors & Branding

Edit `tailwind.config.mjs` to customize the color palette:

```js
theme: {
  extend: {
    colors: {
      primary: {...},
      secondary: {...},
    }
  }
}
```

### Content

All content is in `src/i18n/locales/en.json`. Edit this file and run `npm run translate` to update all languages.

### Components

Components are in `src/components/`. Each component is self-contained and uses Tailwind CSS for styling.

## 🧪 Testing

### Run Tests

```bash
# Headless mode
npm run test

# Interactive UI mode
npm run test:ui

# Debug mode
npm run test:debug
```

Tests cover:

- ✅ Navigation functionality
- ✅ Dark mode toggle
- ✅ Language switching
- ✅ Form validation
- ✅ Responsive design

## 📦 Deployment

### GitHub Pages (Automatic)

1. Push to `main` branch
2. GitHub Actions automatically builds and deploys
3. Site available at `https://YOUR_USERNAME.github.io/landing-saas/`

### Manual Build

```bash
npm run build
# Output in ./dist/
```

## 🔧 Configuration

### Astro Config

Edit `astro.config.mjs` to configure:

- Site URL and base path
- i18n settings (languages, default locale)
- Build options

### Tailwind Config

Edit `tailwind.config.mjs` for:

- Custom colors and themes
- Typography settings
- Responsive breakpoints

## 📊 Performance

Current Lighthouse scores:

- **Performance:** 100
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

Optimizations:

- Static site generation (SSG)
- Minimal JavaScript (only for interactivity)
- Optimized images and assets
- Critical CSS inlined
- Lazy loading for images

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build) - Amazing static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [DeepL](https://www.deepl.com) - High-quality translation API
- [Formspree](https://formspree.io) - Simple form backend

## 📞 Support

For questions or support:

- 📧 Email: support@teamsync.example.com
- 💬 Discord: [Join our community](https://discord.gg/teamsync)
- 🐛 Issues: [GitHub Issues](https://github.com/YOUR_USERNAME/landing-saas/issues)

---

Made with ❤️ using [Astro](https://astro.build)
