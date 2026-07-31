import React, { FunctionComponent, ReactNode } from "react";
import Link from "@docusaurus/Link";

import styles from "./Site.module.scss";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  index: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export const PageHero: FunctionComponent<PageHeroProps> = ({
  eyebrow,
  title,
  description,
  index,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}) => (
  <header className={styles.hero}>
    <div className="container">
      <div className={styles.heroLayout}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1>{title}</h1>
          <p className={styles.intro}>{description}</p>
          {(primaryHref || secondaryHref) && (
            <div className={styles.actions}>
              {primaryHref && (
                <a
                  className="button button--primary button--lg"
                  href={primaryHref}
                  target={primaryHref.startsWith("http") ? "_blank" : undefined}
                  rel={
                    primaryHref.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {primaryLabel}
                </a>
              )}
              {secondaryHref && (
                <Link className={styles.textLink} to={secondaryHref}>
                  {secondaryLabel} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          )}
        </div>
        <span className={styles.heroIndex} aria-hidden="true">
          {index}
        </span>
      </div>
    </div>
  </header>
);

interface ClosingCtaProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export const ClosingCta: FunctionComponent<ClosingCtaProps> = ({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}) => (
  <section className={styles.cta}>
    <div className="container">
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.actions}>
        <a
          className="button button--primary button--lg"
          href={primaryHref}
          target={primaryHref.startsWith("http") ? "_blank" : undefined}
          rel={
            primaryHref.startsWith("http") ? "noopener noreferrer" : undefined
          }
        >
          {primaryLabel}
        </a>
        {secondaryHref && (
          <Link className={styles.textLinkDark} to={secondaryHref}>
            {secondaryLabel} <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </div>
  </section>
);
