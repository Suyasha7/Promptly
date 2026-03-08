# **Promptly — Technical Stack Document**

Version: 1.0  
 Product Name: **Promptly**  
 Category: Prompt Engineering Documentation Platform  
 Architecture Type: Static Documentation Web Application

---

# **1\. System Overview**

**Promptly** is a documentation-style learning platform that teaches prompt engineering concepts using structured lessons and practical examples.

The system is built as a **static Single Page Application (SPA)** where all educational content is written in Markdown files and rendered dynamically in the frontend.

The platform uses a **frontend-only architecture**, meaning there is no backend server or database.

Content is loaded from Markdown files and delivered through static hosting.

Hosting platform:

* GitHub Pages

Build tool:

* Vite

Frontend framework:

* React

---

# **2\. Frontend Framework**

Primary UI framework:

* React

React is used to build:

* page components

* navigation system

* documentation layout

* markdown rendering interface

* lesson navigation logic

Reasons for choosing React:

* component-based architecture

* strong ecosystem

* ideal for dynamic documentation interfaces

* excellent compatibility with Vite

---

# **3\. Build Tool**

Build system:

* Vite

Responsibilities:

* development server

* module bundling

* asset optimization

* production build generation

Benefits:

* extremely fast development server

* optimized bundle generation

* minimal configuration

* modern ES module support

Build output directory:

dist/  
---

# **4\. Styling System**

UI styling framework:

* Tailwind CSS

Typography plugin:

* @tailwindcss/typography

Tailwind manages:

* layout grid

* typography system

* responsive design

* UI component styling

* color palette

Benefits:

* rapid UI development

* consistent design system

* minimal CSS maintenance

* excellent documentation layout support

Configuration file:

tailwind.config.js  
---

# **5\. Routing System**

Client-side routing library:

* React Router

Router type:

HashRouter

HashRouter is used because static hosts like GitHub Pages do not support server-side route fallbacks.

Routes used in Promptly:

/                 → HomePage  
/roadmap          → RoadmapPage  
/topic/:slug      → TopicPage  
\*                 → NotFoundPage  
---

# **6\. Markdown Rendering System**

Lesson content is written using Markdown.

Markdown rendering library:

* react-markdown

Markdown plugins:

remark-gfm  
rehype-raw  
rehype-prism-plus

Capabilities provided:

* GitHub-flavored markdown

* HTML inside markdown

* syntax highlighted code blocks

* structured lesson formatting

Markdown files are located in:

src/content/  
---

# **7\. Code Syntax Highlighting**

Syntax highlighting engine:

* PrismJS

PrismJS is used for highlighting:

* prompt examples

* code snippets

* technical demonstrations

This improves readability and developer familiarity.

---

# **8\. Content Management System**

Promptly uses a **file-based content system**.

All lessons are stored as Markdown files inside the project repository.

Example structure:

src/content/

foundations/  
patterns/  
reasoning/  
advanced/

Example lesson file:

src/content/foundations/introduction.md

Advantages of this approach:

* no database required

* version-controlled content

* easy content creation

* static deployment compatibility

---

# **9\. Content Loading Strategy**

Markdown files are loaded using:

import.meta.glob()

Example usage:

import.meta.glob('../content/\*\*/\*.md', { eager: true })

Benefits:

* automatic lesson discovery

* build-time content bundling

* fast client-side loading

* ideal for small to medium documentation sites

---

# **10\. Content Metadata Parsing**

Each Markdown file contains frontmatter metadata.

Example metadata:

title  
slug  
section  
order  
description  
duration

Metadata is parsed using a custom frontmatter parser that splits the Markdown file on the `---` delimiter.

This avoids Node.js dependencies and keeps the system fully frontend-compatible.

---

# **11\. Content Service Layer**

A dedicated content service manages all lesson data.

File location:

src/services/contentService.js

Responsibilities:

* load Markdown content

* parse metadata

* generate lesson structure

* provide navigation data

Key exported functions:

getAllSections()  
getAllLessons()  
getLessonsBySection(sectionId)  
getLessonBySlug(slug)  
getLessonNavigation(slug)  
---

# **12\. Navigation Engine**

Navigation utilities are stored in:

src/utils/navigation.js

Responsibilities:

* flatten lesson hierarchy

* determine lesson order

* compute previous/next lesson

Example functions:

flattenLessons()  
getPrevNext()

This system powers:

* sidebar navigation

* lesson navigation buttons

---

# **13\. UI Component System**

Promptly uses a modular component structure.

Core UI components:

Header  
Sidebar  
Layout  
Footer  
LessonNavigation  
ScrollProgress

Component responsibilities:

Header → top navigation  
 Sidebar → documentation navigation  
 Layout → page layout wrapper  
 LessonNavigation → previous/next lesson buttons  
 ScrollProgress → reading progress indicator

---

# **14\. Deployment Infrastructure**

Hosting platform:

* GitHub Pages

Benefits:

* global CDN

* free hosting

* high reliability

* simple deployment

Deployment pipeline uses:

* GitHub Actions

Pipeline steps:

Install dependencies  
Run build  
Deploy dist folder  
---

# **15\. Analytics and Monitoring**

User analytics system:

* Google Analytics

Metrics tracked:

* page views

* lesson engagement

* user sessions

* device types

Performance monitoring:

* Google Lighthouse

Target metrics:

Performance \> 90  
Accessibility \> 90  
SEO \> 90  
---

# **16\. Security Measures**

Security practices implemented:

HTTPS via GitHub Pages  
Content Security Policy  
safe external links

Example external link protection:

target="\_blank" rel="noopener noreferrer"  
---

# **17\. Development Tooling**

Developer tooling includes:

Code formatting

* Prettier

Code linting

* ESLint

Optional commit hooks

* Husky

Benefits:

* consistent code style

* early error detection

* improved developer experience

---

# **18\. Performance Strategy**

Promptly uses several strategies to maintain fast performance.

Strategies:

static content delivery  
minimal JavaScript runtime  
CDN hosting  
optimized bundle generation

Target performance:

page load time \< 2 seconds  
---

# **Final Tech Stack Summary**

Core stack:

React  
 Vite  
 Tailwind CSS  
 React Router  
 react-markdown  
 PrismJS

Supporting tools:

remark-gfm  
 rehype-raw  
 rehype-prism-plus

Infrastructure:

GitHub Pages  
 GitHub Actions

Monitoring:

Google Analytics  
 Google Lighthouse

---

# **Final Engineering Goal**

Promptly should function as a **fast, developer-friendly documentation platform** that delivers structured prompt engineering knowledge through a Markdown-based content system and a clean technical interface inspired by modern documentation platforms.

