# Dark Mode + i18n Implementation Plan

## Project Overview
Add dark mode support and multi-language translations (EN, ES, DE, PT, FR, ZH) to the TeamSync landing page.

## Phase 1: Dark Mode Implementation

### 1.1 Configure Tailwind Dark Mode
- [ ] Update `tailwind.config.mjs` to enable dark mode with class strategy
- [ ] Test dark mode classes work correctly

### 1.2 Create Theme Toggle Component
- [ ] Create `src/components/ThemeToggle.astro` component
- [ ] Add sun/moon icons
- [ ] Implement toggle functionality with localStorage persistence
- [ ] Add smooth transitions

### 1.3 Update Layout
- [ ] Add ThemeToggle to Navigation component
- [ ] Add dark mode background colors to Layout
- [ ] Implement theme initialization script

### 1.4 Update All Components for Dark Mode
- [ ] Navigation.astro - dark mode styles
- [ ] Hero.astro - dark mode styles
- [ ] Features.astro - dark mode styles
- [ ] Pricing.astro - dark mode styles
- [ ] FAQ.astro - dark mode styles
- [ ] ContactForm.astro - dark mode styles
- [ ] Footer.astro - dark mode styles

### 1.5 Testing & Validation
- [ ] Test theme toggle functionality
- [ ] Test theme persistence across page reloads
- [ ] Verify all sections look good in both modes
- [ ] Test on different browsers
- [ ] Commit and push changes

---

## Phase 2: i18n Implementation

### 2.1 Setup i18n Infrastructure
- [ ] Install Astro i18n integration
- [ ] Configure `astro.config.mjs` with supported locales
- [ ] Create locale routing structure

### 2.2 Create Translation Files
- [ ] Extract all text content from components
- [ ] Use DeepL to translate to 6 languages
- [ ] Create translation files structure

### 2.3 Create i18n Utilities
- [ ] Create helper functions
- [ ] Create translation getter function
- [ ] Create language detection function

### 2.4 Create Language Selector Component
- [ ] Create LanguageSelector component
- [ ] Add language switcher to Navigation

### 2.5 Update Components to Use Translations
- [ ] Update all components with translation keys

### 2.6 Configure Routing
- [ ] Setup language-based routing
- [ ] Update sitemap with all languages

### 2.7 Testing & Validation
- [ ] Test all languages
- [ ] Test language switcher
- [ ] Verify SEO per language

---

## Success Criteria

### Dark Mode
- ✅ Theme toggle works smoothly
- ✅ Theme preference persists
- ✅ All components look good in both modes

### i18n
- ✅ All 6 languages fully translated
- ✅ Language selector works correctly
- ✅ SEO optimized for each language
