# **Promptly — System Architecture Document (SAD)**

Version: 1.0  
 Product: **Promptly**  
 System Type: Static Documentation Platform  
 Architecture Pattern: Client-Side Single Page Application (SPA)

---

# **1\. Architecture Overview**

Promptly is designed as a **frontend-only static documentation platform**.

All content is stored as Markdown files within the project repository and rendered dynamically by the frontend application.

There is **no backend server and no database**.

System characteristics:

Static hosting  
Frontend-only architecture  
Markdown-based content system  
Client-side routing  
Documentation-style navigation

Primary frontend framework:

* React

Build tool:

* Vite

Deployment platform:

* GitHub Pages

---

# **2\. High-Level System Architecture**

The system follows a **static SPA architecture**.

User Browser  
     │  
     ▼  
React Application  
     │  
     ├ Router Layer  
     ├ Layout Components  
     ├ Sidebar Navigation  
     ├ Lesson Renderer  
     └ Content Service  
     │  
     ▼  
Markdown Lesson Files  
     │  
     ▼  
Static Hosting (GitHub Pages CDN)

The browser downloads the static application bundle, which loads and renders lesson content dynamically.

---

# **3\. Architectural Layers**

Promptly consists of four logical layers.

Presentation Layer  
Application Layer  
Content Layer  
Infrastructure Layer

Each layer has a distinct responsibility.

---

# **4\. Presentation Layer**

The presentation layer is responsible for **user interface rendering**.

Framework used:

* React

Styling framework:

* Tailwind CSS

This layer displays:

header  
sidebar navigation  
lesson content  
roadmap page  
footer  
---

# **5\. UI Component Architecture**

The UI is composed of reusable React components.

Core component hierarchy:

App  
├ Router  
│   ├ HomePage  
│   ├ RoadmapPage  
│   ├ TopicPage  
│   └ NotFoundPage  
│  
└ Layout  
     ├ Header  
     ├ Sidebar  
     ├ ScrollProgress  
     ├ Content Area  
     └ Footer  
---

## **Header Component**

Responsibilities:

display product name  
provide top-level navigation  
link to GitHub repository

File location:

src/components/Header.jsx  
---

## **Sidebar Component**

The sidebar is the **primary navigation system**.

Responsibilities:

display lesson sections  
list lessons within each section  
highlight active lesson  
allow navigation between topics

File location:

src/components/Sidebar.jsx

The sidebar dynamically loads lesson metadata from the content service.

---

## **Layout Component**

The layout component structures the page.

Responsibilities:

render header  
render sidebar  
render main content area  
render footer

File location:

src/components/Layout.jsx  
---

## **ScrollProgress Component**

This component displays the **reading progress bar**.

Responsibilities:

calculate scroll position  
update progress indicator width  
display progress bar at top of page

File location:

src/components/ScrollProgress.jsx  
---

# **6\. Application Layer**

The application layer manages:

routing  
navigation logic  
lesson loading  
content rendering  
---

## **Router System**

Client-side routing uses:

* React Router

Router type:

HashRouter

Routes used:

/                  → HomePage  
/roadmap           → RoadmapPage  
/topic/:slug       → TopicPage  
\*                  → NotFoundPage

File location:

src/router/AppRouter.jsx  
---

# **7\. Content Layer**

The content layer stores and manages educational content.

Promptly uses a **file-based content system**.

All lessons are written as Markdown files.

Content directory:

src/content/

Example structure:

src/content/

foundations/  
patterns/  
reasoning/  
advanced/

Example lesson file:

src/content/foundations/introduction.md  
---

# **8\. Lesson Metadata System**

Each lesson file contains frontmatter metadata.

Example:

\---  
title: Introduction to Prompt Engineering  
slug: introduction  
section: foundations  
order: 1  
description: Learn what prompt engineering is.  
duration: 5  
\---

Metadata is used to generate:

sidebar navigation  
lesson ordering  
previous/next lesson links  
roadmap page  
---

# **9\. Content Service Layer**

Promptly includes a content service that acts as the interface between UI and Markdown files.

File location:

src/services/contentService.js

Responsibilities:

load Markdown files  
parse metadata  
generate lesson index  
provide navigation data

Markdown files are loaded using:

import.meta.glob()

Example usage:

import.meta.glob('../content/\*\*/\*.md', { eager: true })  
---

## **Core Content Service Functions**

The content service exposes the following functions.

getAllSections()  
getAllLessons()  
getLessonsBySection(sectionId)  
getLessonBySlug(slug)  
getLessonNavigation(slug)

These functions supply data to the UI.

---

# **10\. Navigation Engine**

The navigation engine calculates lesson order.

Utility file:

src/utils/navigation.js

Responsibilities:

flatten lesson structure  
sort lessons by order  
determine previous lesson  
determine next lesson

Example functions:

flattenLessons()  
getPrevNext()

This powers:

sidebar navigation  
lesson navigation buttons  
---

# **11\. Markdown Rendering Engine**

Markdown content is rendered using:

* react-markdown

Markdown plugins:

remark-gfm  
rehype-raw  
rehype-prism-plus

Capabilities:

render headings  
render lists  
render tables  
display code blocks  
render prompt examples

Syntax highlighting:

* PrismJS

---

# **12\. Data Flow**

Example flow when a user opens a lesson page.

User opens /topic/introduction  
     │  
Router matches TopicPage  
     │  
TopicPage requests lesson from ContentService  
     │  
ContentService retrieves Markdown file  
     │  
Markdown content parsed  
     │  
ReactMarkdown renders lesson  
     │  
UI displays lesson content  
---

# **13\. Infrastructure Layer**

Infrastructure handles deployment and hosting.

Hosting platform:

* GitHub Pages

Build system:

* Vite

Continuous deployment:

* GitHub Actions

Deployment flow:

Developer pushes code  
     │  
GitHub repository  
     │  
GitHub Actions workflow  
     │  
Build project  
     │  
Deploy dist/ folder to GitHub Pages  
---

# **14\. Performance Strategy**

Promptly prioritizes performance through:

static hosting  
minimal JavaScript runtime  
markdown content pipeline  
CDN delivery

Target metrics:

Page load \< 2 seconds  
Lighthouse score \> 90  
---

# **15\. Security Model**

Security measures include:

HTTPS via GitHub Pages  
Content Security Policy  
safe external links

Example safe external link pattern:

target="\_blank" rel="noopener noreferrer"  
---

# **16\. Scalability Strategy**

Promptly scales through **content expansion rather than infrastructure changes**.

Adding new lessons only requires creating new Markdown files.

Example workflow:

create new lesson markdown file  
add metadata  
commit to repository  
deploy

No infrastructure changes are required.

---

# **17\. Future Architecture Extensions**

Future features may require architectural upgrades.

Examples:

search system  
prompt playground  
user progress tracking  
interactive examples

These features would introduce:

backend services  
authentication system  
database  
---

# **Final Architecture Summary**

Promptly is a **static documentation platform** that delivers prompt engineering knowledge through a Markdown-based content system and a React frontend application.

Architecture priorities:

simplicity  
performance  
maintainability  
content scalability  
developer-friendly structure

The system is optimized for **fast static delivery, structured learning navigation, and easy content expansion**.

