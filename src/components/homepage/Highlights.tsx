import clsx from "clsx";
import React, { FunctionComponent } from "react";
import Link from "@docusaurus/Link";

import styles from "./Highlights.module.scss";

interface HighlightItem {
  title: string;
  description: string;
  href: string;
  cta: string;
}

const items: HighlightItem[] = [
  {
    title: "Fractional CTO partnership",
    description:
      "Hands-on support for founders and engineering leaders who need strategic leverage without adding a full-time executive.",
    href: "/services",
    cta: "See services",
  },
  {
    title: "Architecture with business context",
    description:
      "I help teams simplify architecture decisions so systems stay adaptable, measurable, and aligned with product direction.",
    href: "/projects",
    cta: "View projects",
  },
  {
    title: "Leadership writing and talks",
    description:
      "Practical perspectives on engineering strategy, team design, delivery, and healthier software organizations.",
    href: "/talks",
    cta: "Browse talks",
  },
];

export const Highlights: FunctionComponent = () => {
  return (
    <section className={styles.section} aria-labelledby="focus-areas-title">
      <div className={styles.header}>
        <p className={styles.eyebrow}>How I help</p>
        <h2 id="focus-areas-title">
          Strategy, systems, and leadership that scale
        </h2>
        <p className={styles.lead}>
          I work with software companies that want stronger technical direction
          without sacrificing delivery speed or organizational clarity.
        </p>
      </div>

      <div className="row">
        {items.map((item) => (
          <div
            key={item.title}
            className={clsx("col col--4", styles.cardColumn)}
          >
            <article className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link className={styles.link} to={item.href}>
                {item.cta}
              </Link>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};
