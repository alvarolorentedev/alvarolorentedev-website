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

const ServiceDiagram = ({ visual }: { visual: ServiceVisual }): JSX.Element => {
  const diagrams: Record<ServiceVisual, JSX.Element> = {
    strategy: (
      <>
        <path className="guide" d="M24 112C64 112 72 42 122 68s54 54 94-24" />
        <g className="node">
          <rect x="12" y="90" width="42" height="36" rx="6" />
          <path d="M22 111h22" />
        </g>
        <g className="node">
          <rect x="96" y="49" width="52" height="40" rx="6" />
          <path d="M107 68h30" />
        </g>
        <g className="outcome">
          <rect x="190" y="20" width="38" height="46" rx="6" />
          <path d="m200 42 7 7 13-16" />
        </g>
        <circle className="point" cx="73" cy="86" r="4" />
        <circle className="point" cx="170" cy="83" r="4" />
      </>
    ),
    organization: (
      <>
        <g className="outcome">
          <rect x="94" y="12" width="52" height="34" rx="6" />
          <circle cx="109" cy="29" r="5" />
          <path d="M121 29h14" />
        </g>
        <path
          className="guide"
          d="M120 46v24M35 70h170M35 70v20M120 70v20M205 70v20"
        />
        <g className="node">
          <rect x="10" y="90" width="50" height="38" rx="6" />
          <circle cx="25" cy="109" r="5" />
          <path d="M37 109h13" />
        </g>
        <g className="node">
          <rect x="95" y="90" width="50" height="38" rx="6" />
          <circle cx="110" cy="109" r="5" />
          <path d="M122 109h13" />
        </g>
        <g className="node">
          <rect x="180" y="90" width="50" height="38" rx="6" />
          <circle cx="195" cy="109" r="5" />
          <path d="M207 109h13" />
        </g>
      </>
    ),
    ai: (
      <>
        <g className="node">
          <rect x="10" y="20" width="55" height="100" rx="8" />
          <path d="M22 40h31M22 55h20M22 84h31M22 99h24" />
        </g>
        <path className="guide" d="M65 70h30M145 70h30" />
        <g className="outcome">
          <rect x="95" y="43" width="50" height="54" rx="12" />
          <path d="m120 53 4 12 12 4-12 4-4 12-4-12-12-4 12-4Z" />
        </g>
        <g className="node">
          <rect x="175" y="20" width="55" height="100" rx="8" />
          <circle cx="191" cy="44" r="5" />
          <path d="M203 44h16M187 68h32M187 84h24M187 104h32" />
        </g>
      </>
    ),
    architecture: (
      <>
        <g className="node">
          <rect x="12" y="18" width="216" height="28" rx="6" />
          <path d="M25 32h62M179 32h36" />
        </g>
        <g className="outcome">
          <rect x="12" y="56" width="64" height="54" rx="7" />
          <path d="M25 73h38M25 88h25" />
        </g>
        <g className="node">
          <rect x="88" y="56" width="64" height="54" rx="7" />
          <path d="M101 73h38M101 88h30" />
        </g>
        <g className="node">
          <rect x="164" y="56" width="64" height="54" rx="7" />
          <path d="M177 73h38M177 88h24" />
        </g>
        <path className="guide" d="M44 110v16h152v-16M120 110v16" />
      </>
    ),
    leadership: (
      <>
        <g className="outcome">
          <circle cx="120" cy="40" r="22" />
          <circle cx="120" cy="34" r="6" />
          <path d="M108 53c2-8 6-12 12-12s10 4 12 12" />
        </g>
        <path
          className="guide"
          d="M120 62v18M36 80h168M36 80v18M92 80v18M148 80v18M204 80v18"
        />
        <g className="node">
          <rect x="16" y="98" width="40" height="28" rx="6" />
          <path d="M27 112h18" />
        </g>
        <g className="node">
          <rect x="72" y="98" width="40" height="28" rx="6" />
          <path d="M83 112h18" />
        </g>
        <g className="node">
          <rect x="128" y="98" width="40" height="28" rx="6" />
          <path d="M139 112h18" />
        </g>
        <g className="node">
          <rect x="184" y="98" width="40" height="28" rx="6" />
          <path d="M195 112h18" />
        </g>
      </>
    ),
    startup: (
      <>
        <path className="guide" d="M25 104h190" />
        <g className="node">
          <circle cx="35" cy="65" r="22" />
          <path d="M28 66h14M35 59v14" />
          <path d="M35 87v17" />
        </g>
        <g className="node">
          <rect x="82" y="47" width="48" height="40" rx="7" />
          <path d="M94 62h24M94 74h16" />
          <path d="M106 87v17" />
        </g>
        <g className="node">
          <rect x="151" y="35" width="36" height="52" rx="7" />
          <path d="M160 48h18M160 59h18M169 87v17" />
        </g>
        <g className="outcome">
          <path d="M215 25c13 8 17 21 12 37l-20 20-17-17 20-20c0-8 1-14 5-20Z" />
          <circle cx="215" cy="47" r="4" />
          <path d="M203 70l-9 13M212 79l-8 12" />
        </g>
      </>
    ),
    diligence: (
      <>
        <g className="node">
          <rect x="12" y="16" width="142" height="108" rx="8" />
          <path d="M29 38h58M29 56h106M29 76h106M29 96h78" />
          <circle cx="136" cy="38" r="5" />
        </g>
        <g className="outcome">
          <circle cx="171" cy="73" r="36" />
          <path d="m196 98 28 28M155 73l10 10 21-25" />
        </g>
      </>
    ),
  };

  return (
    <svg viewBox="0 0 240 140" aria-hidden="true">
      {diagrams[visual]}
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
        <div className={styles.diagram}>
          <ServiceDiagram visual={visual} />
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
