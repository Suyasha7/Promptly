---
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

```text
[Question]
[Instruction to reason step by step]
[Request for final answer]
```

This forces the model to simulate a logical reasoning process.

## Key Principles

- **Encourage reasoning** — explicitly ask for it
- **Ask for intermediate steps** — not just the answer
- **Separate reasoning from final answer** — keep them distinct

## Practical Examples

### Example 1 — Math Problem

```text
A store sells apples for $2 each. If you buy 5 or more, you get a 20% discount. How much do 7 apples cost?

Solve this step by step.
```

**Expected output:**
1. Price per apple: $2
2. Number of apples: 7
3. Without discount: 7 × $2 = $14
4. Since 7 ≥ 5, 20% discount applies
5. Discount: $14 × 0.20 = $2.80
6. Final price: $14 - $2.80 = **$11.20**

### Example 2 — Reasoning

```text
Explain your reasoning before giving the answer:
Is a tomato a fruit or a vegetable?
```

### Example 3 — Multi-step

```text
Think through the problem step by step and show your reasoning:
If all roses are flowers, and some flowers fade quickly, can we conclude that some roses fade quickly?
```

## Prompt vs Improved Prompt

### ❌ Bad Prompt

```text
What is 47 × 18?
```

The AI may answer directly but mistakes can occur.

### ✅ Improved Prompt

```text
What is 47 × 18?

Solve the problem step by step and show your reasoning before giving the final answer.
```

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
