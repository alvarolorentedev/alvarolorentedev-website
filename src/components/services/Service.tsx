import clsx from "clsx";
import React, { CSSProperties, FunctionComponent } from "react";

import DiscoverIcon from "./assets/icon-discover.svg";
import styles from "./Service.module.scss";

export type ServiceVisual =
  | "strategy"
  | "organization"
  | "ai"
  | "architecture"
  | "leadership"
  | "startup"
  | "diligence";

export interface ServiceData {
  title: string;
  description: string;
  role: string;
  url: string;
  visual: ServiceVisual;
  accent: string;
}

interface ServiceProps extends ServiceData {
  index: number;
  featured?: boolean;
}

const ServiceIcon = ({ visual }: { visual: ServiceVisual }): JSX.Element => {
  const paths: Record<ServiceVisual, JSX.Element> = {
    strategy: (
      <>
        <circle cx="24" cy="72" r="7" />
        <circle cx="56" cy="45" r="7" />
        <circle cx="88" cy="20" r="7" />
        <path d="M30 66 50 51M62 39l20-14M72 20h16v16" />
      </>
    ),
    organization: (
      <>
        <rect x="38" y="14" width="28" height="20" rx="4" />
        <rect x="8" y="66" width="28" height="20" rx="4" />
        <rect x="68" y="66" width="28" height="20" rx="4" />
        <path d="M52 34v17M22 66V51h60v15" />
      </>
    ),
    ai: (
      <>
        <path d="M52 13 58 31 76 37 58 43 52 61 46 43 28 37 46 31Z" />
        <path d="m78 60 3 9 9 3-9 3-3 9-3-9-9-3 9-3Z" />
        <path d="m24 66 2 6 6 2-6 2-2 6-2-6-6-2 6-2Z" />
      </>
    ),
    architecture: (
      <>
        <rect x="15" y="17" width="74" height="20" rx="4" />
        <rect x="15" y="43" width="34" height="20" rx="4" />
        <rect x="55" y="43" width="34" height="20" rx="4" />
        <rect x="15" y="69" width="74" height="16" rx="4" />
      </>
    ),
    leadership: (
      <>
        <circle cx="52" cy="29" r="14" />
        <path d="M25 84c2-19 11-30 27-30s25 11 27 30" />
        <path d="m73 18 8-8 8 8M81 10v28" />
      </>
    ),
    startup: (
      <>
        <path d="M52 12c17 8 26 23 25 42L54 77 31 54c-1-19 8-34 21-42Z" />
        <circle cx="55" cy="36" r="7" />
        <path d="m34 59-12 4 19 19 4-12M31 77l-8 8M39 85l-7 7" />
      </>
    ),
    diligence: (
      <>
        <circle cx="45" cy="43" r="25" />
        <path d="m63 61 22 22M34 43l8 8 16-18" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 104 104" aria-hidden="true">
      {paths[visual]}
    </svg>
  );
};

export const Service: FunctionComponent<ServiceProps> = ({
  title,
  description,
  url,
  role,
  visual,
  accent,
  index,
  featured = false,
}) => {
  return (
    <article
      className={clsx(styles.card, featured && styles.featured)}
      style={{ "--service-accent": accent } as CSSProperties}
    >
      <div className={styles.visual}>
        <span className={styles.index}>{String(index).padStart(2, "0")}</span>
        <div className={styles.icon}>
          <ServiceIcon visual={visual} />
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <p className={styles.category}>{role}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.bottom}>
          <p className={styles.capability}>
            <span>Engagement focus</span>
            Practical guidance, clear decisions, and capability that stays with
            your team.
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`Discuss ${title} (opens in a new tab)`}
          >
            Discuss service
            <DiscoverIcon />
          </a>
        </div>
      </div>
    </article>
  );
};
