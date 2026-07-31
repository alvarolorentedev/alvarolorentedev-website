---
published: true
title: "Clean Architecture Is Dying How AI Is Killing Essential Software Patterns"
description: "For decades, we repeated a simple idea: code is read more than it is written."
authors: alvarolorentedev
tags:
  - ai
  - software
  - systemdesign
  - programming
draft: false
series: Engineering After AI
canonical_url: 'https://alvarolorente.dev/blog/2026/04/08/clean-architecture-is-dying-how-ai-is-killing-essential-software-patterns'
source_url: 'https://theengineeringtax.com/p/clean-architecture-is-dying-how-ai'
cover_image: https://substack-post-media.s3.amazonaws.com/public/images/47cff2fb-67dd-4c98-9dea-b0cc08902076_1024x1024.png
---

For decades, we repeated a simple idea: code is read more than it is written.

<!-- truncate -->

So we optimized for readability. For naming. For clarity. For structure that could be navigated by someone who didn’t write the code.

That assumption is breaking.

Code is now generated more than it is written. It is traversed by machines before it is ever read by humans. It is modified, expanded, and reorganized by systems that do not need meaningful names or carefully crafted layers to understand what is happening.

Humans are no longer the primary readers of code. We are reviewers at best. We serve as auditors for a system that is becoming increasingly self-reliant.

Despite this, we persist in optimizing as if a future developer will manually navigate the system and comprehend every line.

We are optimizing codes for the wrong audience.

The industry still treats the code as literature.

It is increasingly closer to bytecode.

And because of that, a large part of what we call “good engineering” has quietly become unnecessary. Meaning, patterns, and languages are becoming less important.

![Code now read by machines instead of humans shifting design optimization](https://substack-post-media.s3.amazonaws.com/public/images/47cff2fb-67dd-4c98-9dea-b0cc08902076_1024x1024.png)

---

## **The Cost Model Has Inverted**

This transformation is the shift most people haven’t fully internalized.

In the old model, writing code was expensive. Changing it was risky. Running it was relatively cheap. So we optimized everything around reducing change. We introduced patterns to isolate impact. We introduced abstractions to avoid rewriting. We introduced processes to minimize risk.

In the new model, writing code is cheap. Changing it is cheap. Running it—at scale, continuously, globally—is where cost accumulates. So the optimization target changes.

We should no longer be asking, _“How do we make the code easier to maintain?” ._ We should be asking, _“How do we make the software cheaper to run, easier to validate, and faster to evolve—even if that means rewriting it?”_

We spent decades optimizing the cost of writing code. We are entering a phase where the dominant cost is running it.

---

## **DDD, Hexagonal Architecture… Were Always About Fear**

SOLID principles, Domain-Driven Design, ports and adapters, hexagonal architectures…we were taught these as markers of maturity. These were taught as indicators of engineering rigor. These were taught to distinguish amateurs from professionals.

But underneath, they all share the same assumption: we don’t know what will change, and when it does, it will be expensive.

So we prepare. We abstract. We decouple. We introduce interfaces that may never have more than one implementation. We create layers of indirection to absorb hypothetical futures.

We built systems that are easy to change because changing them was hard.

![Clean architecture patterns unnecessary when regeneration is cheaper](https://substack-post-media.s3.amazonaws.com/public/images/af00a3e1-b74c-48cd-95b3-43aa6724def4_1024x1024.png)

AI changes that equation. We are now operating in a world where regeneration is getting cheaper faster than abstraction.

Abstractions exist to preserve structure over time. They reduce the need to change codes by anticipating variations.

Regeneration does the opposite. It embraces change. It assumes that structure is temporary and can be recreated as needed.

---

## **We Now Care More About Product Quality, Not Code Quality**

We haven’t stopped caring about quality. But it’s moving from structure to behavior. The focus has shifted from code elegance to system outcomes.

Validation shifts toward runtime instead of relying entirely on compile-time guarantees. Observability becomes more important than internal structure, because what matters is not how the system is built, but how it behaves under real conditions.

We move from designing systems that are easy to understand to systems that are easy to evolve.

> The source of truth shifts.
>
> It is no longer the code.
>
> It is the behavior of the system in production.

---

## **TypeScript, C#, and “Developer-Friendly” Languages Were a Local Optimum**

We chose our languages based on developer experience.

TypeScript, C#, Python, Java… All of them share a common goal: make it easier for humans to write and maintain code.

That was the right optimization—when humans were the ones writing most of it.

Now the cost of writing code is collapsing. The marginal effort of producing another implementation, variation, or approach is close to zero when AI is in the loop.

So the axis shifts.

If developer time is no longer the dominant cost, then optimizing for developer ergonomics is no longer the dominant strategy.

What starts to matter is not how easy code is to write but how it behaves when it runs.

We spent the last two decades optimizing the authoring experience, but we are entering a phase where the dominant cost is execution.

---

## **The Return of Low-Level Thinking**

This phase is where things get uncomfortable.

If code is cheap to generate and cheap to change, then performance, memory efficiency, and runtime predictability become more important.

Not because systems got bigger. But because the cost structure shifted.

The trade-off flips. We no longer optimize for developer time. We optimize for machine time.

And that naturally pulls us toward languages and paradigms we spent years abstracting away from.

We might return to low-level languages not because developers improved, but because developers matter less in the loop.

![Runtime behavior now defining quality over internal code structure elegance](https://substack-post-media.s3.amazonaws.com/public/images/ae259ae0-ef1f-4622-9907-8bb352f0fa03_1024x1024.png)

---

## **The Part Nobody Wants to Admit**

A large part of modern software engineering exists to compensate for human limitations.

We built patterns to help us think. Languages to help us express intent. Architectures to help us avoid mistakes.

Those constraints were real. They shaped an entire discipline. But they are not as dominant as they used to be. If the constraints change, the practices built around them do not automatically remain optimal.

Clean Architecture didn’t become wrong.

SOLID didn’t become useless.

TypeScript didn’t become a bad language.

They became expensive.

And most of the industry hasn’t noticed yet.

---

## **🗞️ Other articles you may like**

✌️ That’s all folks

I love hearing from readers, and I’m looking for feedback. _How am I doing with The Engineering Tax? Is there anything you’d like to see more or less? Which aspects of the newsletter do you enjoy the most?_

Use the links below, or even better, hit reply and say hello. I’d love to hear from you!

- [😍 Awesome](https://tally.so/r/nWNL5P?rating=Awesome&source=substack&medium=email&url=ai-kill-software-patterns)

- [😐 Okay](https://tally.so/r/nWNL5P?rating=Okay&source=substack&medium=email&url=ai-kill-software-patterns)

- [🤮 Bad](https://tally.so/r/nWNL5P?rating=Bad&source=substack&medium=email&url=ai-kill-software-patterns)

Please don’t hesitate to connect with me on [LinkedIn](https://www.linkedin.com/in/alvarolorentedev/) and send a message. I always respond to everyone!
