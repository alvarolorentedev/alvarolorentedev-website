import clsx from "clsx";
import React, { FunctionComponent, ReactNode } from "react";

import DiscoverIcon from "./assets/icon-discover.svg";
import styles from "./Service.module.scss";

export interface ServiceData {
  title: string;
  description: string;
  role?: string;
  url: string;
  image: ReactNode;
}

export const Service: FunctionComponent<ServiceData> = ({
  title,
  description,
  url,
  role,
  image,
}) => {
  return (
    <div className={clsx("col col--6", styles.cardContainer)}>
      <div className={clsx("card", styles.card)}>
        <div className={clsx("card__image", styles.image)}>
          {image}
          {role && (
            <span className={clsx("badge badge--secondary", styles.role)}>
              Role: {role}
            </span>
          )}
        </div>
        <div className="card__body">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--primary button--outline"
          >
            <span className="button__icon">
              <DiscoverIcon />
            </span>
            Discuss this service
          </a>
        </div>
      </div>
    </div>
  );
};
