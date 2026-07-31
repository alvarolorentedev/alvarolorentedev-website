import React from "react";
import Layout from "@theme/Layout";

import { Service, ServiceData } from "../components/services/Service";
import { PageMeta } from "../components/site/PageMeta";
import { ClosingCta, PageHero } from "../components/site/PageHero";
import AiAdvisory from "./assets/services/ai-advisory.svg";
import ArchitectureModernization from "./assets/services/architecture-modernization.svg";
import DevopsDelivery from "./assets/services/devops-delivery.svg";
import EngineeringStrategy from "./assets/services/engineering-strategy.svg";
import FractionalCto from "./assets/services/fractional-cto.svg";
import MentoringWorkshops from "./assets/services/mentoring-workshops.svg";
import styles from "./services.module.scss";

const services: ServiceData[] = [
  {
    title: "Fractional CTO advisory",
    description:
      "Ongoing senior technical leadership for founders and executive teams who need clearer priorities, stronger decision-making rhythms, and practical support shaping engineering strategy.",
    image: <FractionalCto title="Fractional CTO advisory" role="img" />,
    url: "https://cal.com/alvarolorente/30min",
    role: "Advisor",
  },
  {
    title: "AI and LLM product advisory",
    description:
      "Support teams building AI-enabled products, internal agents, and automation workflows with product evaluation, technical roadmap guidance, and implementation direction.",
    image: <AiAdvisory title="AI and LLM product advisory" role="img" />,
    url: "https://cal.com/alvarolorente/30min",
    role: "AI",
  },
  {
    title: "Engineering strategy and operating model",
    description:
      "Define the team structure, decision rights, and delivery cadence that help organizations scale from startup pace to a more predictable engineering operating model.",
    image: <EngineeringStrategy title="Engineering strategy" role="img" />,
    url: "https://cal.com/alvarolorente/30min",
    role: "Strategy",
  },
  {
    title: "Leadership mentoring and workshops",
    description:
      "Coaching for engineering managers and technical leaders who want to strengthen servant leadership, grow team ownership, and share better technical practices.",
    image: <MentoringWorkshops title="Leadership mentoring" role="img" />,
    url: "https://cal.com/alvarolorente/30min",
    role: "Mentor",
  },
  {
    title: "Delivery excellence and DevOps",
    description:
      "Improve flow, reliability, and security with stronger CI/CD, observability, operational habits, and delivery metrics such as DORA in high-change environments.",
    image: <DevopsDelivery title="Delivery excellence and DevOps" role="img" />,
    url: "https://cal.com/alvarolorente/30min",
    role: "Delivery",
  },
  {
    title: "Architecture modernization",
    description:
      "Simplify complex systems, reduce technical friction, and guide re-architecture decisions across modular monoliths, microservices, DDD, and platform boundaries.",
    image: (
      <ArchitectureModernization
        title="Architecture modernization"
        role="img"
      />
    ),
    url: "https://cal.com/alvarolorente/30min",
    role: "Architect",
  },
];

const title = "Services";
const description =
  "Services shaped by 15+ years in engineering leadership, architecture, platform engineering, delivery, and AI-enabled product work.";

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
        index="06"
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

            <div className="row">
              {services.map((service) => (
                <Service key={service.title} {...service} />
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
