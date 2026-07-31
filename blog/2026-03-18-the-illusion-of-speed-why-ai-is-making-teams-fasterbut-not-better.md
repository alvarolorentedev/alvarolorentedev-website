---
published: true
title: "The Illusion of Speed Why AI Is Making Teams Fasterbut Not Better"
description: "Two weeks ago, I built an MVP for StrengthsOS in under 12 days. At the same time, I started rewriting Octolaunch from scratch. That’s not the interesting part."
authors: alvarolorentedev
tags:
  - ai
  - productivity
  - software
  - devops
draft: false
series: Engineering After AI
canonical_url: 'https://alvarolorente.dev/blog/2026/03/18/the-illusion-of-speed-why-ai-is-making-teams-fasterbut-not-better'
source_url: 'https://theengineeringtax.com/p/the-illusion-of-speed-why-ai-is-making'
cover_image: https://substack-post-media.s3.amazonaws.com/public/images/7ced8e12-6d3c-4e5e-8e87-7e441bfeb383_480x432.png
---

Two weeks ago, I built an MVP for [StrengthsOS](http://strengthsos.com/) in under 12 days. At the same time, I started rewriting [Octolaunch](https://octolaunch.com/) from scratch. That’s not the interesting part.

<!-- truncate -->

The interesting part is that this is becoming normal.

![AI acceleration mismatch between output speed and outcome improvement](https://substack-post-media.s3.amazonaws.com/public/images/7ced8e12-6d3c-4e5e-8e87-7e441bfeb383_480x432.png)

What used to feel like exceptional productivity is quickly turning into baseline. Features that once required days of focused work now emerge in hours. Entire systems can be scaffolded in a single sitting. The barrier between idea and implementation has almost disappeared.

And if you look at most engineering teams right now, the signals all point in the same direction: more output, faster cycles, and shorter time to code.

So why does it feel like nothing is actually improving?

---

## Output is exploding; outcomes are not

Across teams, the pattern is hard to ignore.

Developers are shipping more code than ever before. Pull requests are increasing, backlogs are moving faster, and the visible indicators of productivity are trending up. On dashboards and status reports, it looks like acceleration.

But when you step back and look at the system as a whole, the picture becomes less convincing.

Quality is not improving in a meaningful way. Delivery performance remains largely unchanged. In many cases, rework is quietly increasing. The system absorbs more activity, but it does not translate into better outcomes.

![Output exploding while outcomes remain flat in AI-driven teams](https://substack-post-media.s3.amazonaws.com/public/images/0d196d12-f8fc-4ab0-9896-d9dd79d402c3_735x389.png)

This is not just anecdotal. Early data is starting to surface a contradiction. Some studies show developers _feel_ significantly more productive—reporting perceived speed increases of over 50% when using AI tooling. At the same time, controlled experiments on complex tasks show performance can actually degrade, particularly for experienced engineers. And broader delivery metrics show little to no improvement in throughput, with stability in some cases declining.

At the individual level, everything feels faster. At the system level, nothing really moves.

That is the paradox.

---

## AI optimized execution, not decisions

The reason becomes clearer when you separate two layers that are often conflated: execution and decision-making.

AI has dramatically improved execution. Writing code, generating tests, exploring implementations—these activities are now cheaper, faster, and easier than ever before. The friction that once slowed down development has largely been removed.

But the hardest part of engineering was never execution.

It was deciding what to build, why it matters, and how it fits into a broader system of constraints. It was aligning multiple stakeholders with different incentives. It was designing systems that could evolve without collapsing under their own complexity.

None of that has changed.

Modern engineering is not a linear pipeline; it is a network of interdependent decisions spanning product, design, security, compliance, and operations. Value is created—or destroyed—at the boundaries between these domains. And those boundaries are still governed by coordination, judgment, and trade-offs.

Research consistently shows that as organizations scale, these coordination costs grow faster than the teams themselves. More stakeholders, more dependencies, more alignment overhead. In many environments, the majority of time is already consumed by communication, meetings, and context switching rather than actual building.

AI does not remove this complexity.

It simply makes it easier to execute whatever decision has already been made.

![Execution optimized by AI but decision-making remains constrained](https://substack-post-media.s3.amazonaws.com/public/images/35a44842-d452-4de5-b132-b08e04a1dd15_681x588.png)

---

## You can now scale bad decisions

This is where the dynamic becomes dangerous.

When execution was expensive, it didn’t just slow teams down—it created space for validation. Building something took time, and that time allowed reality to catch up. Teams could observe how features behaved in the wild, understand trade-offs, and adjust direction before moving forward.

That constraint is now gone. Execution is nearly instantaneous, but validation is not. Customer feedback still takes time. Business impact still takes time. Understanding whether something actually works still takes time.

So we’ve created a mismatch. Decisions are made quickly. They are implemented even faster. But they are validated at the same speed as before.

That means teams are now chaining decisions that haven’t proven themselves yet. A feature is extended before its value is clear. A direction is reinforced before it’s tested. An assumption becomes a roadmap before it becomes evidence.

![AI execution outpacing the slower validation and learning loop](https://substack-post-media.s3.amazonaws.com/public/images/1e587833-e700-4ef8-9de6-8704edb91375_1536x1024.png)

What used to be a sequence of build → learn → adjust is quietly turning into build → build → build. We are not just scaling bad decisions. We are scaling **unvalidated ones**. And the more we accelerate execution without closing that validation loop, the weaker the connection becomes between what we build and the value it creates.

More output doesn’t mean more impact. It just means we are moving faster on assumptions we haven’t yet earned the right to trust.

---

## Conclusion: The bottleneck has moved

For years, engineering was constrained by execution. Now it isn’t. We can build faster than ever before. But we cannot validate, align, or decide any faster than the systems around us allow.

And that creates a new kind of bottleneck.

Not in code. Not in tooling. But in understanding.

The ability to decide what matters. The ability to align around it. The ability to validate it before scaling it.

That is now the limiting factor.

And most teams are still optimizing for the layer that stopped being the constraint.

---

In the next issue, I’ll break down where the real bottleneck is hiding—and why most organizations are not designed to handle it.

## Related reading

- [The real bottleneck in engineering after AI](/blog/2026/03/25/the-real-bottleneck-in-engineering-why-ai-didnt-fix-what-slows-teams-down)
- [Three ways to fix modern engineering bottlenecks](/blog/2026/04/01/engineering-after-ai-3-ways-to-fix-the-real-bottlenecks-in-modern-teams)
- [Why QA engineering gains leverage in the AI era](/blog/2026/04/29/qa-engineering-won-the-war-why-ai-is-shifting-engineering-from-building-to-validation)

Learn how I help organizations improve engineering performance through my [services](/services).
