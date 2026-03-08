# **Promptly — Product Requirements Document (PRD)**

Version: 1.0  
 Product Name: **Promptly**  
 Product Category: Developer Learning Platform  
 Product Type: Documentation-style knowledge platform

---

# **1\. Product Overview**

**Promptly** is a documentation-style platform designed to teach **Prompt Engineering fundamentals** through structured theoretical content and practical examples.

The product follows a **developer documentation interface**, inspired by the layout and usability principles of the JSON Web Token.

Unlike traditional tutorial websites, Promptly focuses on:

* structured knowledge

* clear concept explanations

* quick navigation between topics

* minimal interface distractions

The goal is to create a **reference-style knowledge system for prompt engineering** that developers can both **learn from and revisit when needed**.

---

# **2\. Product Vision**

Promptly aims to become a **central documentation hub for prompt engineering knowledge**.

The long-term vision is to provide a platform where developers can:

* learn prompt engineering fundamentals

* explore prompting techniques

* reference prompt examples quickly

* understand why prompts produce certain AI outputs

The platform should feel similar to **technical documentation used by developer tools**, rather than a traditional course website.

---

# **3\. Problem Statement**

Learning prompt engineering is currently difficult because most resources are:

* scattered across blogs and videos

* inconsistent in quality

* lacking structured explanation

* focused on isolated tricks instead of principles

As a result, beginners struggle to understand:

* how prompts influence AI responses

* which prompt structures are effective

* how to improve prompt reliability

Promptly solves this problem by providing **structured documentation-style learning content** for prompt engineering.

---

# **4\. Target Users**

## **Primary Users**

Engineering students and beginner developers exploring AI.

Characteristics:

* learning about large language models

* experimenting with AI tools

* seeking structured educational resources

Goals:

* understand prompt engineering fundamentals

* learn practical prompting techniques

* improve AI output quality through better prompts

---

## **Secondary Users**

Developers integrating AI into applications.

Goals:

* reference prompt engineering techniques

* learn prompt design patterns

* improve reliability of AI interactions

---

# **5\. Value Proposition**

Promptly provides a **structured knowledge system for prompt engineering** with a developer-friendly interface.

Key advantages:

1. Documentation-style learning interface

2. Structured curriculum of prompt engineering concepts

3. Practical examples of prompts and outputs

4. Consistent lesson structure

5. Fast navigation through topics

Promptly functions as both a **learning platform and a reference resource**.

---

# **6\. Product Experience Philosophy**

Promptly follows a **documentation-first UX philosophy**.

The interface prioritizes:

clarity  
technical readability  
content hierarchy  
minimal UI distractions  
fast navigation

The experience should resemble modern developer documentation systems.

Users should always be able to understand:

where they are  
what concept they are reading  
what topic comes next

The design should encourage **focused reading and exploration of concepts**.

---

# **7\. Navigation Model**

Promptly uses **documentation-style navigation**.

Primary navigation system:

Sidebar navigation

Secondary navigation:

Roadmap page

Overall page structure:

Header  
Sidebar  
Main content area  
Footer

The sidebar contains the complete knowledge hierarchy and remains visible during reading.

---

# **8\. Core Product Features**

The MVP version of Promptly includes the following features.

---

## **8.1 Homepage**

Purpose:

Introduce the platform and guide users into the learning system.

Homepage elements:

* product introduction

* short description of prompt engineering learning goals

* call-to-action to start learning

Example hero text:

Promptly

Learn prompt engineering through structured lessons,  
real prompt examples, and practical techniques.  
---

## **8.2 Sidebar Navigation**

The sidebar provides the primary navigation for the platform.

Capabilities:

* display all sections of the curriculum

* list lessons inside each section

* highlight the active lesson

Example structure:

Prompt Engineering

Introduction  
Prompt Structure

Prompt Patterns  
Role Prompting  
Zero-Shot Prompting  
Few-Shot Prompting

Reasoning  
Chain-of-Thought Prompting

The sidebar remains **sticky during scrolling**.

---

## **8.3 Roadmap Page**

The roadmap page shows the entire learning structure.

Each lesson displays:

* title

* short description

* estimated reading time

Example:

Prompt Engineering Foundations

Introduction — 5 min  
Prompt Structure — 6 min

This page provides a clear overview of the learning path.

---

## **8.4 Lesson Pages**

Lesson pages contain the primary educational content.

Each lesson includes:

* title

* markdown content

* prompt examples

* expected AI outputs

* key takeaway summary

Example lesson structure:

Introduction  
Concept Explanation  
Example Prompt  
Example Output  
Key Takeaway  
---

## **8.5 Lesson Navigation**

At the bottom of each lesson:

← Previous Lesson  
Next Lesson →

Navigation is automatically generated using lesson metadata.

---

## **8.6 Scroll Progress Indicator**

A thin progress bar appears at the top of the page and fills as the user scrolls through the lesson.

This provides visual feedback about reading progress.

---

## **8.7 Responsive Design**

Promptly must support:

* desktop

* tablet

* mobile devices

Mobile behavior:

* sidebar becomes collapsible

* content expands to full width

* navigation remains accessible through a menu icon

---

# **9\. Lesson Content Format**

Lessons are written in **Markdown files**.

Example location:

src/content/foundations/introduction.md  
---

## **Lesson Metadata**

Each lesson includes frontmatter metadata.

Example:

\---  
title: Introduction to Prompt Engineering  
slug: introduction  
section: foundations  
order: 1  
description: Learn what prompt engineering is and why it matters.  
duration: 5  
\---  
---

# **10\. Curriculum Structure**

Example learning structure:

Prompt Engineering Foundations  
• Introduction to Prompt Engineering  
• Prompt Structure

Prompt Patterns  
• Role Prompting  
• Zero-Shot Prompting  
• Few-Shot Prompting

Reasoning Techniques  
• Chain-of-Thought Prompting

Advanced Prompt Design  
• Prompt Refinement  
---

# **11\. Non-Functional Requirements**

Performance requirements:

Page load time \< 2 seconds  
Lighthouse performance score \> 90

Accessibility requirements:

semantic HTML structure  
accessible navigation  
high contrast text

Reliability requirements:

static hosting  
no backend dependencies  
high uptime  
---

# **12\. Success Metrics**

Promptly will be considered successful if:

* users read multiple lessons per session

* average reading time exceeds one minute per lesson

* navigation between lessons is seamless

* page load times remain under two seconds

---

# **13\. Future Roadmap**

Future versions of Promptly may include:

* prompt playground for testing prompts

* interactive examples

* prompt template library

* lesson quizzes

* search functionality

These features would transform Promptly into a **complete prompt engineering learning platform**.

---

# **Final Product Summary**

Promptly is a **documentation-style knowledge platform for prompt engineering** featuring:

* structured lessons

* sidebar navigation

* markdown-based content system

* roadmap overview of the curriculum

* responsive design

* high-performance static deployment

The platform experience should feel like **developer documentation for learning prompt engineering concepts**.

