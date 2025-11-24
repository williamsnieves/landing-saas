# AGENTS.MD - Landing SaaS Project Rules & Guidelines

## Project Overview

**Project Name**: Landing-SaaS (Remote Teams Management)  
**Tech Stack**: Astro + TailwindCSS  
**Deployment**: GitHub Pages  
**Testing**: Playwright E2E  
**Form Integration**: Formspree

This document establishes the foundational rules, best practices, and technical objectives for building a professional landing page for a B2B SaaS focused on remote team management.

---

## 1. Project Rules & Engineering Principles

### 1.1 SOLID Principles

#### Single Responsibility Principle (SRP)

- Each component should have one clear purpose
- Separate concerns: presentation, logic, and data handling
- Example: `Hero.astro` handles only hero section rendering, not form submission

#### Open/Closed Principle (OCP)

- Components should be open for extension but closed for modification
- Use props and slots for customization
- Create base components that can be extended without altering core functionality

#### Liskov Substitution Principle (LSP)

- Derived components must be substitutable for their base components
- Maintain consistent interfaces across similar components
- Props should have predictable behavior across component variants

#### Interface Segregation Principle (ISP)

- Components should not depend on props they don't use
- Create focused, minimal prop interfaces
- Split large components into smaller, specialized ones

#### Dependency Inversion Principle (DIP)

- Depend on abstractions (interfaces/types) rather than concrete implementations
- Use TypeScript interfaces for component props
- Decouple components from specific data sources

### 1.2 KISS Principle (Keep It Simple, Stupid)

- **Avoid over-engineering**: Don't add complexity until it's needed
- **Prefer simple solutions**: Choose the most straightforward approach
- **Clear and readable code**: Code should be self-documenting
- **Minimal abstractions**: Only abstract when there's clear reuse
- **Direct implementations**: Avoid unnecessary layers of indirection

### 1.3 DRY Principle (Don't Repeat Yourself)

- **Component reusability**: Extract common UI patterns into reusable components
- **Utility functions**: Create shared functions for common operations
- **Shared layouts**: Use Astro layouts for consistent page structure
- **CSS utilities**: Leverage Tailwind's utility classes to avoid custom CSS repetition
- **Configuration centralization**: Store repeated values in config files

### 1.4 POLA Principle (Principle of Least Astonishment)

- **Intuitive naming conventions**: Names should clearly indicate purpose
- **Predictable behavior**: Components should behave as users expect
- **Clear component interfaces**: Props should have obvious meanings
- **Consistent patterns**: Use the same patterns throughout the codebase
- **Standard conventions**: Follow established Astro and web development conventions

---

## 2. Astro Best Practices (Official Documentation)

### 2.1 Project Structure

Follow Astro's recommended directory structure:

```
landing-saas/
├── public/              # Static assets (served as-is)
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── src/
│   ├── components/      # Reusable UI components
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routing
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

### 2.2 TypeScript Configuration

- Extend Astro's base TypeScript config:

```json
{
  "extends": "astro/tsconfigs/base"
}
```

- Configure import aliases for cleaner imports:

```json
{
  "compilerOptions": {
    "paths": {
      "@components/*": ["./src/components/*"],
      "@layouts/*": ["./src/layouts/*"],
      "@styles/*": ["./src/styles/*"]
    }
  }
}
```

### 2.3 Component Organization

- **`.astro` files**: Use for static content and server-side rendering
- **Framework components**: Only when client-side interactivity is required
- **Component structure**:

  ```astro
  ---
  // Component Script (TypeScript)
  // Runs at build time on the server
  ---

  <!-- Component Template (HTML + expressions) -->
  ```

### 2.4 Static Asset Management

- Place static assets in `public/` directory
- Assets in `public/` are served at root URL
- Reference as: `/images/logo.svg` (not `/public/images/logo.svg`)
- Optimize images before adding to project

### 2.5 Performance Best Practices

- Minimize JavaScript: Astro ships zero JS by default
- Use `client:*` directives sparingly and appropriately
- Leverage Astro's built-in optimizations
- Implement lazy loading for images
- Use modern image formats (WebP, AVIF)

---

## 3. TailwindCSS Integration

### 3.1 Setup & Configuration

- **Integration**: Use official `@astrojs/tailwind` integration
- **Global styles**: Import Tailwind in `src/styles/global.css`:
  ```css
  @import 'tailwindcss';
  ```
- **Config file**: `tailwind.config.mjs` for customization

### 3.2 Best Practices

- **Utility-first approach**: Prefer Tailwind utilities over custom CSS
- **Responsive design**: Use Tailwind's responsive modifiers (`sm:`, `md:`, `lg:`, `xl:`)
- **Custom theme**: Extend default theme in config for brand colors and fonts
- **Typography plugin**: Use `@tailwindcss/typography` for content styling
- **Component classes**: Use `@apply` sparingly, prefer utility classes in templates
- **Performance**: PurgeCSS runs automatically, removing unused styles

### 3.3 Responsive Breakpoints

```javascript
// Default Tailwind breakpoints
sm: '640px'   // Mobile landscape
md: '768px'   // Tablet
lg: '1024px'  // Desktop
xl: '1280px'  // Large desktop
2xl: '1536px' // Extra large desktop
```

---

## 4. Code Quality Standards

### 4.1 Linting & Formatting

- **ESLint**: Configure for Astro + TypeScript
- **Prettier**: Ensure consistent code formatting
- **Pre-commit hooks**: Run linting before commits (optional for this project)

### 4.2 Naming Conventions

| Type        | Convention       | Example                           |
| ----------- | ---------------- | --------------------------------- |
| Components  | PascalCase       | `Hero.astro`, `ContactForm.astro` |
| Functions   | camelCase        | `formatDate()`, `validateEmail()` |
| Variables   | camelCase        | `userName`, `isActive`            |
| Constants   | UPPER_SNAKE_CASE | `MAX_ITEMS`, `API_URL`            |
| Page files  | kebab-case       | `index.astro`, `about.astro`      |
| CSS classes | kebab-case       | `hero-section`, `cta-button`      |

### 4.3 Code Documentation

- **Component headers**: Document complex components with JSDoc comments
- **Function documentation**: Describe parameters and return values
- **Inline comments**: Explain "why" not "what" for complex logic
- **README**: Maintain up-to-date project documentation

### 4.4 Accessibility Requirements (WCAG 2.1 AA)

- **Semantic HTML**: Use appropriate HTML5 elements
- **ARIA labels**: Add where semantic HTML isn't sufficient
- **Keyboard navigation**: Ensure all interactive elements are keyboard accessible
- **Color contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Alt text**: Descriptive alt text for all images
- **Focus indicators**: Visible focus states for interactive elements
- **Screen reader testing**: Test with screen readers when possible

---

## 5. Branching Model

### 5.1 Branch Structure

- **`main`**: Production-ready code, always deployable
- **`develop`**: Integration branch for features
- **`feature/*`**: New features (e.g., `feature/hero-section`)
- **`fix/*`**: Bug fixes (e.g., `fix/mobile-nav`)
- **`test/*`**: Testing experiments

### 5.2 Workflow

1. Create feature branch from `develop`
2. Implement and test locally
3. Create pull request to `develop`
4. Code review (if team project)
5. Merge to `develop` after approval
6. Merge `develop` to `main` for deployment

### 5.3 Commit Messages

Follow conventional commits format:

```
type(scope): description

Examples:
feat(hero): add hero section with CTA
fix(form): correct email validation
docs(readme): update installation instructions
style(pricing): adjust card spacing
test(e2e): add FAQ accordion tests
```

---

## 6. Testing Strategy (Playwright E2E)

### 6.1 Test Organization

```
tests/
└── e2e/
    ├── hero.spec.ts
    ├── features.spec.ts
    ├── pricing.spec.ts
    ├── faq.spec.ts
    ├── contact-form.spec.ts
    └── navigation.spec.ts
```

### 6.2 Test Scenarios

#### Hero Section

- Verify hero heading and subheading are visible
- Test CTA button is clickable and navigates correctly
- Check responsive layout on mobile/tablet/desktop

#### Features Section

- Validate all feature cards render correctly
- Check icons/images load properly
- Test responsive grid layout

#### Pricing Section

- Verify all pricing tiers display correctly
- Test interactive elements (buttons, toggles if any)
- Validate pricing information accuracy

#### FAQ Section

- Test accordion expand/collapse functionality
- Verify all FAQ items are accessible
- Check keyboard navigation

#### Contact Form

- Test form field validation
- Verify successful submission flow
- Test error handling for invalid inputs
- Check Formspree integration

#### Navigation & Responsive Behavior

- Test mobile menu toggle
- Verify smooth scrolling to sections
- Test responsive breakpoints
- Check cross-browser compatibility

### 6.3 Test Configuration

- **Browsers**: Chromium, Firefox, WebKit (Safari)
- **Viewports**: Mobile (375px), Tablet (768px), Desktop (1280px)
- **Timeout**: Reasonable timeouts for network requests
- **Screenshots**: Capture on failure for debugging

---

## 7. CI/CD Pipeline (GitHub Actions)

### 7.1 Workflow Stages

```yaml
1. Install
- Checkout code
- Setup Node.js
- Cache dependencies
- Install dependencies

2. Lint
- Run ESLint
- Run Prettier check
- Fail if linting errors

3. Build
- Run Astro build
- Verify build success
- Cache build artifacts

4. Test
- Install Playwright browsers
- Run E2E tests
- Upload test results

5. Deploy
- Deploy to GitHub Pages
- Only if all previous steps pass
- Update deployment status
```

### 7.2 Configuration Requirements

- **Node.js version**: 18.x or 20.x (LTS)
- **Dependency caching**: Cache `node_modules` for faster builds
- **Environment variables**: Store sensitive data in GitHub Secrets
- **Deployment permissions**: Configure GitHub Pages settings
- **Branch protection**: Require passing checks before merge

### 7.3 Deployment Configuration

```yaml
# GitHub Pages deployment
- Build output directory: dist/
- Branch: gh-pages (or main with /docs)
- Custom domain: Optional
- HTTPS: Enforced
```

---

## 8. Technical Objectives

### 8.1 Performance

**Target Metrics**:

- Lighthouse Performance Score: > 90
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.0s
- Cumulative Layout Shift (CLS): < 0.1
- Total Blocking Time (TBT): < 300ms

**Optimization Strategies**:

- Optimize images (WebP format, responsive sizes)
- Minimize JavaScript bundle
- Leverage browser caching
- Use CDN for static assets (if applicable)
- Implement lazy loading for below-fold content
- Minify CSS and HTML

### 8.2 SEO

**Required Elements**:

- **Meta tags**: Title, description, keywords
- **Open Graph tags**: For social media sharing
  ```html
  <meta property="og:title" content="..." />
  <meta property="og:description" content="..." />
  <meta property="og:image" content="..." />
  <meta property="og:url" content="..." />
  ```
- **Twitter Card tags**: For Twitter sharing
- **JSON-LD structured data**: Organization, WebSite schemas
- **Sitemap**: Auto-generated sitemap.xml
- **robots.txt**: Configure crawler access
- **Canonical URLs**: Prevent duplicate content issues
- **Semantic HTML**: Proper heading hierarchy (h1-h6)

### 8.3 Accessibility

**WCAG 2.1 AA Compliance**:

- Semantic HTML5 elements
- ARIA labels and roles where needed
- Keyboard navigation support (Tab, Enter, Escape)
- Screen reader compatibility
- Color contrast ratios (4.5:1 minimum)
- Alt text for all images
- Focus indicators on interactive elements
- Skip navigation links
- Form labels and error messages
- Responsive text sizing

### 8.4 Code Quality

**Standards**:

- TypeScript for type safety
- Component modularity (single responsibility)
- Reusable utility functions
- Clear separation of concerns
- Documentation comments for complex logic
- Consistent code style (enforced by Prettier)
- No console errors or warnings in production
- Proper error handling

### 8.5 Responsive Design

**Approach**:

- Mobile-first development
- Fluid typography and spacing
- Flexible grid layouts
- Touch-friendly interactions (min 44x44px tap targets)
- Responsive images with srcset
- Test on real devices when possible

**Breakpoints**:

- Mobile: 320px - 639px
- Tablet: 640px - 1023px
- Desktop: 1024px+
- Large Desktop: 1280px+

---

## 9. Project Structure (Detailed)

```
landing-saas/
├── .github/
│   └── workflows/
│       └── deploy.yml           # CI/CD pipeline configuration
│
├── public/
│   ├── favicon.svg              # Site favicon
│   ├── robots.txt               # Crawler directives
│   └── images/                  # Static images
│       ├── logo.svg
│       ├── hero-bg.webp
│       └── features/
│
├── src/
│   ├── components/
│   │   ├── Hero.astro           # Hero section
│   │   ├── Features.astro       # Features section
│   │   ├── Pricing.astro        # Pricing section
│   │   ├── FAQ.astro            # FAQ section
│   │   ├── ContactForm.astro    # Contact form
│   │   ├── Footer.astro         # Footer
│   │   └── ui/                  # Reusable UI components
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       └── Input.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro         # Base layout with SEO
│   │
│   ├── pages/
│   │   └── index.astro          # Homepage
│   │
│   └── styles/
│       └── global.css           # Global styles + Tailwind import
│
├── tests/
│   └── e2e/
│       ├── hero.spec.ts
│       ├── features.spec.ts
│       ├── pricing.spec.ts
│       ├── faq.spec.ts
│       ├── contact-form.spec.ts
│       └── navigation.spec.ts
│
├── .eslintrc.cjs                # ESLint configuration
├── .prettierrc                  # Prettier configuration
├── .gitignore                   # Git ignore rules
├── agents.md                    # This file
├── astro.config.mjs             # Astro configuration
├── package.json                 # Dependencies and scripts
├── playwright.config.ts         # Playwright configuration
├── README.md                    # Project documentation
├── tailwind.config.mjs          # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

---

## 10. Formspree Integration Guide

### 10.1 Account Setup

1. **Create Account**:
   - Visit https://formspree.io/
   - Sign up with email or GitHub
   - Verify email address

2. **Create Form**:
   - Click "New Form" in dashboard
   - Name your form (e.g., "Landing SaaS Contact")
   - Copy the form endpoint URL

### 10.2 Form Configuration

**Endpoint Format**: `https://formspree.io/f/{form_id}`

**Basic Implementation**:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### 10.3 Form Validation Requirements

- **Client-side validation**: HTML5 validation attributes
- **Email validation**: Use `type="email"` for email fields
- **Required fields**: Mark with `required` attribute
- **Field naming**: Use descriptive `name` attributes
- **Honeypot protection**: Add hidden field to prevent spam

### 10.4 Success/Error Handling

**Success**:

- Redirect to thank you page or show success message
- Clear form fields
- Display confirmation to user

**Error**:

- Show user-friendly error message
- Preserve form data
- Provide retry option
- Log errors for debugging

### 10.5 GDPR Compliance

- **Privacy notice**: Link to privacy policy
- **Consent checkbox**: For marketing communications
- **Data handling**: Explain how data will be used
- **Right to deletion**: Provide contact for data removal
- **Secure transmission**: HTTPS only

### 10.6 Advanced Features

- **Custom redirect**: Add `_next` hidden field
- **Reply-to**: Include `_replyto` field
- **Subject line**: Use `_subject` field
- **CC/BCC**: Configure in Formspree dashboard
- **File uploads**: Enable in form settings
- **Spam filtering**: Enable reCAPTCHA or hCaptcha

---

## 11. Development Workflow

### 11.1 Initial Setup

```bash
# Navigate to project directory
cd landing-saas

# Initialize Astro project
npm create astro@latest . -- --template minimal --yes

# Install dependencies
npm install

# Install Tailwind integration
npx astro add tailwind

# Install development dependencies
npm install -D @playwright/test eslint prettier
```

### 11.2 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Run tests
npm run test

# Run tests in UI mode
npm run test:ui
```

### 11.3 Pre-deployment Checklist

- [ ] All sections implemented and tested
- [ ] Responsive design verified on all breakpoints
- [ ] Accessibility audit passed
- [ ] Lighthouse scores meet targets (>90)
- [ ] SEO meta tags configured
- [ ] Forms tested and working
- [ ] All images optimized
- [ ] No console errors
- [ ] E2E tests passing
- [ ] Cross-browser testing completed
- [ ] GitHub Actions workflow configured
- [ ] README updated with deployment instructions

---

## 12. Maintenance & Updates

### 12.1 Regular Tasks

- **Dependencies**: Update monthly for security patches
- **Content**: Review and update copy quarterly
- **Performance**: Monitor Lighthouse scores monthly
- **Analytics**: Review user behavior and optimize
- **A/B Testing**: Test variations of CTAs and copy

### 12.2 Monitoring

- **Uptime**: Monitor site availability
- **Performance**: Track Core Web Vitals
- **Errors**: Monitor for JavaScript errors
- **Forms**: Track submission success rate
- **SEO**: Monitor search rankings and traffic

---

## 13. Resources & References

### 13.1 Official Documentation

- **Astro**: https://docs.astro.build/
- **TailwindCSS**: https://tailwindcss.com/docs
- **Playwright**: https://playwright.dev/
- **Formspree**: https://help.formspree.io/

### 13.2 Design Inspiration

- **Reference**: https://specifyapp.com/
- **Focus**: Clean, modern B2B SaaS aesthetic
- **Elements**: Hero with clear value prop, feature highlights, social proof

### 13.3 Tools

- **Lighthouse**: Performance and SEO auditing
- **WAVE**: Accessibility testing
- **PageSpeed Insights**: Performance analysis
- **Can I Use**: Browser compatibility checking

---

## Conclusion

This document serves as the single source of truth for all development decisions in the Landing-SaaS project. All team members and AI agents must adhere to these guidelines to ensure consistency, quality, and maintainability.

**Next Phase**: Upon approval of this document, proceed to Phase 1 - Detailed Implementation Plan.

---

_Document Version: 1.0_  
_Last Updated: November 22, 2025_  
_Status: Awaiting Approval_
