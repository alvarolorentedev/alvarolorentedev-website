import clsx from "clsx";
import React, { FunctionComponent } from "react";
import Link from "@docusaurus/Link";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.kicker}>Fractional CTO / Technology advisor</p>
            <h1 className={clsx("hero__title", styles.title)}>
              Technical leadership for companies at an{" "}
              <em>inflection point.</em>
            </h1>
            <p className={clsx("hero__subtitle", styles.subtitle)}>
              I help founders and engineering leaders make consequential
              decisions about product, architecture, delivery, AI, and the
              organization behind the software.
            </p>
            <div className={styles.actions}>
              <a
                className="button button--primary button--lg"
                href="https://cal.com/alvarolorente/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss your next move
              </a>
              <Link className={styles.textLink} to="/services">
                Explore advisory services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <aside className={styles.signal} aria-label="Experience overview">
            <span>15+</span>
            <p>
              years working across engineering, architecture, delivery, and
              leadership
            </p>
            <ul>
              <li>Founder and product builder</li>
              <li>Global remote advisor</li>
              <li>Speaker and writer</li>
            </ul>
          </aside>
        </div>
      </div>
    </header>
  );
};
