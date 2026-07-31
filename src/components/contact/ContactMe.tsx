import React, { FunctionComponent } from "react";
import clsx from "clsx";
import styles from "./ContactMe.module.scss";

export const ContactMe: FunctionComponent = () => {
  return (
    <div className={clsx("row", styles.wrapper)}>
      <div className={clsx("col col--6", styles.panel)}>
        <h2>Send me an email</h2>
        <p className={styles.copy}>
          If you are exploring fractional CTO support, architecture advisory, or
          a speaking opportunity, email is the simplest place to start.
        </p>
        <form
          action="https://formsubmit.co/3c8246267233c5a0a531977be346fe98"
          method="POST"
          className={styles.form}
        >
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" type="text" name="name" required />
          <label htmlFor="contact-email">Your email</label>
          <input id="contact-email" type="email" name="email" required />
          <label htmlFor="contact-context">What decision are you facing?</label>
          <textarea
            id="contact-context"
            name="message"
            rows={5}
            required
            placeholder="A little context, what is at stake, and your timeline."
          />
          <button className="button button--primary" type="submit">
            Send context
          </button>
        </form>
      </div>
      <div className={clsx("col col--6", styles.panel)}>
        <h2>Prefer a direct conversation?</h2>
        <p className={styles.copy}>
          Book a short call if you want to talk through your context quickly.
        </p>
        <div className={styles.actions}>
          <a
            className="button button--primary"
            href="https://cal.com/alvarolorente/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a 30 minute call
          </a>
        </div>

        <h2 className={styles.secondaryHeading}>Or say hi on LinkedIn</h2>
        <p className={styles.copy}>
          LinkedIn is a good option for lightweight intros and follow-up.
        </p>
        <a
          href="https://www.linkedin.com/in/alvarolorentedev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say hi on LinkedIn
        </a>
      </div>
    </div>
  );
};
