import clsx from "clsx";
import React, { CSSProperties, FunctionComponent, ReactNode } from "react";

import DiscoverIcon from "./assets/icon-discover.svg";
import styles from "./Project.module.scss";

export interface ProjectData {
  title: string;
  category: string;
  description: string;
  capability: string;
  accent: string;
  url: string;
  logo: ReactNode;
}

interface ProjectProps extends ProjectData {
  index: number;
  featured?: boolean;
}

export const Project: FunctionComponent<ProjectProps> = ({
  title,
  category,
  description,
  capability,
  accent,
  url,
  logo,
  index,
  featured = false,
}) => {
  return (
    <article
      className={clsx(styles.project, featured && styles.featured)}
      style={{ "--project-accent": accent } as CSSProperties}
    >
      <div className={styles.visual}>
        <span className={styles.index}>{String(index).padStart(2, "0")}</span>
        <div className={styles.image}>{logo}</div>
      </div>
      <div className={styles.content}>
        <div>
          <p className={styles.category}>{category}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.bottom}>
          <p className={styles.capability}>
            <span>What it demonstrates</span>
            {capability}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`Visit ${title} (opens in a new tab)`}
          >
            View project
            <DiscoverIcon />
          </a>
        </div>
      </div>
    </article>
  );
};
