import{j as e,M as V,r as J,a as Q}from"./markdown-5eWLarql.js";import{a as ee,g as _,b as d,L as x,N as w,u as $,O as te,d as ne,e as re,H as oe,R as ie,f as b,h as se}from"./react-DTh5cxmx.js";import{r as ae}from"./prism-D7z4jZzg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();var S={},z;function le(){if(z)return S;z=1;var o=ee();return S.createRoot=o.createRoot,S.hydrateRoot=o.hydrateRoot,S}var ce=le();const de=_(ce),O=d.createContext();function pe({children:o}){const[t,s]=d.useState(()=>typeof window<"u"&&localStorage.getItem("promptly-theme")||"dark");d.useEffect(()=>{const r=document.documentElement;r.classList.remove("dark","light"),r.classList.add(t),localStorage.setItem("promptly-theme",t)},[t]);const n=()=>{s(r=>r==="dark"?"light":"dark")};return e.jsx(O.Provider,{value:{theme:t,toggleTheme:n},children:o})}function m(){const o=d.useContext(O);if(!o)throw new Error("useTheme must be used within ThemeProvider");return o}/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),H=(...o)=>o.filter((t,s,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ge={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=d.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:r="",children:i,iconNode:a,...l},p)=>d.createElement("svg",{ref:p,...ge,width:t,height:t,stroke:o,strokeWidth:n?Number(s)*24/Number(t):s,className:H("lucide",r),...l},[...a.map(([g,f])=>d.createElement(g,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(o,t)=>{const s=d.forwardRef(({className:n,...r},i)=>d.createElement(xe,{ref:i,iconNode:t,className:H(`lucide-${ue(o)}`,n),...r}));return s.displayName=`${o}`,s};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=u("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=u("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=u("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=u("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=u("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=u("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=u("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=u("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=u("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=u("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=u("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=u("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=u("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=u("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=u("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=u("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=u("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=u("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=u("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=u("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=u("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=u("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=u("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=u("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),N=[{to:"/modules",label:"Learn"},{to:"/playground",label:"Playground"},{to:"/challenges",label:"Practice"},{to:"/docs",label:"Docs"}];function we(){const{theme:o,toggleTheme:t}=m(),[s,n]=d.useState(!1),r=o==="dark";return e.jsxs("header",{className:"sticky top-0 z-50 backdrop-blur-md",style:{height:"64px",borderBottom:`1px solid ${r?"#1F2937":"#E5E7EB"}`,backgroundColor:r?"rgba(11, 18, 32, 0.9)":"rgba(255, 255, 255, 0.9)"},children:[e.jsxs("div",{className:"flex items-center justify-between h-full",style:{maxWidth:"1440px",margin:"0 auto",padding:"0 24px"},children:[e.jsxs(x,{to:"/",className:"flex items-center gap-2",style:{textDecoration:"none"},children:[e.jsx("div",{className:"flex items-center justify-center rounded-lg",style:{width:"32px",height:"32px",background:"linear-gradient(135deg, #10B981, #22D3EE)"},children:e.jsx("span",{style:{color:"#fff",fontWeight:800,fontSize:"16px",fontFamily:"var(--font-mono)"},children:">_"})}),e.jsx("span",{style:{fontSize:"20px",fontWeight:700,color:r?"#F9FAFB":"#111827",letterSpacing:"-0.025em"},children:"Promptly"})]}),e.jsx("nav",{className:"hidden lg:flex items-center",style:{gap:"8px"},children:N.map(i=>e.jsx(w,{to:i.to,className:"transition-colors",style:({isActive:a})=>({padding:"8px 16px",borderRadius:"6px",fontSize:"14px",fontWeight:500,textDecoration:"none",color:a?"#10B981":r?"#9CA3AF":"#6B7280",backgroundColor:a?r?"rgba(16, 185, 129, 0.1)":"rgba(16, 185, 129, 0.08)":"transparent"}),children:i.label},i.to))}),e.jsxs("div",{className:"flex items-center",style:{gap:"8px"},children:[e.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:"hidden sm:flex items-center justify-center rounded-lg transition-colors",style:{width:"36px",height:"36px",color:r?"#9CA3AF":"#6B7280"},onMouseEnter:i=>i.currentTarget.style.color=r?"#E5E7EB":"#111827",onMouseLeave:i=>i.currentTarget.style.color=r?"#9CA3AF":"#6B7280",children:e.jsx(A,{size:20})}),e.jsx("button",{onClick:t,"aria-label":"Toggle theme",className:"flex items-center justify-center rounded-lg transition-colors",style:{width:"36px",height:"36px",background:"none",border:"none",cursor:"pointer",color:r?"#9CA3AF":"#6B7280"},onMouseEnter:i=>i.currentTarget.style.color=r?"#E5E7EB":"#111827",onMouseLeave:i=>i.currentTarget.style.color=r?"#9CA3AF":"#6B7280",children:r?e.jsx(ve,{size:18}):e.jsx(Ee,{size:18})}),e.jsx(x,{to:"/login",className:"hidden sm:inline-flex items-center transition-colors",style:{padding:"8px 16px",borderRadius:"6px",fontSize:"14px",fontWeight:500,textDecoration:"none",color:r?"#9CA3AF":"#6B7280"},children:"Login"}),e.jsx(x,{to:"/signup",className:"hidden sm:inline-flex items-center",style:{padding:"8px 16px",borderRadius:"8px",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"#fff",background:"linear-gradient(135deg, #10B981, #059669)",boxShadow:"0 2px 8px rgba(16, 185, 129, 0.3)"},children:"Sign Up"}),e.jsx("button",{onClick:()=>n(!s),className:"flex lg:hidden items-center justify-center rounded-lg",style:{width:"36px",height:"36px",background:"none",border:"none",cursor:"pointer",color:r?"#9CA3AF":"#6B7280"},"aria-label":"Toggle menu",children:s?e.jsx(X,{size:20}):e.jsx(Fe,{size:20})})]})]}),s&&e.jsxs("div",{className:"lg:hidden",style:{backgroundColor:r?"#111827":"#FFFFFF",borderBottom:`1px solid ${r?"#1F2937":"#E5E7EB"}`,padding:"16px 24px"},children:[N.map(i=>e.jsx(w,{to:i.to,onClick:()=>n(!1),style:({isActive:a})=>({display:"block",padding:"10px 0",fontSize:"15px",fontWeight:500,textDecoration:"none",color:a?"#10B981":r?"#E5E7EB":"#111827"}),children:i.label},i.to)),e.jsxs("div",{className:"flex items-center",style:{gap:"12px",marginTop:"16px",paddingTop:"16px",borderTop:`1px solid ${r?"#1F2937":"#E5E7EB"}`},children:[e.jsx(x,{to:"/login",onClick:()=>n(!1),style:{fontSize:"14px",fontWeight:500,textDecoration:"none",color:r?"#9CA3AF":"#6B7280"},children:"Login"}),e.jsx(x,{to:"/signup",onClick:()=>n(!1),style:{padding:"8px 16px",borderRadius:"8px",fontSize:"14px",fontWeight:600,textDecoration:"none",color:"#fff",background:"linear-gradient(135deg, #10B981, #059669)"},children:"Sign Up"})]})]})]})}const Ce=`---
title: What is Prompt Engineering
slug: what-is-prompt-engineering
module: foundation
order: 1
description: Learn what prompt engineering is and why it is essential for working with AI systems.
duration: 8
difficulty: beginner
---

# What is Prompt Engineering

## Introduction

Prompt Engineering is the process of **designing clear, structured instructions that guide AI models to produce useful outputs**.

Modern AI systems such as large language models generate responses based on the **input prompt** they receive. The quality of the response often depends on how well the prompt is written.

Prompt Engineering focuses on **crafting prompts that produce accurate, relevant, and structured outputs**.

## Why This Concept Matters

Prompt Engineering is important because:

- AI models are **instruction driven**
- Small wording changes can **dramatically change results**
- Clear prompts improve **accuracy and reliability**
- Structured prompts reduce **hallucinations and vague outputs**

Without prompt engineering:

- AI responses become inconsistent
- Results become unpredictable
- Outputs require heavy editing

Good prompts lead to **better AI performance with less effort**.

## Core Concept

A **prompt** is the input given to an AI model.

It typically contains:

- **Instructions** — what you want the AI to do
- **Context** — background information
- **Examples** — demonstrations of desired output
- **Output formatting rules** — how to structure the response

Prompt engineering focuses on **designing this structure effectively**.

## Key Principles

### Clarity
Avoid vague instructions. Tell the AI exactly what you need.

### Specificity
The more specific your prompt, the better the output.

### Structure
Break prompts into logical components.

### Constraints
Limit the output format if needed (bullets, word count, etc.).

### Iteration
Improve prompts through testing and refinement.

## Practical Examples

### Example 1 — Vague Prompt

\`\`\`text
Explain machine learning.
\`\`\`

Output may be unfocused and overly broad.

### Example 2 — Better Prompt

\`\`\`text
Explain machine learning in simple terms for a beginner using a real world example.
\`\`\`

Much better — adds audience and format guidance.

### Example 3 — Structured Prompt

\`\`\`text
Explain machine learning in 5 bullet points. Include one real world example.
\`\`\`

Now the output becomes structured and predictable.

## Prompt vs Improved Prompt

### ❌ Bad Prompt

\`\`\`text
Tell me about climate change.
\`\`\`

**Problems:** Too broad, no format specified, no audience defined.

### ✅ Improved Prompt

\`\`\`text
Explain climate change to a high school student.

Include:
- Definition
- 3 causes
- 2 real world effects

Write the answer in bullet points.
\`\`\`

**Why this works better:**
- Audience defined
- Output structure specified
- Scope clearly defined

## Best Practices

- Be specific with your instructions
- Use bullet point formatting in prompts
- Define the target audience
- Specify output format explicitly
- Provide examples when needed

## Common Mistakes

Avoid these common pitfalls:

- ❌ Extremely vague prompts
- ❌ Overly long, unfocused prompts
- ❌ Missing context
- ❌ No formatting instructions
- ❌ Mixing multiple tasks in one prompt

## Mini Exercise

> **Try this:** Write a prompt that asks the AI to:
> - Explain blockchain
> - For a beginner audience
> - In exactly 5 bullet points

## Summary

Prompt Engineering is the skill of **writing effective AI instructions**.

Well-designed prompts:
- Produce better outputs
- Reduce errors
- Improve AI usefulness

Mastering prompt engineering allows you to **unlock the full potential of AI systems**.
`,Te=`---
title: Zero Shot Prompting
slug: zero-shot
module: prompt-design
order: 1
description: Learn how to instruct AI without providing any examples in the prompt.
duration: 7
difficulty: beginner
---

# Zero Shot Prompting

## Introduction

Zero-shot prompting is a technique where the AI is asked to perform a task **without being given examples**.

The model relies entirely on its **existing knowledge and the instructions provided in the prompt**.

## Why This Concept Matters

Zero-shot prompting is useful because:

- It is the **simplest prompting method**
- It requires **no training examples**
- It works well for many common tasks

However, performance depends heavily on **how clearly the prompt is written**.

## Core Concept

Zero-shot prompting provides:

- An instruction
- A task description
- Sometimes formatting instructions

But **no examples**.

\`\`\`text
[Instruction]
[Task]
[Output format]
\`\`\`

The AI must figure out the correct response using only its pre-trained knowledge.

## Key Principles

For effective zero-shot prompts:

- **Make the task clear** — no ambiguity
- **Specify output structure** — bullet points, paragraphs, etc.
- **Limit scope** — don't ask too many things at once
- **Define the audience** — if relevant

## Practical Examples

### Example 1 — Summarization

\`\`\`text
Summarize the following article in 3 sentences.
\`\`\`

### Example 2 — List Generation

\`\`\`text
List 5 benefits of renewable energy.
\`\`\`

### Example 3 — Translation

\`\`\`text
Translate this sentence into Spanish:
"The weather is beautiful today."
\`\`\`

## Prompt vs Improved Prompt

### ❌ Bad Prompt

\`\`\`text
Write about AI.
\`\`\`

**Problems:** Too broad, no output length, no focus.

### ✅ Improved Prompt

\`\`\`text
Write a short explanation of Artificial Intelligence.

Requirements:
- Maximum 120 words
- Include one real world example
\`\`\`

**Why it works better:**
- Clear scope
- Defined length
- Concrete expectation

## Best Practices

- Define the task clearly and completely
- Limit output size when appropriate
- Avoid vague or open-ended instructions
- Provide constraints to guide the response

## Common Mistakes

- ❌ Extremely open-ended prompts
- ❌ Asking multiple unrelated tasks at once
- ❌ Missing formatting instructions
- ❌ Not specifying the audience

## Mini Exercise

> **Try this:** Write a zero-shot prompt that asks an AI to:
> - Explain quantum computing
> - In simple language
> - In exactly 4 bullet points

## Summary

Zero-shot prompting is the **most basic prompt engineering method**.

It works best when instructions are:
- Clear
- Specific
- Well structured

Always start with zero-shot. Only add examples if the output isn't meeting your needs.
`,Pe=`---
title: Chain of Thought Prompting
slug: chain-of-thought
module: prompt-optimization
order: 1
description: Learn how to make AI explain its reasoning step by step for better accuracy.
duration: 8
difficulty: intermediate
---

# Chain of Thought Prompting

## Introduction

Chain-of-thought prompting encourages AI models to **explain their reasoning step by step**.

This technique significantly improves performance on **complex reasoning tasks**.

## Why This Concept Matters

Without reasoning prompts, AI may:

- Guess answers without thinking
- Skip logical steps
- Produce incorrect conclusions

Chain-of-thought helps models:

- Break problems into steps
- Improve logical accuracy
- Show reasoning clearly

## Core Concept

The prompt instructs the AI to **think step by step** before giving the final answer.

\`\`\`text
[Question]
[Instruction to reason step by step]
[Request for final answer]
\`\`\`

This forces the model to simulate a logical reasoning process.

## Key Principles

- **Encourage reasoning** — explicitly ask for it
- **Ask for intermediate steps** — not just the answer
- **Separate reasoning from final answer** — keep them distinct

## Practical Examples

### Example 1 — Math Problem

\`\`\`text
A store sells apples for $2 each. If you buy 5 or more, you get a 20% discount. How much do 7 apples cost?

Solve this step by step.
\`\`\`

**Expected output:**
1. Price per apple: $2
2. Number of apples: 7
3. Without discount: 7 × $2 = $14
4. Since 7 ≥ 5, 20% discount applies
5. Discount: $14 × 0.20 = $2.80
6. Final price: $14 - $2.80 = **$11.20**

### Example 2 — Reasoning

\`\`\`text
Explain your reasoning before giving the answer:
Is a tomato a fruit or a vegetable?
\`\`\`

### Example 3 — Multi-step

\`\`\`text
Think through the problem step by step and show your reasoning:
If all roses are flowers, and some flowers fade quickly, can we conclude that some roses fade quickly?
\`\`\`

## Prompt vs Improved Prompt

### ❌ Bad Prompt

\`\`\`text
What is 47 × 18?
\`\`\`

The AI may answer directly but mistakes can occur.

### ✅ Improved Prompt

\`\`\`text
What is 47 × 18?

Solve the problem step by step and show your reasoning before giving the final answer.
\`\`\`

**Why this works better:** The AI is forced to simulate logical reasoning, improving accuracy.

## Best Practices

- Use "think step by step" as a trigger phrase
- Ask for explicit reasoning before the answer
- Separate the steps from the final conclusion

## Common Mistakes

- ❌ Asking for reasoning without structure
- ❌ Combining reasoning with multiple unrelated tasks
- ❌ Not specifying that you want intermediate steps

## Mini Exercise

> **Try this:** Write a prompt that asks an AI to:
> - Solve a math word problem
> - Explain each step
> - Show the final answer clearly separated

## Summary

Chain-of-thought prompting improves performance for:
- Reasoning tasks
- Problem solving
- Multi-step calculations

It encourages AI to **show its thinking process**, which leads to more accurate results.
`,ze=`---
title: Prompting for Coding Tasks
slug: prompting-for-coding
module: use-cases
order: 1
description: Learn how to write effective prompts for code generation, debugging, and documentation.
duration: 8
difficulty: intermediate
---

# Prompting for Coding Tasks

## Introduction

AI systems can assist developers with:

- Writing code
- Debugging errors
- Explaining algorithms
- Generating documentation

Effective prompts help the AI **understand the coding task clearly** and produce accurate, usable code.

## Why This Concept Matters

Without clear prompts, AI code outputs may:

- Contain bugs and errors
- Miss important requirements
- Use incorrect languages or frameworks

Prompt engineering improves:

- **Code accuracy** — fewer bugs
- **Readability** — cleaner output
- **Correctness** — meeting specifications

## Core Concept

A good coding prompt includes:

- **Programming language** — always specify it
- **Task description** — what the code should do
- **Constraints** — limitations or requirements
- **Output format** — with comments, tests, etc.

\`\`\`text
[Language]
[Task description]
[Constraints]
[Example input/output]
\`\`\`

## Key Principles

- Always specify the programming language
- Provide clear problem constraints
- Define the expected output format
- Ask for comments when needed

## Practical Examples

### Example 1 — String Reversal

\`\`\`text
Write a Python function that reverses a string.
\`\`\`

### Example 2 — Array Sorting

\`\`\`text
Write a JavaScript function that sorts an array of numbers in ascending order.
Include comments explaining each step.
\`\`\`

### Example 3 — Prime Check

\`\`\`python
# Write a Python function that checks if a number is prime.
# Include comments explaining each step.

def is_prime(n):
    if n < 2:
        return False  # Numbers less than 2 are not prime
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False  # Divisible by another number
    return True  # No divisors found, it's prime
\`\`\`

## Prompt vs Improved Prompt

### ❌ Bad Prompt

\`\`\`text
Write a sorting program.
\`\`\`

**Problems:** Language not specified, algorithm not defined, no constraints.

### ✅ Improved Prompt

\`\`\`text
Write a Python function that sorts a list of integers using the quicksort algorithm.

Requirements:
- Use recursion
- Include comments explaining the algorithm
- Include example usage
\`\`\`

**Why it works better:**
- Language defined
- Algorithm specified
- Clear requirements

## Best Practices

- Always specify the programming language
- Provide example input and expected output
- Ask for comments and documentation
- Specify edge cases to handle

## Common Mistakes

- ❌ Missing programming language specification
- ❌ Vague or incomplete requirements
- ❌ Overly large, multi-function prompts

## Mini Exercise

> **Try this:** Write a prompt that asks the AI to:
> - Generate a Python function
> - Calculate the factorial of a number
> - Include comments explaining the code
> - Handle edge cases (negative numbers, zero)

## Summary

Prompting for coding tasks requires **clear task definition and precise constraints**.

Good coding prompts produce:
- Cleaner, more readable code
- Fewer bugs and errors
- Better documentation
`,K=[{id:"foundation",title:"Foundation",order:1,description:"Core concepts of prompt engineering",icon:"BookOpen"},{id:"prompt-design",title:"Prompt Design Basics",order:2,description:"Essential prompting techniques",icon:"Lightbulb"},{id:"prompt-optimization",title:"Prompt Optimization",order:3,description:"Advanced reasoning and optimization",icon:"Zap"},{id:"use-cases",title:"Real World Use Cases",order:4,description:"Practical applications of prompt engineering",icon:"Code"}],Ie=Object.assign({"../content/foundation/what-is-prompt-engineering.md":Ce,"../content/prompt-design/zero-shot.md":Te,"../content/prompt-optimization/chain-of-thought.md":Pe,"../content/use-cases/prompting-for-coding.md":ze});function Ne(o){const t=o.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);if(!t)return{metadata:{},content:o};const s=t[1],n=t[2],r={};return s.split(`
`).forEach(i=>{const a=i.indexOf(":");if(a===-1)return;const l=i.slice(0,a).trim();let p=i.slice(a+1).trim();!isNaN(p)&&p!==""&&(p=Number(p)),r[l]=p}),{metadata:r,content:n}}const F=Object.entries(Ie).map(([o,t])=>{const{metadata:s,content:n}=Ne(t);return{...s,content:n,path:o}});function R(o){const t=K.find(s=>s.id===o);return t?t.order:999}F.sort((o,t)=>{const s=R(o.module)-R(t.module);return s!==0?s:(o.order||0)-(t.order||0)});function v(){return[...K].sort((o,t)=>o.order-t.order)}function Re(){return F}function j(o){return F.filter(t=>t.module===o)}function De(o){return F.find(t=>t.slug===o)||null}function We(o){const t=F.findIndex(s=>s.slug===o);return t===-1?{current:null,previous:null,next:null}:{current:F[t],previous:t>0?F[t-1]:null,next:t<F.length-1?F[t+1]:null}}function Me(){return v().map(t=>({...t,lessons:j(t.id)}))}function Le({isOpen:o,onClose:t}){const{theme:s}=m(),n=s==="dark",r=$(),i=Me(),[a,l]=d.useState(()=>new Set(i.map(c=>c.id))),p=r.pathname.startsWith("/topic/")?r.pathname.split("/topic/")[1]:null;function g(c){l(h=>{const y=new Set(h);return y.has(c)?y.delete(c):y.add(c),y})}const f=e.jsx("nav",{style:{padding:"16px 0"},"aria-label":"Lesson navigation",children:i.map(c=>e.jsxs("div",{style:{marginBottom:"4px"},children:[e.jsxs("button",{onClick:()=>g(c.id),className:"flex items-center justify-between w-full text-left transition-colors",style:{padding:"8px 20px",fontSize:"12px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:n?"#9CA3AF":"#6B7280",background:"none",border:"none",cursor:"pointer"},children:[e.jsx("span",{children:c.title}),e.jsx(T,{size:14,style:{transform:a.has(c.id)?"rotate(90deg)":"rotate(0)",transition:"transform 0.2s ease"}})]}),a.has(c.id)&&e.jsx("ul",{style:{listStyle:"none",padding:"0 12px",margin:"2px 0 8px 0"},children:c.lessons.map(h=>{const y=p===h.slug;return e.jsx("li",{children:e.jsx(w,{to:`/topic/${h.slug}`,onClick:t,style:{display:"block",padding:"7px 12px",fontSize:"14px",fontWeight:y?500:400,color:y?"#10B981":n?"#9CA3AF":"#6B7280",backgroundColor:y?n?"rgba(16, 185, 129, 0.1)":"rgba(16, 185, 129, 0.08)":"transparent",borderRadius:"6px",textDecoration:"none",lineHeight:"1.5",borderLeft:y?"2px solid #10B981":"2px solid transparent"},onMouseEnter:k=>{y||(k.currentTarget.style.color=n?"#E5E7EB":"#111827",k.currentTarget.style.backgroundColor=n?"rgba(255,255,255,0.04)":"rgba(0,0,0,0.03)")},onMouseLeave:k=>{y||(k.currentTarget.style.color=n?"#9CA3AF":"#6B7280",k.currentTarget.style.backgroundColor="transparent")},children:h.title})},h.slug)})})]},c.id))});return e.jsxs(e.Fragment,{children:[e.jsx("aside",{className:"hidden lg:block flex-shrink-0 overflow-y-auto",style:{width:"260px",position:"sticky",top:"64px",height:"calc(100vh - 64px)",backgroundColor:n?"#111827":"#FFFFFF",borderRight:`1px solid ${n?"#1F2937":"#E5E7EB"}`},children:f}),o&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-50 lg:hidden",style:{backgroundColor:"rgba(0, 0, 0, 0.6)"},onClick:t}),e.jsxs("aside",{className:"fixed top-0 left-0 z-50 h-full overflow-y-auto lg:hidden",style:{width:"280px",backgroundColor:n?"#111827":"#FFFFFF",boxShadow:"4px 0 24px rgba(0, 0, 0, 0.3)",animation:"slideIn 0.2s ease-out"},children:[e.jsxs("div",{className:"flex items-center justify-between",style:{height:"64px",padding:"0 20px",borderBottom:`1px solid ${n?"#1F2937":"#E5E7EB"}`},children:[e.jsx("span",{style:{fontSize:"16px",fontWeight:700,color:n?"#F9FAFB":"#111827"},children:"Navigation"}),e.jsx("button",{onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:n?"#9CA3AF":"#6B7280",padding:"4px"},"aria-label":"Close",children:e.jsx(X,{size:20})})]}),f]})]}),e.jsx("style",{children:"@keyframes slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }"})]})}const _e=[{title:"Product",links:[{label:"Learn",href:"#/modules"},{label:"Playground",href:"#/playground"},{label:"Challenges",href:"#/challenges"}]},{title:"Docs",links:[{label:"Documentation",href:"#/docs"},{label:"Getting Started",href:"#/modules"}]},{title:"Community",links:[{label:"GitHub",href:"https://github.com",external:!0},{label:"Discussions",href:"#"}]}];function $e(){const{theme:o}=m(),t=o==="dark";return e.jsx("footer",{style:{borderTop:`1px solid ${t?"#1F2937":"#E5E7EB"}`,backgroundColor:t?"#111827":"#FFFFFF"},children:e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"48px 24px 24px"},children:[e.jsx("div",{className:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"32px",marginBottom:"32px"},children:_e.map(s=>e.jsxs("div",{children:[e.jsx("h4",{style:{fontSize:"14px",fontWeight:600,color:t?"#F9FAFB":"#111827",marginBottom:"12px"},children:s.title}),e.jsx("ul",{style:{listStyle:"none",padding:0},children:s.links.map(n=>e.jsx("li",{style:{marginBottom:"8px"},children:e.jsx("a",{href:n.href,...n.external?{target:"_blank",rel:"noopener noreferrer"}:{},style:{fontSize:"14px",color:t?"#9CA3AF":"#6B7280",textDecoration:"none",transition:"color 0.15s"},onMouseEnter:r=>r.currentTarget.style.color="#10B981",onMouseLeave:r=>r.currentTarget.style.color=t?"#9CA3AF":"#6B7280",children:n.label})},n.label))})]},s.title))}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between",style:{paddingTop:"24px",borderTop:`1px solid ${t?"#1F2937":"#E5E7EB"}`,gap:"12px"},children:[e.jsxs("p",{style:{fontSize:"13px",color:t?"#6B7280":"#9CA3AF"},children:["© ",new Date().getFullYear()," Promptly — Built with React + Vite + TailwindCSS"]}),e.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",style:{color:t?"#6B7280":"#9CA3AF"},children:e.jsx(A,{size:18})})]})]})})}const Oe=["/topic/","/docs","/modules"];function He(){const[o,t]=d.useState(!1),s=$(),n=Oe.some(r=>s.pathname.startsWith(r));return e.jsxs("div",{className:"flex flex-col",style:{minHeight:"100vh"},children:[e.jsx(we,{}),e.jsxs("div",{className:"flex flex-1",children:[n&&e.jsx(Le,{isOpen:o,onClose:()=>t(!1)}),e.jsx("main",{className:"flex-1 overflow-y-auto",style:{minHeight:"calc(100vh - 64px)"},children:e.jsx(te,{context:{setSidebarOpen:t}})})]}),e.jsx($e,{})]})}const Ge=[{icon:C,title:"Structured Lessons",desc:"Learn prompt engineering through organized, progressive modules."},{icon:je,title:"Prompt Playground",desc:"Experiment with prompts in an interactive editor environment."},{icon:Z,title:"Practice Challenges",desc:"Test your skills with real-world prompt engineering challenges."},{icon:he,title:"Code Examples",desc:"Study practical code examples with syntax highlighting."},{icon:Y,title:"Fast Performance",desc:"Blazing fast static site with instant page transitions."},{icon:Ae,title:"Community Driven",desc:"Open source platform built for the developer community."}];function qe(){const{theme:o}=m(),t=o==="dark",s=v();return e.jsxs("div",{children:[e.jsxs("section",{className:"flex flex-col items-center",style:{padding:"80px 24px 64px",textAlign:"center"},children:[e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"6px 16px",borderRadius:"9999px",fontSize:"13px",fontWeight:600,color:"#10B981",backgroundColor:t?"rgba(16,185,129,0.1)":"rgba(16,185,129,0.08)",marginBottom:"24px",border:`1px solid ${t?"rgba(16,185,129,0.2)":"rgba(16,185,129,0.15)"}`},children:[e.jsx(Y,{size:14})," Open Source Learning Platform"]}),e.jsxs("h1",{style:{fontSize:"clamp(2.5rem, 6vw, 4rem)",fontWeight:800,lineHeight:1.1,marginBottom:"20px",letterSpacing:"-0.03em",maxWidth:"800px"},children:["Master"," ",e.jsx("span",{style:{background:"linear-gradient(135deg, #10B981, #22D3EE)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Prompt Engineering"})]}),e.jsx("p",{style:{fontSize:"18px",lineHeight:1.7,color:t?"#9CA3AF":"#6B7280",marginBottom:"40px",maxWidth:"600px"},children:"Build smarter AI interactions through structured lessons, interactive practice, and real-world challenges."}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center",style:{gap:"12px"},children:[e.jsxs(x,{to:"/modules",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"14px 28px",borderRadius:"10px",background:"linear-gradient(135deg, #10B981, #059669)",color:"#fff",fontSize:"15px",fontWeight:600,textDecoration:"none",boxShadow:"0 4px 14px rgba(16, 185, 129, 0.35)",transition:"transform 0.15s ease, box-shadow 0.15s ease"},onMouseEnter:n=>{n.currentTarget.style.transform="translateY(-2px)",n.currentTarget.style.boxShadow="0 6px 20px rgba(16,185,129,0.4)"},onMouseLeave:n=>{n.currentTarget.style.transform="translateY(0)",n.currentTarget.style.boxShadow="0 4px 14px rgba(16,185,129,0.35)"},children:["Start Learning ",e.jsx(I,{size:16})]}),e.jsx(x,{to:"/playground",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"14px 28px",borderRadius:"10px",fontSize:"15px",fontWeight:600,textDecoration:"none",border:`1px solid ${t?"#374151":"#E5E7EB"}`,color:t?"#E5E7EB":"#111827",transition:"border-color 0.15s ease"},onMouseEnter:n=>n.currentTarget.style.borderColor="#10B981",onMouseLeave:n=>n.currentTarget.style.borderColor=t?"#374151":"#E5E7EB",children:"Try Playground"})]})]}),e.jsxs("section",{style:{padding:"64px 24px",maxWidth:"1200px",margin:"0 auto"},children:[e.jsx("h2",{style:{fontSize:"30px",fontWeight:700,textAlign:"center",marginBottom:"48px",color:t?"#F9FAFB":"#111827"},children:"Built for Developers"}),e.jsx("div",{className:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px"},children:Ge.map(n=>{const r=n.icon;return e.jsxs("div",{style:{padding:"24px",borderRadius:"12px",border:`1px solid ${t?"#1F2937":"#E5E7EB"}`,backgroundColor:t?"#111827":"#FFFFFF",transition:"border-color 0.15s"},onMouseEnter:i=>i.currentTarget.style.borderColor="#10B981",onMouseLeave:i=>i.currentTarget.style.borderColor=t?"#1F2937":"#E5E7EB",children:[e.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"linear-gradient(135deg, rgba(16,185,129,0.15), rgba(34,211,238,0.15))",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px"},children:e.jsx(r,{size:20,style:{color:"#10B981"}})}),e.jsx("h3",{style:{fontSize:"16px",fontWeight:600,marginBottom:"8px",color:t?"#F9FAFB":"#111827"},children:n.title}),e.jsx("p",{style:{fontSize:"14px",color:t?"#9CA3AF":"#6B7280",lineHeight:1.6},children:n.desc})]},n.title)})})]}),e.jsxs("section",{style:{padding:"64px 24px",maxWidth:"1200px",margin:"0 auto"},children:[e.jsx("h2",{style:{fontSize:"30px",fontWeight:700,textAlign:"center",marginBottom:"16px",color:t?"#F9FAFB":"#111827"},children:"Learning Modules"}),e.jsx("p",{style:{textAlign:"center",color:t?"#9CA3AF":"#6B7280",marginBottom:"48px",fontSize:"16px"},children:"Progressive curriculum from fundamentals to advanced techniques."}),e.jsx("div",{className:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"20px"},children:s.map(n=>{const r=j(n.id);return e.jsxs(x,{to:r.length>0?`/topic/${r[0].slug}`:"/modules",style:{display:"block",padding:"24px",borderRadius:"12px",border:`1px solid ${t?"#1F2937":"#E5E7EB"}`,backgroundColor:t?"#1F2937":"#FFFFFF",textDecoration:"none",transition:"transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease"},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-2px)",i.currentTarget.style.borderColor="#10B981",i.currentTarget.style.boxShadow=t?"0 8px 24px rgba(0,0,0,0.3)":"0 8px 24px rgba(0,0,0,0.06)"},onMouseLeave:i=>{i.currentTarget.style.transform="translateY(0)",i.currentTarget.style.borderColor=t?"#1F2937":"#E5E7EB",i.currentTarget.style.boxShadow="none"},children:[e.jsx("h3",{style:{fontSize:"18px",fontWeight:600,color:t?"#F9FAFB":"#111827",marginBottom:"8px"},children:n.title}),e.jsx("p",{style:{fontSize:"14px",color:t?"#9CA3AF":"#6B7280",marginBottom:"12px",lineHeight:1.5},children:n.description}),e.jsxs("span",{style:{fontSize:"13px",fontWeight:500,color:"#10B981"},children:[r.length," lesson",r.length!==1?"s":""," →"]})]},n.id)})})]}),e.jsxs("section",{className:"flex flex-col items-center",style:{padding:"80px 24px",textAlign:"center"},children:[e.jsx("h2",{style:{fontSize:"30px",fontWeight:700,marginBottom:"16px",color:t?"#F9FAFB":"#111827"},children:"Ready to Master Prompt Engineering?"}),e.jsx("p",{style:{fontSize:"16px",color:t?"#9CA3AF":"#6B7280",marginBottom:"32px",maxWidth:"500px"},children:"Start learning for free. No account required to begin."}),e.jsxs(x,{to:"/modules",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"14px 32px",borderRadius:"10px",background:"linear-gradient(135deg, #10B981, #059669)",color:"#fff",fontSize:"15px",fontWeight:600,textDecoration:"none",boxShadow:"0 4px 14px rgba(16,185,129,0.35)"},children:["Get Started ",e.jsx(I,{size:16})]})]})]})}const D={beginner:{label:"Beginner",color:"#10B981",bg:"rgba(16, 185, 129, 0.15)"},intermediate:{label:"Intermediate",color:"#F59E0B",bg:"rgba(245, 158, 11, 0.15)"},advanced:{label:"Advanced",color:"#EF4444",bg:"rgba(239, 68, 68, 0.15)"}};function P({level:o="beginner"}){const t=D[o]||D.beginner;return e.jsx("span",{style:{display:"inline-block",padding:"3px 10px",borderRadius:"9999px",fontSize:"12px",fontWeight:600,color:t.color,backgroundColor:t.bg,letterSpacing:"0.02em",flexShrink:0},children:t.label})}function Ue({title:o,description:t,slug:s,duration:n,difficulty:r,lessonCount:i}){const{theme:a}=m(),l=a==="dark";return e.jsxs(x,{to:`/topic/${s}`,style:{display:"block",padding:"24px",borderRadius:"12px",border:`1px solid ${l?"#1F2937":"#E5E7EB"}`,backgroundColor:l?"#1F2937":"#FFFFFF",textDecoration:"none",transition:"transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease"},onMouseEnter:p=>{p.currentTarget.style.transform="translateY(-2px)",p.currentTarget.style.boxShadow=l?"0 8px 24px rgba(0,0,0,0.3)":"0 8px 24px rgba(0,0,0,0.08)",p.currentTarget.style.borderColor="#10B981"},onMouseLeave:p=>{p.currentTarget.style.transform="translateY(0)",p.currentTarget.style.boxShadow="none",p.currentTarget.style.borderColor=l?"#1F2937":"#E5E7EB"},children:[e.jsxs("div",{className:"flex items-start justify-between",style:{marginBottom:"12px"},children:[e.jsx("h3",{style:{fontSize:"18px",fontWeight:600,color:l?"#F9FAFB":"#111827",lineHeight:1.3},children:o}),r&&e.jsx(P,{level:r})]}),e.jsx("p",{style:{fontSize:"14px",color:l?"#9CA3AF":"#6B7280",lineHeight:1.6,marginBottom:"16px"},children:t}),e.jsxs("div",{className:"flex items-center",style:{gap:"16px"},children:[n&&e.jsxs("span",{className:"flex items-center",style:{gap:"4px",fontSize:"13px",color:l?"#6B7280":"#9CA3AF"},children:[e.jsx(B,{size:14}),n," min"]}),i&&e.jsxs("span",{className:"flex items-center",style:{gap:"4px",fontSize:"13px",color:l?"#6B7280":"#9CA3AF"},children:[e.jsx(C,{size:14}),i," lessons"]})]})]})}function E({items:o=[]}){const{theme:t}=m(),s=t==="dark";return e.jsxs("nav",{className:"flex items-center flex-wrap",style:{gap:"6px",marginBottom:"24px",fontSize:"14px"},"aria-label":"Breadcrumb",children:[e.jsx(x,{to:"/",style:{color:s?"#9CA3AF":"#6B7280",textDecoration:"none",display:"flex",alignItems:"center"},onMouseEnter:n=>n.currentTarget.style.color="#10B981",onMouseLeave:n=>n.currentTarget.style.color=s?"#9CA3AF":"#6B7280",children:e.jsx(ye,{size:14})}),o.map((n,r)=>e.jsxs("span",{className:"flex items-center",style:{gap:"6px"},children:[e.jsx(T,{size:14,style:{color:s?"#4B5563":"#D1D5DB"}}),n.href?e.jsx(x,{to:n.href,style:{color:s?"#9CA3AF":"#6B7280",textDecoration:"none"},onMouseEnter:i=>i.currentTarget.style.color="#10B981",onMouseLeave:i=>i.currentTarget.style.color=s?"#9CA3AF":"#6B7280",children:n.label}):e.jsx("span",{style:{color:s?"#E5E7EB":"#111827",fontWeight:500},children:n.label})]},r))]})}function Ze(){const{theme:o}=m(),t=o==="dark",s=v();return e.jsxs("div",{style:{maxWidth:"960px",margin:"0 auto",padding:"40px 32px"},children:[e.jsx(E,{items:[{label:"Modules"}]}),e.jsx("h1",{style:{fontSize:"2.25rem",fontWeight:800,marginBottom:"8px",color:t?"#F9FAFB":"#111827"},children:"Learning Modules"}),e.jsx("p",{style:{fontSize:"16px",color:t?"#9CA3AF":"#6B7280",marginBottom:"40px",lineHeight:1.7},children:"Explore the complete prompt engineering curriculum from fundamentals to advanced techniques."}),s.map(n=>{const r=j(n.id);return e.jsxs("div",{style:{marginBottom:"40px"},children:[e.jsx("h2",{style:{fontSize:"14px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",color:"#10B981",marginBottom:"16px",paddingBottom:"8px",borderBottom:`2px solid ${t?"rgba(16,185,129,0.2)":"rgba(16,185,129,0.15)"}`},children:n.title}),e.jsx("div",{className:"grid",style:{gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"16px"},children:r.map(i=>e.jsx(Ue,{title:i.title,description:i.description,slug:i.slug,duration:i.duration,difficulty:i.difficulty},i.slug))})]},n.id)})]})}var Xe=ae();const Ye=_(Xe);var W={},M;function Ke(){return M||(M=1,Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python),W}Ke();Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(o){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",s={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},n={bash:s,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};o.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:s}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:n},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:n.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},s.inside=o.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=n.variable[1].inside,a=0;a<r.length;a++)i[r[a]]=o.languages.bash[r[a]];o.languages.sh=o.languages.bash,o.languages.shell=o.languages.bash})(Prism);Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;function Ve({containerRef:o}){const[t,s]=d.useState(0),n=d.useCallback(()=>{if(!(o!=null&&o.current))return;const r=o.current,i=r.scrollHeight-r.clientHeight;i>0&&s(Math.min(r.scrollTop/i*100,100))},[o]);return d.useEffect(()=>{const r=o==null?void 0:o.current;if(r)return r.addEventListener("scroll",n,{passive:!0}),()=>r.removeEventListener("scroll",n)},[o,n]),e.jsx("div",{className:"fixed left-0 z-50",style:{top:"64px",width:"100%",height:"3px",backgroundColor:"transparent"},children:e.jsx("div",{style:{height:"100%",width:`${t}%`,background:"linear-gradient(90deg, #10B981, #22D3EE)",transition:"width 0.1s ease-out",borderRadius:"0 2px 2px 0"}})})}function Je(){return e.jsxs("div",{style:{padding:"48px 32px",maxWidth:"760px",margin:"0 auto"},children:[e.jsx("div",{className:"skeleton",style:{height:"20px",width:"200px",marginBottom:"24px"}}),e.jsx("div",{className:"skeleton",style:{height:"40px",width:"70%",marginBottom:"16px"}}),e.jsx("div",{className:"skeleton",style:{height:"16px",width:"30%",marginBottom:"40px"}}),e.jsx("div",{className:"skeleton",style:{height:"16px",width:"100%",marginBottom:"12px"}}),e.jsx("div",{className:"skeleton",style:{height:"16px",width:"95%",marginBottom:"12px"}}),e.jsx("div",{className:"skeleton",style:{height:"16px",width:"88%",marginBottom:"24px"}}),e.jsx("div",{className:"skeleton",style:{height:"140px",width:"100%",marginBottom:"24px"}}),e.jsx("div",{className:"skeleton",style:{height:"16px",width:"100%",marginBottom:"12px"}}),e.jsx("div",{className:"skeleton",style:{height:"16px",width:"80%"}})]})}function Qe(){var f;const{slug:o}=ne(),{theme:t}=m(),s=t==="dark",n=d.useRef(null),[r,i]=d.useState(!0),a=De(o),{previous:l,next:p}=We(o);if(d.useEffect(()=>{i(!0)},[o]),d.useEffect(()=>{if(a){const c=setTimeout(()=>{Ye.highlightAll(),i(!1)},80);return()=>clearTimeout(c)}},[o,a]),d.useEffect(()=>{var c;(c=n.current)==null||c.scrollTo(0,0)},[o]),!a)return e.jsx(re,{to:"/404",replace:!0});const g=(f=a.module)==null?void 0:f.replace(/-/g," ").replace(/\b\w/g,c=>c.toUpperCase());return e.jsxs(e.Fragment,{children:[e.jsx(Ve,{containerRef:n}),e.jsxs("div",{ref:n,className:"overflow-y-auto",style:{height:"calc(100vh - 64px)",scrollBehavior:"smooth"},children:[r&&e.jsx(Je,{}),e.jsxs("article",{style:{maxWidth:"760px",margin:"0 auto",padding:"40px 32px 80px",display:r?"none":"block"},children:[e.jsx(E,{items:[{label:"Modules",href:"/modules"},{label:g,href:"/modules"},{label:a.title}]}),e.jsxs("div",{className:"flex flex-wrap items-center",style:{gap:"12px",marginBottom:"32px"},children:[a.difficulty&&e.jsx(P,{level:a.difficulty}),e.jsxs("span",{className:"flex items-center",style:{gap:"4px",fontSize:"13px",color:s?"#6B7280":"#9CA3AF"},children:[e.jsx(B,{size:14}),a.duration," min read"]})]}),e.jsx("div",{className:"prose",style:{maxWidth:"100%"},children:e.jsx(V,{remarkPlugins:[Q],rehypePlugins:[J],children:a.content})}),e.jsxs("nav",{className:"flex items-center justify-between",style:{marginTop:"48px",paddingTop:"24px",borderTop:`1px solid ${s?"#1F2937":"#E5E7EB"}`,gap:"16px"},"aria-label":"Lesson navigation",children:[l?e.jsxs(x,{to:`/topic/${l.slug}`,className:"flex flex-col",style:{padding:"12px 16px",borderRadius:"8px",border:`1px solid ${s?"#1F2937":"#E5E7EB"}`,textDecoration:"none",maxWidth:"50%",transition:"border-color 0.15s"},onMouseEnter:c=>c.currentTarget.style.borderColor="#10B981",onMouseLeave:c=>c.currentTarget.style.borderColor=s?"#1F2937":"#E5E7EB",children:[e.jsxs("span",{className:"flex items-center",style:{gap:"4px",fontSize:"12px",color:s?"#9CA3AF":"#6B7280",fontWeight:500},children:[e.jsx(me,{size:14})," Previous"]}),e.jsx("span",{style:{fontSize:"14px",color:"#10B981",fontWeight:500,marginTop:"2px"},children:l.title})]}):e.jsx("div",{}),p?e.jsxs(x,{to:`/topic/${p.slug}`,className:"flex flex-col items-end",style:{padding:"12px 16px",borderRadius:"8px",border:`1px solid ${s?"#1F2937":"#E5E7EB"}`,textDecoration:"none",maxWidth:"50%",marginLeft:"auto",transition:"border-color 0.15s"},onMouseEnter:c=>c.currentTarget.style.borderColor="#10B981",onMouseLeave:c=>c.currentTarget.style.borderColor=s?"#1F2937":"#E5E7EB",children:[e.jsxs("span",{className:"flex items-center",style:{gap:"4px",fontSize:"12px",color:s?"#9CA3AF":"#6B7280",fontWeight:500},children:["Next ",e.jsx(T,{size:14})]}),e.jsx("span",{style:{fontSize:"14px",color:"#10B981",fontWeight:500,marginTop:"2px"},children:p.title})]}):e.jsx("div",{})]})]})]})]})}function et(){const{theme:o}=m(),t=o==="dark",[s,n]=d.useState(""),[r,i]=d.useState(""),[a,l]=d.useState(!1),p=()=>{s.trim()&&(l(!0),i(""),setTimeout(()=>{i(`[Simulated AI Response]

Based on your prompt:
"${s.trim()}"

This is a simulated response from the AI model. In a production environment, this would connect to an actual LLM API to generate real responses.

Your prompt was ${s.length} characters long.`),l(!1)},1200))},g=()=>{n(""),i("")};return e.jsxs("div",{className:"grid lg:grid-cols-2",style:{gap:"0",border:`1px solid ${t?"#1F2937":"#E5E7EB"}`,borderRadius:"12px",overflow:"hidden"},children:[e.jsxs("div",{style:{borderRight:t?"1px solid #1F2937":"1px solid #E5E7EB"},children:[e.jsxs("div",{className:"flex items-center justify-between",style:{padding:"12px 16px",backgroundColor:t?"#1E293B":"#F9FAFB",borderBottom:`1px solid ${t?"#1F2937":"#E5E7EB"}`},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:600,color:t?"#9CA3AF":"#6B7280",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Prompt"}),e.jsxs("div",{className:"flex items-center",style:{gap:"8px"},children:[e.jsxs("button",{onClick:g,style:{display:"flex",alignItems:"center",gap:"4px",padding:"6px 12px",borderRadius:"6px",border:"none",cursor:"pointer",fontSize:"13px",fontWeight:500,backgroundColor:t?"#374151":"#E5E7EB",color:t?"#9CA3AF":"#6B7280"},children:[e.jsx(ke,{size:14})," Reset"]}),e.jsxs("button",{onClick:p,disabled:a||!s.trim(),style:{display:"flex",alignItems:"center",gap:"4px",padding:"6px 16px",borderRadius:"6px",border:"none",cursor:s.trim()&&!a?"pointer":"not-allowed",fontSize:"13px",fontWeight:600,background:s.trim()&&!a?"linear-gradient(135deg, #10B981, #059669)":t?"#374151":"#D1D5DB",color:"#fff",opacity:s.trim()&&!a?1:.6},children:[e.jsx(U,{size:14})," ",a?"Running...":"Run"]})]})]}),e.jsx("textarea",{value:s,onChange:f=>n(f.target.value),placeholder:"Type your prompt here...",style:{width:"100%",minHeight:"300px",padding:"20px",border:"none",outline:"none",resize:"vertical",fontFamily:"var(--font-mono)",fontSize:"14px",lineHeight:1.7,backgroundColor:t?"#0F172A":"#FFFFFF",color:t?"#E2E8F0":"#111827"}})]}),e.jsxs("div",{children:[e.jsx("div",{style:{padding:"12px 16px",backgroundColor:t?"#1E293B":"#F9FAFB",borderBottom:`1px solid ${t?"#1F2937":"#E5E7EB"}`},children:e.jsx("span",{style:{fontSize:"13px",fontWeight:600,color:t?"#9CA3AF":"#6B7280",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Output"})}),e.jsx("div",{style:{minHeight:"300px",padding:"20px",fontFamily:"var(--font-mono)",fontSize:"14px",lineHeight:1.7,backgroundColor:t?"#0B1220":"#F9FAFB",color:t?"#E2E8F0":"#111827",whiteSpace:"pre-wrap"},children:a?e.jsxs("div",{className:"flex items-center",style:{gap:"8px",color:"#10B981"},children:[e.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#10B981",animation:"pulse 1s infinite"}}),"Generating response..."]}):r||e.jsx("span",{style:{color:t?"#4B5563":"#9CA3AF"},children:"Output will appear here after running your prompt..."})})]}),e.jsx("style",{children:"@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }"})]})}const tt=[{title:"Explain a Concept",prompt:"Explain machine learning to a 10-year-old using an analogy with cooking."},{title:"Code Generation",prompt:"Write a Python function that checks if a string is a palindrome. Include comments and type hints."},{title:"Structured Output",prompt:`List 5 benefits of renewable energy.

Format:
- Bullet points
- Include one sentence explanation per point`},{title:"Role Prompting",prompt:`You are a senior software engineer reviewing code.

Review this function and suggest improvements:

def add(a, b):
  return a + b`}];function nt(){const{theme:o}=m(),t=o==="dark";return e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"40px 24px"},children:[e.jsx(E,{items:[{label:"Playground"}]}),e.jsx("h1",{style:{fontSize:"2.25rem",fontWeight:800,marginBottom:"8px",color:t?"#F9FAFB":"#111827"},children:"Prompt Playground"}),e.jsx("p",{style:{fontSize:"16px",color:t?"#9CA3AF":"#6B7280",marginBottom:"32px",lineHeight:1.7},children:"Experiment with prompts in an interactive editor. Write, run, and refine your prompts."}),e.jsx(et,{}),e.jsxs("div",{style:{marginTop:"48px"},children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:600,color:t?"#F9FAFB":"#111827",marginBottom:"20px"},children:"Example Prompts"}),e.jsx("div",{className:"grid",style:{gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"16px"},children:tt.map(s=>e.jsxs("div",{style:{padding:"16px",borderRadius:"8px",border:`1px solid ${t?"#1F2937":"#E5E7EB"}`,backgroundColor:t?"#111827":"#FFFFFF",cursor:"pointer",transition:"border-color 0.15s"},onMouseEnter:n=>n.currentTarget.style.borderColor="#10B981",onMouseLeave:n=>n.currentTarget.style.borderColor=t?"#1F2937":"#E5E7EB",onClick:()=>{const n=document.querySelector("textarea");n&&(Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set.call(n,s.prompt),n.dispatchEvent(new Event("input",{bubbles:!0})))},children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:600,color:t?"#F9FAFB":"#111827",marginBottom:"8px"},children:s.title}),e.jsx("p",{style:{fontSize:"13px",color:t?"#6B7280":"#9CA3AF",fontFamily:"var(--font-mono)",lineHeight:1.5,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical"},children:s.prompt})]},s.title))})]})]})}const L=[{id:1,title:"Explain Like I'm 5",description:"Write a prompt that gets the AI to explain blockchain to a 5-year-old.",difficulty:"beginner",hint:"Specify the audience age and ask for a simple analogy."},{id:2,title:"Structured Code Review",description:"Ask the AI to review a Python function and provide feedback in a structured format.",difficulty:"intermediate",hint:"Define the review format: summary, issues, suggestions."},{id:3,title:"Multi-Step Reasoning",description:"Write a prompt that forces the AI to show step-by-step reasoning for a math problem.",difficulty:"advanced",hint:'Use chain-of-thought: "Think step by step before answering."'}];function rt(){const{theme:o}=m(),t=o==="dark",[s,n]=d.useState(null),[r,i]=d.useState(""),[a,l]=d.useState(!1),p=L.find(g=>g.id===s);return e.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto",padding:"40px 24px"},children:[e.jsx(E,{items:[{label:"Challenges"}]}),e.jsx("h1",{style:{fontSize:"2.25rem",fontWeight:800,marginBottom:"8px",color:t?"#F9FAFB":"#111827"},children:"Prompt Challenges"}),e.jsx("p",{style:{fontSize:"16px",color:t?"#9CA3AF":"#6B7280",marginBottom:"32px",lineHeight:1.7},children:"Test your prompt engineering skills with hands-on challenges."}),e.jsx("div",{className:"grid lg:grid-cols-3",style:{gap:"16px",marginBottom:"32px"},children:L.map(g=>e.jsxs("button",{onClick:()=>{n(g.id),i(""),l(!1)},style:{padding:"20px",borderRadius:"10px",border:`1px solid ${s===g.id?"#10B981":t?"#1F2937":"#E5E7EB"}`,backgroundColor:s===g.id?t?"rgba(16,185,129,0.08)":"rgba(16,185,129,0.05)":t?"#111827":"#FFFFFF",cursor:"pointer",textAlign:"left",transition:"border-color 0.15s"},children:[e.jsxs("div",{className:"flex items-start justify-between",style:{marginBottom:"8px"},children:[e.jsx("h3",{style:{fontSize:"15px",fontWeight:600,color:t?"#F9FAFB":"#111827"},children:g.title}),e.jsx(P,{level:g.difficulty})]}),e.jsx("p",{style:{fontSize:"13px",color:t?"#9CA3AF":"#6B7280",lineHeight:1.5},children:g.description})]},g.id))}),p&&e.jsxs("div",{style:{borderRadius:"12px",border:`1px solid ${t?"#1F2937":"#E5E7EB"}`,overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"16px 20px",backgroundColor:t?"#1E293B":"#F9FAFB",borderBottom:`1px solid ${t?"#1F2937":"#E5E7EB"}`},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:600,color:t?"#F9FAFB":"#111827"},children:p.title}),e.jsx("p",{style:{fontSize:"14px",color:t?"#9CA3AF":"#6B7280",marginTop:"4px"},children:p.description})]}),e.jsx("textarea",{value:r,onChange:g=>i(g.target.value),placeholder:"Write your prompt here...",style:{width:"100%",minHeight:"180px",padding:"20px",border:"none",outline:"none",resize:"vertical",fontFamily:"var(--font-mono)",fontSize:"14px",lineHeight:1.7,backgroundColor:t?"#0F172A":"#FFFFFF",color:t?"#E2E8F0":"#111827"}}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between",style:{padding:"12px 20px",backgroundColor:t?"#1E293B":"#F9FAFB",borderTop:`1px solid ${t?"#1F2937":"#E5E7EB"}`,gap:"8px"},children:[e.jsxs("button",{onClick:()=>l(!a),className:"flex items-center",style:{gap:"6px",padding:"8px 14px",borderRadius:"6px",border:"none",cursor:"pointer",fontSize:"13px",fontWeight:500,backgroundColor:t?"#374151":"#E5E7EB",color:t?"#E5E7EB":"#374151"},children:[e.jsx(be,{size:14})," ",a?"Hide":"Show"," Hint"]}),e.jsxs("button",{className:"flex items-center",style:{gap:"6px",padding:"8px 16px",borderRadius:"6px",border:"none",cursor:r.trim()?"pointer":"not-allowed",fontSize:"13px",fontWeight:600,background:r.trim()?"linear-gradient(135deg, #10B981, #059669)":t?"#374151":"#D1D5DB",color:"#fff",opacity:r.trim()?1:.6},children:[e.jsx(U,{size:14})," Submit"]})]}),a&&e.jsx("div",{style:{padding:"16px 20px",borderTop:`1px solid ${t?"#1F2937":"#E5E7EB"}`,backgroundColor:t?"rgba(16,185,129,0.05)":"rgba(16,185,129,0.03)"},children:e.jsxs("p",{style:{fontSize:"14px",color:"#10B981",lineHeight:1.5},children:["💡 ",e.jsx("strong",{children:"Hint:"})," ",p.hint]})})]})]})}function ot({current:o=0,total:t=1,label:s}){const{theme:n}=m(),r=n==="dark",i=t>0?Math.round(o/t*100):0;return e.jsxs("div",{style:{marginBottom:"16px"},children:[s&&e.jsxs("div",{className:"flex items-center justify-between",style:{marginBottom:"6px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:500,color:r?"#E5E7EB":"#374151"},children:s}),e.jsxs("span",{style:{fontSize:"13px",fontWeight:600,color:"#10B981"},children:[o,"/",t]})]}),e.jsx("div",{style:{width:"100%",height:"6px",borderRadius:"3px",backgroundColor:r?"#1F2937":"#E5E7EB",overflow:"hidden"},children:e.jsx("div",{style:{width:`${i}%`,height:"100%",borderRadius:"3px",background:"linear-gradient(90deg, #10B981, #22D3EE)",transition:"width 0.3s ease"}})})]})}function it(){const{theme:o}=m(),t=o==="dark",s=v(),n=Re(),r=n.length,i=[{icon:C,label:"Total Lessons",value:r,color:"#10B981"},{icon:Z,label:"Challenges",value:3,color:"#22D3EE"},{icon:Se,label:"Modules",value:s.length,color:"#F59E0B"},{icon:B,label:"Est. Time",value:`${n.reduce((a,l)=>a+(l.duration||0),0)} min`,color:"#EF4444"}];return e.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto",padding:"40px 24px"},children:[e.jsx(E,{items:[{label:"Dashboard"}]}),e.jsx("h1",{style:{fontSize:"2.25rem",fontWeight:800,marginBottom:"8px",color:t?"#F9FAFB":"#111827"},children:"Dashboard"}),e.jsx("p",{style:{fontSize:"16px",color:t?"#9CA3AF":"#6B7280",marginBottom:"32px"},children:"Track your learning progress and find what to study next."}),e.jsx("div",{className:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"16px",marginBottom:"40px"},children:i.map(a=>{const l=a.icon;return e.jsxs("div",{style:{padding:"20px",borderRadius:"12px",border:`1px solid ${t?"#1F2937":"#E5E7EB"}`,backgroundColor:t?"#111827":"#FFFFFF"},children:[e.jsx(l,{size:20,style:{color:a.color,marginBottom:"8px"}}),e.jsx("p",{style:{fontSize:"24px",fontWeight:700,color:t?"#F9FAFB":"#111827"},children:a.value}),e.jsx("p",{style:{fontSize:"13px",color:t?"#9CA3AF":"#6B7280"},children:a.label})]},a.label)})}),e.jsx("h2",{style:{fontSize:"18px",fontWeight:600,color:t?"#F9FAFB":"#111827",marginBottom:"20px"},children:"Module Progress"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"40px"},children:s.map(a=>{const l=j(a.id);return e.jsx("div",{style:{padding:"20px",borderRadius:"10px",border:`1px solid ${t?"#1F2937":"#E5E7EB"}`,backgroundColor:t?"#111827":"#FFFFFF"},children:e.jsx(ot,{current:0,total:l.length,label:a.title})},a.id)})}),e.jsx("h2",{style:{fontSize:"18px",fontWeight:600,color:t?"#F9FAFB":"#111827",marginBottom:"20px"},children:"Recommended Next"}),e.jsx("div",{className:"grid",style:{gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"16px"},children:n.slice(0,3).map(a=>e.jsxs(x,{to:`/topic/${a.slug}`,style:{display:"block",padding:"16px",borderRadius:"8px",border:`1px solid ${t?"#1F2937":"#E5E7EB"}`,backgroundColor:t?"#1F2937":"#FFFFFF",textDecoration:"none",transition:"border-color 0.15s"},onMouseEnter:l=>l.currentTarget.style.borderColor="#10B981",onMouseLeave:l=>l.currentTarget.style.borderColor=t?"#1F2937":"#E5E7EB",children:[e.jsx("h3",{style:{fontSize:"15px",fontWeight:600,color:t?"#F9FAFB":"#111827",marginBottom:"4px"},children:a.title}),e.jsxs("p",{style:{fontSize:"13px",color:t?"#6B7280":"#9CA3AF"},children:[a.duration," min read"]})]},a.slug))})]})}function st(){const{theme:o}=m(),t=o==="dark",s=v();return e.jsxs("div",{style:{maxWidth:"760px",margin:"0 auto",padding:"40px 32px"},children:[e.jsx(E,{items:[{label:"Documentation"}]}),e.jsx("h1",{style:{fontSize:"2.25rem",fontWeight:800,marginBottom:"8px",color:t?"#F9FAFB":"#111827"},children:"Documentation"}),e.jsx("p",{style:{fontSize:"16px",color:t?"#9CA3AF":"#6B7280",marginBottom:"40px",lineHeight:1.7},children:"Browse the complete prompt engineering reference guide."}),s.map(n=>{const r=j(n.id);return e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h2",{style:{fontSize:"16px",fontWeight:600,color:"#10B981",marginBottom:"12px"},children:n.title}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:r.map(i=>e.jsxs(x,{to:`/topic/${i.slug}`,className:"flex items-center justify-between",style:{padding:"14px 16px",borderRadius:"8px",border:`1px solid ${t?"#1F2937":"#E5E7EB"}`,backgroundColor:t?"#111827":"#FFFFFF",textDecoration:"none",transition:"border-color 0.15s"},onMouseEnter:a=>a.currentTarget.style.borderColor="#10B981",onMouseLeave:a=>a.currentTarget.style.borderColor=t?"#1F2937":"#E5E7EB",children:[e.jsxs("div",{className:"flex items-center",style:{gap:"12px"},children:[e.jsx(fe,{size:16,style:{color:t?"#6B7280":"#9CA3AF"}}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:500,color:t?"#E5E7EB":"#111827"},children:i.title}),e.jsx("p",{style:{fontSize:"13px",color:t?"#6B7280":"#9CA3AF"},children:i.description})]})]}),e.jsxs("span",{className:"flex items-center",style:{gap:"4px",fontSize:"12px",color:t?"#6B7280":"#9CA3AF",flexShrink:0},children:[e.jsx(B,{size:12}),i.duration,"m"]})]},i.slug))})]},n.id)})]})}function at(){const{theme:o}=m(),t=o==="dark",[s,n]=d.useState(""),[r,i]=d.useState(""),a=l=>{l.preventDefault(),alert("Login functionality is a demo. No backend connected.")};return e.jsx("div",{className:"flex items-center justify-center",style:{minHeight:"calc(100vh - 64px)",padding:"40px 24px"},children:e.jsxs("div",{style:{width:"100%",maxWidth:"400px",padding:"32px",borderRadius:"16px",border:`1px solid ${t?"#1F2937":"#E5E7EB"}`,backgroundColor:t?"#111827":"#FFFFFF"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:"linear-gradient(135deg, #10B981, #22D3EE)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:e.jsx("span",{style:{color:"#fff",fontWeight:800,fontSize:"20px",fontFamily:"var(--font-mono)"},children:">_"})}),e.jsx("h1",{style:{fontSize:"24px",fontWeight:700,color:t?"#F9FAFB":"#111827",marginBottom:"4px"},children:"Welcome back"}),e.jsx("p",{style:{fontSize:"14px",color:t?"#9CA3AF":"#6B7280"},children:"Sign in to continue learning"})]}),e.jsxs("button",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"10px",borderRadius:"8px",border:`1px solid ${t?"#374151":"#E5E7EB"}`,backgroundColor:"transparent",cursor:"pointer",fontSize:"14px",fontWeight:500,color:t?"#E5E7EB":"#374151",marginBottom:"24px"},children:[e.jsx(A,{size:18})," Continue with GitHub"]}),e.jsxs("div",{className:"flex items-center",style:{gap:"12px",marginBottom:"24px"},children:[e.jsx("div",{style:{flex:1,height:"1px",backgroundColor:t?"#1F2937":"#E5E7EB"}}),e.jsx("span",{style:{fontSize:"12px",color:t?"#6B7280":"#9CA3AF"},children:"or"}),e.jsx("div",{style:{flex:1,height:"1px",backgroundColor:t?"#1F2937":"#E5E7EB"}})]}),e.jsxs("form",{onSubmit:a,children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:500,color:t?"#E5E7EB":"#374151",marginBottom:"6px"},children:"Email"}),e.jsxs("div",{className:"flex items-center",style:{borderRadius:"8px",border:`1px solid ${t?"#374151":"#E5E7EB"}`,overflow:"hidden",backgroundColor:t?"#0F172A":"#F9FAFB"},children:[e.jsx("span",{style:{padding:"0 12px",color:t?"#6B7280":"#9CA3AF"},children:e.jsx(q,{size:16})}),e.jsx("input",{type:"email",value:s,onChange:l=>n(l.target.value),placeholder:"you@example.com",style:{flex:1,padding:"10px 12px 10px 0",border:"none",outline:"none",fontSize:"14px",backgroundColor:"transparent",color:t?"#E5E7EB":"#111827"}})]})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:500,color:t?"#E5E7EB":"#374151",marginBottom:"6px"},children:"Password"}),e.jsxs("div",{className:"flex items-center",style:{borderRadius:"8px",border:`1px solid ${t?"#374151":"#E5E7EB"}`,overflow:"hidden",backgroundColor:t?"#0F172A":"#F9FAFB"},children:[e.jsx("span",{style:{padding:"0 12px",color:t?"#6B7280":"#9CA3AF"},children:e.jsx(G,{size:16})}),e.jsx("input",{type:"password",value:r,onChange:l=>i(l.target.value),placeholder:"••••••••",style:{flex:1,padding:"10px 12px 10px 0",border:"none",outline:"none",fontSize:"14px",backgroundColor:"transparent",color:t?"#E5E7EB":"#111827"}})]})]}),e.jsx("button",{type:"submit",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"none",cursor:"pointer",fontSize:"14px",fontWeight:600,color:"#fff",background:"linear-gradient(135deg, #10B981, #059669)"},children:"Sign In"})]}),e.jsxs("p",{style:{textAlign:"center",marginTop:"24px",fontSize:"14px",color:t?"#9CA3AF":"#6B7280"},children:["Don't have an account? ",e.jsx(x,{to:"/signup",style:{color:"#10B981",textDecoration:"none",fontWeight:500},children:"Sign up"})]})]})})}function lt(){const{theme:o}=m(),t=o==="dark",[s,n]=d.useState(""),[r,i]=d.useState(""),[a,l]=d.useState(""),p=h=>{h.preventDefault(),alert("Signup is a demo. No backend connected.")},g={flex:1,padding:"10px 12px 10px 0",border:"none",outline:"none",fontSize:"14px",backgroundColor:"transparent",color:t?"#E5E7EB":"#111827"},f={borderRadius:"8px",overflow:"hidden",border:`1px solid ${t?"#374151":"#E5E7EB"}`,backgroundColor:t?"#0F172A":"#F9FAFB"},c={padding:"0 12px",color:t?"#6B7280":"#9CA3AF"};return e.jsx("div",{className:"flex items-center justify-center",style:{minHeight:"calc(100vh - 64px)",padding:"40px 24px"},children:e.jsxs("div",{style:{width:"100%",maxWidth:"400px",padding:"32px",borderRadius:"16px",border:`1px solid ${t?"#1F2937":"#E5E7EB"}`,backgroundColor:t?"#111827":"#FFFFFF"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"32px"},children:[e.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"12px",background:"linear-gradient(135deg, #10B981, #22D3EE)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px"},children:e.jsx("span",{style:{color:"#fff",fontWeight:800,fontSize:"20px",fontFamily:"var(--font-mono)"},children:">_"})}),e.jsx("h1",{style:{fontSize:"24px",fontWeight:700,color:t?"#F9FAFB":"#111827",marginBottom:"4px"},children:"Create an account"}),e.jsx("p",{style:{fontSize:"14px",color:t?"#9CA3AF":"#6B7280"},children:"Start your prompt engineering journey"})]}),e.jsxs("button",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"10px",borderRadius:"8px",border:`1px solid ${t?"#374151":"#E5E7EB"}`,backgroundColor:"transparent",cursor:"pointer",fontSize:"14px",fontWeight:500,color:t?"#E5E7EB":"#374151",marginBottom:"24px"},children:[e.jsx(A,{size:18})," Sign up with GitHub"]}),e.jsxs("div",{className:"flex items-center",style:{gap:"12px",marginBottom:"24px"},children:[e.jsx("div",{style:{flex:1,height:"1px",backgroundColor:t?"#1F2937":"#E5E7EB"}}),e.jsx("span",{style:{fontSize:"12px",color:t?"#6B7280":"#9CA3AF"},children:"or"}),e.jsx("div",{style:{flex:1,height:"1px",backgroundColor:t?"#1F2937":"#E5E7EB"}})]}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:500,color:t?"#E5E7EB":"#374151",marginBottom:"6px"},children:"Name"}),e.jsxs("div",{className:"flex items-center",style:f,children:[e.jsx("span",{style:c,children:e.jsx(Be,{size:16})}),e.jsx("input",{type:"text",value:s,onChange:h=>n(h.target.value),placeholder:"Your name",style:g})]})]}),e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:500,color:t?"#E5E7EB":"#374151",marginBottom:"6px"},children:"Email"}),e.jsxs("div",{className:"flex items-center",style:f,children:[e.jsx("span",{style:c,children:e.jsx(q,{size:16})}),e.jsx("input",{type:"email",value:r,onChange:h=>i(h.target.value),placeholder:"you@example.com",style:g})]})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:500,color:t?"#E5E7EB":"#374151",marginBottom:"6px"},children:"Password"}),e.jsxs("div",{className:"flex items-center",style:f,children:[e.jsx("span",{style:c,children:e.jsx(G,{size:16})}),e.jsx("input",{type:"password",value:a,onChange:h=>l(h.target.value),placeholder:"••••••••",style:g})]})]}),e.jsx("button",{type:"submit",style:{width:"100%",padding:"12px",borderRadius:"8px",border:"none",cursor:"pointer",fontSize:"14px",fontWeight:600,color:"#fff",background:"linear-gradient(135deg, #10B981, #059669)"},children:"Create Account"})]}),e.jsxs("p",{style:{textAlign:"center",marginTop:"24px",fontSize:"14px",color:t?"#9CA3AF":"#6B7280"},children:["Already have an account? ",e.jsx(x,{to:"/login",style:{color:"#10B981",textDecoration:"none",fontWeight:500},children:"Sign in"})]})]})})}function ct(){const{theme:o}=m(),t=o==="dark";return e.jsxs("div",{className:"flex flex-col items-center justify-center",style:{minHeight:"calc(100vh - 64px - 73px)",padding:"60px 24px",textAlign:"center"},children:[e.jsx("h1",{style:{fontSize:"6rem",fontWeight:800,lineHeight:1,marginBottom:"16px",background:"linear-gradient(135deg, #10B981, #22D3EE)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"404"}),e.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:600,color:t?"#F9FAFB":"#111827",marginBottom:"12px"},children:"Page not found"}),e.jsx("p",{style:{fontSize:"16px",color:t?"#9CA3AF":"#6B7280",marginBottom:"32px",maxWidth:"400px"},children:"The page you are looking for does not exist or has been moved."}),e.jsx(x,{to:"/",style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"12px 24px",borderRadius:"8px",background:"linear-gradient(135deg, #10B981, #059669)",color:"#fff",fontSize:"14px",fontWeight:600,textDecoration:"none"},children:"← Back to Home"})]})}function dt(){return e.jsx(oe,{children:e.jsx(ie,{children:e.jsxs(b,{element:e.jsx(He,{}),children:[e.jsx(b,{path:"/",element:e.jsx(qe,{})}),e.jsx(b,{path:"/modules",element:e.jsx(Ze,{})}),e.jsx(b,{path:"/topic/:slug",element:e.jsx(Qe,{})}),e.jsx(b,{path:"/playground",element:e.jsx(nt,{})}),e.jsx(b,{path:"/challenges",element:e.jsx(rt,{})}),e.jsx(b,{path:"/dashboard",element:e.jsx(it,{})}),e.jsx(b,{path:"/docs",element:e.jsx(st,{})}),e.jsx(b,{path:"/login",element:e.jsx(at,{})}),e.jsx(b,{path:"/signup",element:e.jsx(lt,{})}),e.jsx(b,{path:"*",element:e.jsx(ct,{})})]})})})}function pt(){return e.jsx(pe,{children:e.jsx(dt,{})})}de.createRoot(document.getElementById("root")).render(e.jsx(se.StrictMode,{children:e.jsx(pt,{})}));
