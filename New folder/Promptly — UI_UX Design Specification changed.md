## **Promptly — UI/UX Design Specification**

*A developer learning platform for Prompt Engineering inspired by the UX philosophy of* HackerRank *and documentation navigation similar to* JSON Web Token.

---

# **1\. Product Overview**

## **Platform Purpose**

Promptly is a **developer-focused learning platform for Prompt Engineering** that blends:

• structured documentation  
 • interactive experimentation  
 • coding-platform style challenges  
 • progress-based learning

The product behaves like a **hybrid of developer documentation \+ learning platform \+ practice arena**.

---

## **Core User Journey**

### **Learning Flow**

Landing Page  
  ↓  
Explore Learning Modules  
  ↓  
Open Lesson  
  ↓  
Read Concept \+ Examples  
  ↓  
Test Prompt in Playground  
  ↓  
Complete Challenge  
  ↓  
Track Progress in Dashboard

### **Experimentation Flow**

Open Prompt Playground  
  ↓  
Write Prompt  
  ↓  
Run Test  
  ↓  
Evaluate Output  
  ↓  
Refine Prompt  
---

## **Primary User Actions**

Users will primarily:

• browse prompt engineering lessons  
 • read structured guides  
 • copy prompt examples  
 • experiment with prompts  
 • solve prompt challenges  
 • track progress

---

# **2\. Design Philosophy**

Inspired by developer platforms like HackerRank, the UI follows five principles.

### **1\. Developer-First UI**

Interfaces resemble **coding platforms and documentation systems**.

### **2\. Minimal Cognitive Load**

No visual clutter.

### **3\. Structured Learning**

Clear hierarchy and navigation.

### **4\. Fast Navigation**

Keyboard-friendly and sidebar-driven.

### **5\. Dark Mode First**

Dark interface optimized for long reading sessions.

---

# **3\. Layout Architecture**

## **Global Layout Grid**

Left Sidebar      Content Area      Right Utility Panel  
(260px)           (max 900px)       (280px optional)

### **Page Width**

Max Page Width: 1440px  
Content Container: 880–900px  
Sidebar Width: 260px  
Header Height: 64px  
---

## **Spacing System**

Base spacing grid:

4px unit

Common values:

4px  
8px  
16px  
24px  
32px  
48px  
64px  
---

## **Content Readability**

To match developer documentation:

max-width: 760px  
line-height: 1.65  
---

# **4\. Design System**

---

# **Typography**

Primary font:

Inter

Code font:

JetBrains Mono  
---

## **Typography Scale**

| Element | Size |
| ----- | ----- |
| H1 | 42px |
| H2 | 30px |
| H3 | 24px |
| Body | 16px |
| Caption | 14px |

---

# **Color System**

## **Primary Theme (Green-Bluish Developer Style)**

Primary:

\#10B981 (Emerald)

Accent:

\#22D3EE (Cyan)  
---

## **Dark Mode Palette**

Background:

\#0B1220

Secondary background:

\#111827

Card background:

\#1F2937

Text:

Primary: \#E5E7EB  
Secondary: \#9CA3AF  
---

## **Light Mode Palette**

Background:

\#F9FAFB

Text:

\#111827

Cards:

\#FFFFFF  
---

# **Icon System**

Icon library:

Lucide Icons

Common icons:

• copy  
 • code  
 • lesson  
 • progress  
 • settings

---

# **5\. Navigation Architecture**

---

# **Header Navigation**

Logo  
Learn  
Practice  
Playground  
Docs  
Community  
GitHub  
Theme Toggle  
Login / Sign Up  
---

# **Sidebar Navigation**

Used for documentation navigation.

Example:

Introduction  
  What is Prompt Engineering  
  Why it Matters

Foundations  
  Prompt Structure  
  Instruction Clarity

Prompt Patterns  
  Zero-Shot  
  Few-Shot  
  Role Prompting

Reasoning  
  Chain of Thought

Advanced  
  Prompt Refinement  
---

# **Breadcrumb System**

Example:

Home \> Foundations \> Prompt Structure  
---

# **6\. Core UI Components**

---

# **Header Component**

Layout:

Logo | Navigation | GitHub | Theme Toggle | Login | Sign Up

Behavior:

• sticky header  
 • theme toggle animation  
 • dropdown menus

---

# **Sidebar Component**

Features:

• collapsible sections  
 • active lesson highlight  
 • scrollable

Example:

Foundations  
 \> Prompt Structure  
 \> Instruction Clarity  
---

# **Card Component**

Used for modules and challenges.

Structure:

Card  
 Title  
 Description  
 Difficulty  
 Tags

Hover behavior:

elevation \+ border highlight  
---

# **Code Block**

Example:

Prompt Example

Explain recursion in simple terms.

Features:

• syntax highlighting  
 • copy button  
 • language indicator

---

# **Copy Button**

Top-right of code blocks.

Behavior:

Click → icon changes → "Copied"  
---

# **Tabs**

Used for:

Prompt | Output | Explanation  
---

# **Difficulty Badge**

Example:

Easy  
Medium  
Hard

Colors:

Green  
Yellow  
Red  
---

# **Prompt Editor**

Editor style similar to coding editors.

Features:

monospace  
line numbers  
run prompt  
output panel  
---

# **Progress Tracker**

Displays learning progress.

Example:

Module 3 / 10

or

Progress bar  
---

# **Callout Box**

Example:

Tip  
Warning  
Example  
Important  
---

# **Modal Component**

Used for:

settings  
prompt results  
challenge instructions  
---

# **7\. Page-by-Page UI Breakdown**

---

# **1 Landing Page**

### **Sections**

Hero Section  
Platform Features  
Learning Modules  
Community Section  
CTA  
Footer  
---

### **Hero Layout**

Headline  
Subheadline  
Primary CTA  
Secondary CTA  
Illustration  
---

### **Example Headline**

Master Prompt Engineering  
Build smarter AI interactions.  
---

# **2 Learning Modules Page**

Layout:

Sidebar  
Module Cards Grid

Example cards:

Prompt Fundamentals  
Prompt Patterns  
Prompt Reasoning  
Advanced Prompting  
---

# **3 Prompt Playground**

Layout:

Prompt Editor  
Output Panel  
Examples Panel

Structure:

Editor | Output  
---

# **4 Prompt Challenge Page**

Structure:

Challenge description  
Prompt editor  
Output area  
Hints  
Discussion  
---

# **5 User Dashboard**

Sections:

Learning Progress  
Completed Lessons  
Active Challenges  
Recommended Lessons  
---

# **6 Documentation Page**

Layout:

Sidebar | Article Content

Example:

Title  
Description  
Sections  
Code Examples  
Practice  
---

# **7 Authentication Pages**

Simple developer style layout.

Centered Card  
Login Form  
OAuth options

Fields:

Email  
Password  
Login Button  
---

# **8 Interaction Design**

---

# **Hover States**

Buttons:

color darken

Cards:

elevation increase

Links:

underline  
---

# **Theme Toggle**

Smooth transition:

300ms fade  
---

# **Sidebar Interaction**

collapse / expand animation  
---

# **Code Copy Animation**

icon changes  
tooltip appears  
---

# **Page Transitions**

fade transition  
150–200ms  
---

# **9 Responsive Strategy**

---

# **Desktop**

Sidebar visible  
Full layout  
---

# **Tablet**

Sidebar collapsible  
Reduced width  
---

# **Mobile**

Layout becomes:

Top nav  
Hamburger menu  
Stacked content  
---

# **Breakpoints**

Mobile \< 768px  
Tablet \< 1024px  
Desktop \> 1024px  
---

# **10 Developer Implementation Guide**

---

## **Recommended Tech Stack**

React  
Vite  
TailwindCSS  
---

## **Component Architecture**

App  
├ Layout  
│   ├ Header  
│   ├ Sidebar  
│   └ Footer  
│  
├ Pages  
│   ├ LandingPage  
│   ├ ModulesPage  
│   ├ LessonPage  
│   ├ PlaygroundPage  
│   ├ ChallengePage  
│   └ Dashboard  
│  
├ Components  
│   ├ Card  
│   ├ CodeBlock  
│   ├ CopyButton  
│   ├ Tabs  
│   ├ Modal  
│   ├ ProgressBar  
│   ├ PromptEditor  
│  
└ Services  
    └ contentService  
---

## **Folder Structure**

src  
components  
pages  
layout  
hooks  
services  
styles  
assets  
---

# **11 Animation Guidelines**

Use subtle transitions only.

Recommended library:

Framer Motion

Examples:

• page transitions  
 • card hover  
 • dropdown menus

---

# **12 Logo Concept**

Logo style:

Minimal developer aesthetic

Concept:

Promptly

Symbol idea:

\>\_

Combined with a **green-bluish gradient**.

Example colors:

\#10B981 → \#22D3EE  
---

# **13 Footer Design**

Sections:

Product  
Docs  
Community  
Resources

Footer also includes:

• GitHub link  
 • tech stack credits  
 • copyright

---

# **14 Future Scalability**

UI must support:

AI prompt evaluation  
leaderboards  
community discussions  
prompt marketplace  
---

# **15 Component Checklist**

Header  
Sidebar  
Breadcrumb  
ModuleCard  
PromptEditor  
CodeBlock  
CopyButton  
Tabs  
Callout  
ProgressBar  
Modal  
Footer  
---

# **16 MVP Scope**

First release should include:

Landing page  
Learning modules  
Lesson pages  
Prompt playground  
Sidebar navigation  
Code examples  
Dark mode  
---

# **17 Future Features**

Later expansions:

AI feedback on prompts  
challenge leaderboard  
prompt competitions  
community discussions  
profile system  
