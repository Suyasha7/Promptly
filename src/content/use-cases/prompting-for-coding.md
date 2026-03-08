---
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

```text
[Language]
[Task description]
[Constraints]
[Example input/output]
```

## Key Principles

- Always specify the programming language
- Provide clear problem constraints
- Define the expected output format
- Ask for comments when needed

## Practical Examples

### Example 1 — String Reversal

```text
Write a Python function that reverses a string.
```

### Example 2 — Array Sorting

```text
Write a JavaScript function that sorts an array of numbers in ascending order.
Include comments explaining each step.
```

### Example 3 — Prime Check

```python
# Write a Python function that checks if a number is prime.
# Include comments explaining each step.

def is_prime(n):
    if n < 2:
        return False  # Numbers less than 2 are not prime
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False  # Divisible by another number
    return True  # No divisors found, it's prime
```

## Prompt vs Improved Prompt

### ❌ Bad Prompt

```text
Write a sorting program.
```

**Problems:** Language not specified, algorithm not defined, no constraints.

### ✅ Improved Prompt

```text
Write a Python function that sorts a list of integers using the quicksort algorithm.

Requirements:
- Use recursion
- Include comments explaining the algorithm
- Include example usage
```

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
