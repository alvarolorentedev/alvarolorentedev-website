---
title: 'Our Engineering Metrics Are About to Get Even More Misleading in the Age of AI'
description: 'The more AI increases visible activity, the less visible activity tells us about real engineering performance.'
authors: alvarolorentedev
tags:
- substack
draft: false
series: ''
canonical_url: 'https://alvarolorente.dev/blog/2026/05/05/our-engineering-metrics-are-about-to-get-even-more-misleading-in-the-age-of-ai'
source_url: 'https://theengineeringtax.com/p/our-metrics-are-about-to-get-even'
cover_image: 
---

T**he more AI increases visible activity, the less visible activity tells us about real engineering performance.**

<!-- truncate -->

For years, engineering organizations have had a quiet habit: we measured what was easiest to count, then convinced ourselves it was what mattered.

Tickets closed. Story points completed. Pull requests merged. Deployments made. Features shipped.

None of these signals were completely useless. But many of them were weak proxies for value. They gave leaders the comfort of visibility without the discipline of understanding. They made dashboards look precise while leaving the real questions unanswered.

Did the work reduce risk? Did it improve reliability? Did it create customer value? Did it lower cognitive load for the team? Did it save us from future rework, or simply postpone it?

This was already a problem before AI. It did not create that weakness. It exposed it.

Because once code, tests, documentation, refactors, and implementation options become dramatically easier to generate, visible activity stops being scarce. And once visible activity stops being scarce, visible activity stops being persuasive.

That is the shift many engineering leaders are about to miss.

The old scoreboard still measures motion. But AI changes the meaning of motion. A team can now generate more output than ever before and still create more instability, more review burden, more hidden rework, and more downstream coordination cost. DORA remains useful precisely because it never treated throughput alone as the story; it pairs flow with stability, recovery, and rework.

So the problem is no longer just that some metrics are incomplete.

## Your dashboard is probably measuring the wrong layer

Most engineering dashboards still focus on the production layer of software delivery.

They measure how much work was opened, merged, deployed, closed, or shipped. They measure movement. They measure the existence of artifacts. They measure the part of the system AI happens to accelerate most visibly.

But that is no longer where the real bottleneck lives.

The real bottleneck keeps moving toward validation, judgment, integration, correction, coordination, and confidence. It moves into the layer where teams have to decide whether generated work is correct, safe, coherent, maintainable enough, and worth the operational cost it introduces downstream.

And that layer is barely visible in most dashboards.

This is why a team can now look dramatically faster at the production layer while becoming slower at the system layer. The dashboard shows acceleration. The organization experiences friction.

That friction is not abstract. Research on collaboration overload found that collaborative activities can consume around 80% of time in many companies, often concentrated in a small fraction of people. Microsoft 365 telemetry has also shown workers being interrupted roughly every two minutes by meetings, email, or notifications. In that environment, generating more artifacts does not automatically improve delivery. It can simply create more things to review, more decisions to validate, and more noise for the system to absorb.

That is why AI-era dashboards are so risky. They often reward the layer that became cheaper while ignoring the layer that became more expensive.

A team can look more productive because it opened more PRs, shipped more changes, or closed more work. Meanwhile, the hidden cost shows up somewhere else: review latency, rollback pressure, approval wait time, clarification loops, unplanned follow-up work, or operational cleanup. If you only watch the visible layer, you miss whether the system is actually converting activity into trusted outcomes.

## What engineering leaders and teams should measure now

The answer is not to throw metrics away.

The answer is to stop asking one class of metrics to do a job it cannot do.

Throughput still matters. Lead time matters. Deployment frequency matters. Change volume can still tell you something. But those numbers should now be treated as clues, not verdicts. On their own, they no longer tell you enough about engineering performance. SPACE already warned against reducing productivity to a single number, and DORA already gave us a better model by pairing flow with stability and rework.

What matters now is balancing production metrics with the metrics that reveal whether the organization actually metabolized the work well.

First, measure validation and correction. Rework rate. Rollback rate. Escaped defects. Review latency. Approval wait time. Unplanned post-release work. These are no longer secondary signals. In the age of AI, they are the cost of turning generated output into trusted output.

Second, measure coordination cost. Queue time between stages. Meeting load tied to delivery. Interrupt-driven work. Cross-team dependency delay. Repeated escalation loops. Clarification churn. These are not administrative side effects. They are part of system performance. Research on process debt in agile teams found that factors such as process unsuitability and role debt were significant predictors of lower job satisfaction, with the model explaining roughly one-third of the variance in job satisfaction across 191 participants in two organizations.

Third, pull outcomes back to the center. Adoption. Retention. Reliability. Time-to-value. Revenue impact. Cost-to-serve. These are much harder to inflate with AI-generated activity. They force the conversation back to whether engineering changed anything meaningful at all. A mature dashboard should make it difficult to confuse reporting theater with customer impact.

That is why a two-layer dashboard makes sense.

One layer should be public and simple: a small set of delivery and outcome measures, the kind leaders can use to discuss performance without drowning everyone in instrumentation.

The second layer should be diagnostic: meeting load, queue times, unplanned work share, rework, interruptions, and the other sources of friction that explain why the system feels slower than the surface metrics suggest. That layer is not for performance theater. It is for learning.

## The Uncomfortable Reality & How-To Survive It

In the age of AI, the easiest thing to scale is visible activity.

That is exactly why visible activity is becoming a dangerous thing to manage by.

Teams will look faster. Dashboards will look healthier. Leadership updates will sound more convincing. And underneath all of that, the system may be carrying more rework, more coordination drag, more review burden, and less real confidence than ever.

That is the trap.

Not that AI will make mediocre teams look productive.

That leadership will reward the appearance of progress while the real bottlenecks move somewhere else.

The organizations that win will not be the ones that generate the most.

They will be the ones disciplined enough to see past the noise, measure what still matters, and refuse to confuse activity with performance.
