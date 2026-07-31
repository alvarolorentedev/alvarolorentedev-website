import React, { FunctionComponent } from "react";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import styles from "./AboutMe.module.scss";

export interface AboutMeProps {
  avatar: string;
  avatarAlt: string;
  descriptionComponent: React.ReactNode;
}

export const AboutMe: FunctionComponent<AboutMeProps> = ({
  avatar,
  avatarAlt,
  descriptionComponent,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>About</p>
        <h2>Helping teams move from technical noise to useful direction</h2>
      </div>
      <div className={clsx("row", styles.content)}>
        <div className="col col--6">{descriptionComponent}</div>
        <div className={clsx("col col--5", styles.avatarContainer)}>
          <div className={styles.avatar}>
            <Image img={avatar} alt={avatarAlt} />
          </div>
        </div>
      </div>
    </section>
  );
};
