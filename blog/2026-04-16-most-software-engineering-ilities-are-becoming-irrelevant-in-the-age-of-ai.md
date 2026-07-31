---
published: true
title: "Most Software Engineering -ilities Are Becoming Irrelevant in the Age of AI"
description: "For decades, engineering has been shaped around a set of principles that we rarely question. Maintainability, testability, modularity, and reusability have..."
authors: alvarolorentedev
tags:
  - ai
  - software
  - systemdesign
  - programming
draft: false
series: Engineering After AI
canonical_url: 'https://alvarolorente.dev/blog/2026/04/16/most-software-engineering-ilities-are-becoming-irrelevant-in-the-age-of-ai'
source_url: 'https://theengineeringtax.com/p/most-software-engineering-ilities'
cover_image: https://substack-post-media.s3.amazonaws.com/public/images/366d545f-8173-4418-83fe-e94602f9286a_1536x1024.png
---

For decades, engineering has been shaped around a set of principles that we rarely question. Maintainability, testability, modularity, and reusability have been treated as foundational qualities of good systems. They are deeply embedded in how we design architectures, review code, and evaluate technical decisions.

<!-- truncate -->

The assumption behind them is simple: if we optimize for these qualities, we will build systems that last longer, scale better, and are easier to evolve.

But that assumption was built for a different world.

A world where writing software was expensive. A world where change was slow. A world where mistakes were costly to recover from.

That world is disappearing, but our mental models have not caught up.

!["-ilities" response to past constraints losing relevance with new cost structure](https://substack-post-media.s3.amazonaws.com/public/images/366d545f-8173-4418-83fe-e94602f9286a_1536x1024.png)

In previous articles, I explored how AI is not removing complexity, but shifting where it lives. Execution is no longer the bottleneck. The constraints have moved toward coordination, decision-making, and validation. The system did not get simpler. It just changed shape.

If you haven’t read them, this builds directly on:

- _[Engineering is no longer the bottleneck](https://theengineeringtax.com/p/the-real-bottleneck-in-engineering)_

- _[The illusion of speed in AI-driven teams](https://theengineeringtax.com/p/the-illusion-of-speed-why-ai-is-making)_

Because once execution stops being the limiting factor, many of the qualities we have historically optimized for don’t just lose importance. They become the wrong optimization target.

---

## Most “-ilities” were never ideals

We tend to talk about “-ilities” as if they were timeless engineering virtues. In reality, they were responses to constraints.

Maintainability exists because rewriting systems was historically expensive. If making changes was difficult, then the rational strategy was to design systems that could be safely extended over time. The goal was not elegance, but survival.

Reusability exists because duplication was costly. If writing the same logic twice meant additional effort, additional bugs, and additional maintenance overhead, then abstracting and centralizing logic became the obvious optimization.

Testability exists because confidence was hard to achieve. When systems were opaque and debugging was slow, the only scalable way to reduce risk was to introduce layers of validation.

These were not universal truths about good engineering. They were adaptations to a specific cost structure.

![Maintainability and reusability value decrease as regeneration becomes cheap](https://substack-post-media.s3.amazonaws.com/public/images/1e794bcd-52b8-4bc7-a3d1-91d436f55020_1536x1024.png)

---

## That cost structure has changed

With AI-assisted development, the cost of producing code has dropped significantly. Generating, modifying, and even rewriting large portions of a system is no longer a prohibitive activity. What used to require careful design upfront can now be explored iteratively at a much lower cost.

This changes the trade-offs in a fundamental way.

If rewriting is cheap, the value of maintainability decreases. If duplication is cheap, the value of reusability decreases. If tests can be generated automatically, the role of testability shifts.

This does not mean these qualities disappear. But it does mean they are no longer the dominant factors in system design.

One of the most overlooked consequences of this shift is that we are still optimizing for the constraints of the past. We are investing time and complexity into preserving systems that, in many cases, would be cheaper to regenerate than to maintain.

When rebuilding becomes cheaper than maintaining, maintainability stops being the primary concern.

---

## The first cracks appear in practice

This is not just a theoretical shift. It is already visible in how systems behave in real organizations.

In one case, a company I spoke with was focused on evolving their core platform to support a new business model. The effort was estimated in months of refactoring, carefully preserving existing structures and abstractions. Instead, a full rewrite using AI was completed in two weeks and reached feature parity.

The implication was not just speed. It was that the original investment in maintainability did not pay off under the new cost structure.

The pattern tends to repeat. Systems were designed with long-term maintainability in mind, often introducing layers of abstraction and structure intended to make future changes easier. Engineers avoid touching certain parts of the system because they are too complex or too constrained.

However, as requirements evolve faster and timelines compress in the age of AI, those same structures become friction. What was designed to enable change starts to resist it.

The assumption that systems will be incrementally evolved over long periods of time is becoming less reliable, and in some cases, a fallacy.

---

## The “-ilities” that AI is killing

If we take the shift in constraints seriously, some “-ilities” are not just losing importance. They are becoming actively misleading as primary goals.

Maintainability is the clearest example. It assumes that systems should be preserved and evolved over long periods of time. But when rebuilding is cheaper than understanding, preserving structure becomes a liability rather than an advantage.

Reusability follows the same pattern. It was designed to reduce duplication in a world where writing code was expensive. Today, duplication is often cheaper than coordination. Shared abstractions introduce dependencies, and dependencies slow teams down. What was once efficiency becomes friction.

Readability is another concept that starts to break under this new model. We have long optimized code for human consumption, assuming that engineers would spend significant time reading and understanding existing systems. But increasingly, machines are the ones generating, modifying, and even explaining code. Human readability is no longer the only, or even the primary, interface.

This does not mean readability disappears entirely, but its role changes. We are no longer optimizing code to be read line by line by humans. We are optimizing systems to be interpreted, transformed, and regenerated by machines.

Testability, while still relevant, is also shifting. The ability to generate tests is improving rapidly, but the ability to define what correctness means has not kept pace. We are automating validation without necessarily improving understanding. This creates a risk of false confidence at scale.

What all of these have in common is that they optimize for a world where execution was expensive. As that constraint weakens, so does their centrality.

---

## The -ilities that remain

If we shift the focus from code to systems, a different set of concerns emerges. These are not tied to how code is written, but to how systems behave under continuous change.

![Observability, reliability, security, scalability, evolvability replacing "-ilities"](https://substack-post-media.s3.amazonaws.com/public/images/42dcc6c6-98f4-4490-b1a1-3eb434f67d20_1536x1024.png)

- Observability becomes critical because systems evolve faster than individuals can track. Understanding behavior in production becomes more valuable than understanding implementation details. When change accelerates, visibility becomes the only stable reference point.

- Reliability remains essential because increased change frequency introduces more opportunities for failure. Faster delivery does not reduce risk; it amplifies it. Systems need to withstand continuous modification without degrading.

- Security expands in scope as AI-generated systems introduce new forms of risk, including supply chain vulnerabilities, generated flaws, and unintended behaviors. The surface area increases even if the effort per change decreases.

- Scalability also becomes more, not less, important. As the cost of building decreases, the number of systems, features, and interactions increases. Load is no longer just a function of users, but of system complexity and internal interactions. Systems must scale not only in traffic, but in the rate of change they can handle.

- Evolvability becomes a more accurate framing than maintainability. The question is no longer whether a system can be maintained efficiently, but whether it can adapt continuously without collapsing under its own complexity.

---

## The uncomfortable conclusion

Engineering has always been about managing constraints.

What has changed is which constraints matter.

If we continue to optimize for maintainability, reusability, and other code-level qualities as primary goals, we risk improving the wrong part of the system. We become more efficient at preserving systems that should be replaced.

The dominant challenges are no longer in writing software, but in deciding what to build, aligning on why it matters, and adapting systems as reality changes.

The most important “-ilities” are no longer properties of code.

They are properties of how organizations operate under increasing speed and complexity.

## **🗞️ Other articles you may like**

---

## ✌️ That’s all folks

I love hearing from readers, and I’m looking for feedback. _How am I doing with The Engineering Tax? Is there anything you’d like to see more or less? Which aspects of the newsletter do you enjoy the most?_

Use the links below, or even better, hit reply and say hello. I’d love to hear from you!

- [😍 Awesome](https://tally.so/r/nWNL5P?rating=Awesome&source=substack&medium=email&url=ai-ilities)

- [😐 Okay](https://tally.so/r/nWNL5P?rating=Okay&source=substack&medium=email&url=ai-ilities)

- [🤮 Bad](https://tally.so/r/nWNL5P?rating=Bad&source=substack&medium=email&url=ai-ilities)

Please don’t hesitate to connect with me on [LinkedIn](https://www.linkedin.com/in/alvarolorentedev/) and send a message. I always respond to everyone!
