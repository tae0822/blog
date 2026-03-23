# Tae's Tech Blog 🚀
> **Architecture-driven personal blog** designed for high-performance content delivery and interactive technical documentation.

## 💡 Why I Built This
Most blogging platforms force a trade-off between **writing speed** and **content flexibility**. I built this platform to achieve both:
- **Speed**: Standard Markdown for quick daily logs.
- **Interactivity**: MDX-powered custom React components for deep-dive technical tutorials.

## 🛠 Strategic Engineering Choices

### 1. High-Performance Content Pipeline (Contentlayer)
Instead of fetching data at runtime, I integrated **Contentlayer** to pre-compile Markdown into type-safe JSON. 
- **Result**: Reduced build-time errors and achieved near-instant page transitions by leveraging Next.js's static optimization.

### 2. Scalable SEO Architecture (Metadata API)
Beyond basic meta tags, I engineered a dynamic SEO system:
- **Automated OpenGraph**: Each post generates unique social sharing previews.
- **Search Visibility**: Optimized indexing using a hybrid of Static Site Generation (SSG) and dynamic metadata injection.

### 3. User-Centric Theme Engineering
Dark mode isn't just a toggle; it's about **UX stability**.
- **Hydration Fix**: Implemented a `Mounted State Pattern` to prevent the "flicker" effect that common Next.js theme implementations suffer from.

## 🔥 Critical Problem Solving

### Case Study: Resolving Strict MDX Compiler Constraints
**Context**: During development, complex UI components inside Markdown lists caused the MDX compiler to crash with `Unexpected lazy line` errors.

**Analysis**: The parser was failing to maintain the block-level context when encountering nested React components.

**Resolution**: 
- Re-architected the MDX structure to enforce strict block isolation.
- Standardized prefixing for all container-level elements.
- **Outcome**: Created a robust, error-proof content template that ensures 100% build stability.

## 🎬 Project Showcase

#### ✅ Optimized Reading Experience & UX Stability
*Ensuring maximum readability with a flicker-free dark mode and responsive typography that respects user preferences.*
<img src="https://github.com/user-attachments/assets/edce6dcd-9cbf-4ec2-abca-e120305a1d30" width="100%" />

---

## 📊 Technical Specs & Growth
- **Performance**: Lighthouse score of 95+ in SEO and Accessibility.
- **Type Safety**: 100% TypeScript coverage for content schemas.
- **Future Scale**: Planning to migrate from local file-based storage to a Headless CMS (Sanity) as the content volume grows.

---
[Live Demo](https://blog-silk-six-64.vercel.app) | [GitHub Repo](https://github.com/tae0822/blog)
