import clsx from "clsx";
import React, { FunctionComponent } from "react";

import DiscoverIcon from "./assets/icon-discover.svg";
import styles from "./Service.module.scss";

type ServiceImage = string | { src?: string; default?: string };

export interface ServiceData {
  title: string;
  description: string;
  role?: string;
  url: string;
  image: ServiceImage;
}

function getImageSrc(image: ServiceImage): string {
  if (typeof image === "string") {
    return image;
  }

  return image.src ?? image.default ?? "";
}

export const Service: FunctionComponent<ServiceData> = ({
  title,
  description,
  url,
  role,
  image,
}) => {
  const imageSrc = getImageSrc(image);

  return (
    <div className={clsx("col col--6", styles.cardContainer)}>
      <div className={clsx("card", styles.card)}>
        <div className={clsx("card__image", styles.image)}>
          <img
            src={imageSrc}
            alt={title}
            title={title}
            width="1200"
            height="700"
            loading="lazy"
            decoding="async"
          />
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
            Discover
          </a>
        </div>
      </div>
    </div>
  );
};
