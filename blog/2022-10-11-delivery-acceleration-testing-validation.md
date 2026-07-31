---
published: true
title: 'Delivery Acceleration: Testing & Validation'
draft: false
description: is testing enough to make sure our code works?
authors:
- alvarolorentedev
tags:
- softwaredevelopment
- programming
- devops
- productivity
canonical_url: 'https://alvarolorente.dev/blog/2022/10/11/delivery-acceleration-testing-validation'
cover_image: https://www.alvarolorente.dev/img/blog/testing.jpg
series: Accelerate Continious Integration & Delivery Practices
---

Before we enable code for our clients, we need to test and validate it does what is expected. This could be an entire series of its own (please let me know if you want one), so I will keep it on a high level.

<!-- truncate -->

## Testing

I could probably spend hours sharing different types of testing strategies and where and why to use them.  
In reality, the most important thing, is to make sure we use the correct ratio of the different types of tests, as it will highly affect the time and location of your testing.

This ratio has always been shown as a pyramid with:

* **Unit test**: validate individual pieces of logic that are isolated.
* **Integration test**: validates interactions with multiple parts of your system or other systems.
* **Integrated test**: They test the system as a whole.

![Testing pyramid showing unit, integration, and end-to-end test ratio](https://www.alvarolorente.dev/img/blog/pyramid.jpeg)

Tests are divided in these layers because there is a cost in time and complexity.

This affect the next DORA 4 metrics:

* ✔️ **Change Failure Rate**

## Validation

Validation differs from testing as it's the confirmation that the behavior is what the user expected, for now, humans are the only ones that can discern this.  
As we have seen in the previous chapter, the recommendation is to do this in production, so you get:

* Get real behaviors of interactions with other systems
* Get real performance

This affect the next DORA 4 metrics:

* ✔️ **Change Failure Rate**