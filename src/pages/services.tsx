import React from "react";
import Layout from "@theme/Layout";

import { Service, ServiceData } from "../components/services/Service";
import { PageMeta } from "../components/site/PageMeta";
import { ClosingCta, PageHero } from "../components/site/PageHero";
import styles from "./services.module.scss";

const services: ServiceData[] = [
  {
    title: "Technology Strategy and Transformation",
    description:
      "Align technology decisions, architecture, teams, and investments with business goals.",
    visual: "strategy",
    accent: "#c3d3cc",
    url: "https://cal.com/alvarolorente/30min",
    role: "Strategy",
  },
  {
    title: "Organizational Design and Engineering Effectiveness",
    description:
      "Improve team structures, ownership, delivery processes, collaboration, and technical decision-making.",
    visual: "organization",
    accent: "#d9d0b8",
    url: "https://cal.com/alvarolorente/30min",
    role: "Organization",
  },
  {
    title: "AI Strategy, Products and Automation",
    description:
      "Identify valuable AI opportunities and turn them into practical products, agents, and workflows.",
    visual: "ai",
    accent: "#bbcbd5",
    url: "https://cal.com/alvarolorente/30min",
    role: "AI",
  },
  {
    title: "Architecture and Platform Modernization",
    description:
      "Modernize systems, platforms, cloud foundations, developer experience, and engineering practices.",
    visual: "architecture",
    accent: "#d8c2ba",
    url: "https://cal.com/alvarolorente/30min",
    role: "Modernization",
  },
  {
    title: "Fractional CTO and Technology Leadership",
    description:
      "Provide senior technical leadership for startups and organizations navigating growth, change, or complex decisions.",
    visual: "leadership",
    accent: "#c9d2b5",
    url: "https://cal.com/alvarolorente/30min",
    role: "Leadership",
  },
  {
    title: "Startup Product and MVP Advisory",
    description:
      "Help founders validate ideas, define product scope, choose the right architecture, and move efficiently from concept to market.",
    visual: "startup",
    accent: "#cec4d2",
    url: "https://cal.com/alvarolorente/30min",
    role: "Startup",
  },
  {
    title: "Technical Due Diligence and Advisory",
    description:
      "Assess architecture, teams, risks, scalability, security, and technical readiness for investments or strategic decisions.",
    visual: "diligence",
    accent: "#dac9b6",
    url: "https://cal.com/alvarolorente/30min",
    role: "Advisory",
  },
];

const title = "Services";
const description =
  "Technology strategy, organizational design, AI, architecture modernization, fractional CTO leadership, startup advisory, and technical due diligence.";

export default function Services(): JSX.Element {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Alvaro Lorente technology advisory",
    url: "https://alvarolorente.dev/services",
    provider: {
      "@type": "Person",
      "@id": "https://alvarolorente.dev/#person",
      name: "Alvaro Lorente",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Technology leadership services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <Layout title={title} description={description}>
      <PageMeta
        title="Fractional CTO and technology advisory services"
        description={description}
        path="/services"
        structuredData={structuredData}
      />
      <PageHero
        eyebrow="Technology leadership / Services"
        title={
          <>
            Senior judgment for the moments that <em>compound.</em>
          </>
        }
        description="Focused advisory for founders and engineering leaders making consequential decisions about product, architecture, delivery, AI, and organization design."
        index="07"
        primaryLabel="Discuss your context"
        primaryHref="https://cal.com/alvarolorente/30min"
        secondaryLabel="See the work"
        secondaryHref="/projects"
      />

      <main>
        <section className={styles.services} aria-labelledby="services-heading">
          <div className="container">
            <div className={styles.heading}>
              <p>01 / Ways to work together</p>
              <h2 id="services-heading">
                Choose the pressure point, not a package.
              </h2>
              <span>
                Engagements are shaped around the decision or capability that
                matters now, with enough continuity to leave the team stronger.
              </span>
            </div>

            <div className={styles.serviceGrid}>
              {services.map((service, index) => (
                <Service
                  key={service.title}
                  {...service}
                  index={index + 1}
                  featured={index === 0}
                />
              ))}
            </div>
          </div>
        </section>
        <ClosingCta
          eyebrow="Not sure where to start?"
          title="Start with the decision keeping you awake."
          description="A short conversation is enough to establish whether I can help and what a useful engagement would look like."
          primaryLabel="Book a strategy call"
          primaryHref="https://cal.com/alvarolorente/30min"
          secondaryLabel="Contact me"
          secondaryHref="/contact"
        />
      </main>
    </Layout>
  );
}
