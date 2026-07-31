import React from "react";
import Layout from "@theme/Layout";
import { ContactMe } from "../components/contact/ContactMe";
import { PageMeta } from "../components/site/PageMeta";
import { PageHero } from "../components/site/PageHero";
import styles from "./routePages.module.scss";

const title = "Contact Me";
const description =
  "Get in touch to discuss fractional CTO support, engineering strategy, architecture, or speaking.";

export default function Contact(): JSX.Element {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: "https://alvarolorente.dev/contact",
    mainEntity: {
      "@type": "Person",
      "@id": "https://alvarolorente.dev/#person",
      name: "Alvaro Lorente",
      email: "mailto:contact@alvarolorente.dev",
    },
  };

  return (
    <Layout title={title} description={description}>
      <PageMeta
        title="Contact Alvaro Lorente"
        description={description}
        path="/contact"
        structuredData={structuredData}
      />
      <PageHero
        eyebrow="Start a conversation"
        title={
          <>
            Bring me the decision that has <em>no obvious answer.</em>
          </>
        }
        description="Share the context, the pressure, and what is at stake. I will tell you directly whether I can help."
        index="@"
        primaryLabel="Book a 30 minute call"
        primaryHref="https://cal.com/alvarolorente/30min"
        secondaryLabel="Explore services"
        secondaryHref="/services"
      />
      <main>
        <section
          className={styles.contentSection}
          aria-labelledby="contact-heading"
        >
          <div className="container">
            <div className={styles.sectionHeading}>
              <p>01 / Choose your pace</p>
              <h2 id="contact-heading">
                Async or live. Start where it is easiest.
              </h2>
            </div>
            <ContactMe />
          </div>
        </section>
      </main>
    </Layout>
  );
}
