# **Promptly — UI/UX Design Document**

Version: 1.0  
 Product Name: **Promptly**  
 Category: Prompt Engineering Knowledge Platform  
 Design Inspiration: JSON Web Token

---

# **1\. Design Philosophy**

Promptly must **look and feel like a developer documentation platform**, not a blog or generic learning website.

The UI should communicate:

* technical credibility

* clarity

* minimalism

* focus on content

The design philosophy follows principles used in modern documentation sites.

Core principles:

content-first design  
large whitespace  
clear typography  
minimal UI noise  
fast navigation

The interface must **prioritize reading and learning**, not visual decoration.

---

# **2\. Overall Layout Structure**

Promptly follows a **documentation layout pattern**.

\------------------------------------------------  
Header  
\------------------------------------------------  
Sidebar Navigation | Main Content  
                  |  
                  |  
                  |  
\------------------------------------------------  
Footer  
\------------------------------------------------

### **Layout Characteristics**

Header

fixed position  
minimal height  
simple navigation

Sidebar

primary navigation system  
sticky while scrolling

Main Content

central reading column  
optimized for readability  
---

# **3\. Header Design**

Header style should closely resemble the JWT documentation header.

### **Header Layout**

Promptly (logo)                 GitHub

### **Header Properties**

Height

64px

Background

white

Border

1px subtle gray bottom border

Position

sticky  
top: 0

The header should remain visible during scrolling.

---

# **4\. Sidebar Navigation**

The sidebar is the **primary navigation system**.

### **Sidebar Width**

260px

### **Sidebar Behavior**

Desktop

sticky sidebar  
independent scroll  
visible at all times

Mobile

hidden by default  
opened via hamburger menu  
slides in as overlay

### **Sidebar Structure Example**

Prompt Engineering

Introduction  
Prompt Structure

Prompt Patterns  
Role Prompting  
Zero-Shot Prompting  
Few-Shot Prompting

Reasoning  
Chain-of-Thought Prompting

Advanced  
Prompt Refinement

### **Active Lesson Styling**

Background

indigo-50

Text Color

indigo-600

Font Weight

medium  
---

# **5\. Main Content Area**

The main reading area must prioritize **content readability**.

### **Content Container**

Max width

760px

Padding

32px

Margin

centered layout

This prevents long line lengths which reduce readability.

---

# **6\. Typography System**

Typography should resemble **developer documentation platforms**.

Primary Font

Inter

Code Font

JetBrains Mono

### **Font Scale**

Page Title

36px  
font-weight: 700

Section Heading

26px  
font-weight: 600

Subheading

20px  
font-weight: 600

Body Text

16px  
line-height: 1.7

Code Blocks

JetBrains Mono  
font-size: 15px  
---

# **7\. Color Palette**

Promptly should use a **calm developer-friendly palette**.

Primary Color

\#4F46E5

Accent Color

\#06B6D4

Background

\#F8FAFC

Content Background

\#FFFFFF

Primary Text

\#111827

Secondary Text

\#6B7280

Border Color

\#E5E7EB

This palette produces a **clean and technical interface**.

---

# **8\. Lesson Content Styling**

Each lesson page follows a structured documentation format.

Lesson sections:

Introduction  
Concept Explanation  
Example Prompt  
Example Output  
Key Takeaway

### **Prompt Block Styling**

background: \#F1F5F9  
border-left: 4px solid \#4F46E5  
padding: 16px  
font-family: JetBrains Mono

### **Output Block Styling**

background: \#F8FAFC  
border: 1px solid \#E5E7EB  
padding: 16px  
---

# **9\. Code Block Design**

Syntax highlighting should use:

* PrismJS

Code block styling

background: \#0F172A  
text color: \#E2E8F0  
border-radius: 8px  
padding: 16px  
---

# **10\. Scroll Progress Indicator**

A thin progress bar should appear at the top.

Purpose

show lesson reading progress

Properties

height: 3px  
color: primary indigo  
position: fixed  
top: 0

The bar fills as the user scrolls through the lesson.

---

# **11\. Roadmap Page Design**

The roadmap page shows the complete learning structure.

Each lesson is displayed as a **minimal card**.

Card properties

border: 1px solid \#E5E7EB  
border-radius: 8px  
padding: 16px  
background: white

Card hover effect

shadow-sm  
translateY(-1px)

Card content

Lesson title  
Short description  
Reading duration  
---

# **12\. Micro Interactions**

Animations must remain **subtle and minimal**.

Allowed interactions

button hover  
card hover  
sidebar item hover

Avoid

large animations  
parallax effects  
heavy motion

Documentation platforms should feel **stable and calm**.

---

# **13\. Responsive Design**

Desktop

sidebar visible  
content centered

Tablet

collapsible sidebar

Mobile

hamburger menu  
sidebar overlay  
full width content  
---

# **14\. UX Motivation Elements**

Small UI elements encourage engagement.

Lesson duration

5 min read

Next lesson prompt

Continue Learning →

Scroll progress indicator.

These features encourage users to continue reading.

---

# **15\. Accessibility Requirements**

Ensure:

semantic HTML headings  
high contrast text  
keyboard navigation

Target accessibility score

Lighthouse \> 90  
---

# **16\. Performance Requirements**

Promptly should remain extremely fast.

Strategies

static content  
minimal JavaScript  
optimized bundle

Target performance

page load \< 2 seconds  
---

# **Final UI Goal**

Promptly should visually feel like:

A developer documentation platform  
for prompt engineering.

Inspired by the simplicity and clarity of:

* JSON Web Token

The final UI must be:

clean  
technical  
minimal  
developer-friendly

