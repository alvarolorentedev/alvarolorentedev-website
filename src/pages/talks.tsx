import React from "react";
import Layout from "@theme/Layout";

import Talk, { TalkMetadata } from "../components/talks/Talk";
import { PageMeta } from "../components/site/PageMeta";
import { ClosingCta, PageHero } from "../components/site/PageHero";
import styles from "./routePages.module.scss";

import CuttingCosts from "./assets/talks/cutting-costs.md";
import LocalAIProductivity from "./assets/talks/local-ai-productivity.md";
import IsUnitTestingDead from "./assets/talks/unit-testing-dead.md";
import ProductThinkingPlatform from "./assets/talks/product-thinking-platform-engineering.md";
import StreamingSuccess from "./assets/talks/streaming-success.md";
import ConwaysLaw from "./assets/talks/conways-law-user-value-architecture.md";

const talks: TalkMetadata[] = [
  {
    title: "Productivity boost for tech experts using local AI",
    description: <LocalAIProductivity />,
    events: [
      {
        name: "DevFest Santiago de Compostela 2025",
        location: "Santiago de Compostela, Spain",
        date: new Date(2025, 9),
      },
    ],
  },
  {
    title:
      "Streaming Success: Optimizing DORA Metrics through Comprehensive Software Development Practices",
    description: <StreamingSuccess />,
    events: [
      {
        name: "Conferencia Agile Spain (CAS'23)",
        location: "Tarragona, Spain",
        date: new Date(2023, 10),
      },
      {
        name: "DevFest Santiago de Compostela 2024",
        location: "Santiago de Compostela, Spain",
        date: new Date(2024, 9),
      },
      {
        name: "DevBcn 2024",
        location: "L'Hospitalet de Llobregat, Spain",
        date: new Date(2024, 5),
      },
    ],
  },
  {
    title: "Is Unit Testing Dead?",
    description: <IsUnitTestingDead />,
    events: [
      {
        name: "XConf Unplugged",
        location: "Madrid, Spain",
        date: new Date(2018, 3),
      },
      {
        name: "XConf Unplugged",
        location: "Barcelona, Spain",
        date: new Date(2018, 4),
      },
    ],
  },
  {
    title: "The Value of Product Thinking in Platform Engineering",
    description: <ProductThinkingPlatform />,
    events: [],
  },
  {
    title:
      "Cutting Costs, Not Corners: Adapting Software Practices for Every Stage of Our Project",
    description: <CuttingCosts />,
    events: [],
  },
  {
    title: "Leveraging Conway's Law to Harmonize User Value & Architecture",
    description: <ConwaysLaw />,
    events: [],
  },
];

const title = "Talks";
const description =
  "Public talks and workshops on engineering leadership, software delivery, platform engineering, AI productivity, and architecture.";

export default function Talks(): JSX.Element {
  const eventStructuredData = talks.flatMap((talk) =>
    talk.events.map((event) => ({
      "@context": "https://schema.org",
      "@type": "EducationEvent",
      name: talk.title,
      startDate: event.date.toISOString(),
      location: {
        "@type": "Place",
        name: event.location,
      },
      organizer: {
        "@type": "Organization",
        name: event.name,
      },
      performer: {
        "@type": "Person",
        "@id": "https://alvarolorente.dev/#person",
        name: "Alvaro Lorente",
      },
    })),
  );

  return (
    <Layout title={title} description={description}>
      <PageMeta
        title="Technology leadership talks and workshops"
        description={description}
        path="/talks"
        structuredData={eventStructuredData}
      />
      <PageHero
        eyebrow="Speaking / Workshops"
        title={
          <>
            Ideas for engineering organizations that want to <em>move.</em>
          </>
        }
        description="Talks built from operating experience across software delivery, platform engineering, architecture, leadership, and practical AI adoption."
        index="06"
        primaryLabel="Invite me to speak"
        primaryHref="/contact"
        secondaryLabel="Read my articles"
        secondaryHref="/blog"
      />
      <main>
        <section
          className={styles.contentSection}
          aria-labelledby="talks-heading"
        >
          <div className="container">
            <div className={styles.sectionHeading}>
              <p>01 / Talk catalogue</p>
              <h2 id="talks-heading">Technical depth, delivered for people.</h2>
              <span>
                Topics can be adapted for conferences, leadership teams,
                internal workshops, and engineering communities.
              </span>
            </div>
            <div className="row">
              {talks.map((talkData) => (
                <Talk key={talkData.title} {...talkData} />
              ))}
            </div>
          </div>
        </section>
        <ClosingCta
          eyebrow="Speaking and workshops"
          title="Give your audience something useful on Monday."
          description="Tell me about the audience, the decision they are facing, and the change you want the session to support."
          primaryLabel="Discuss an event"
          primaryHref="/contact"
          secondaryLabel="Explore services"
          secondaryHref="/services"
        />
      </main>
    </Layout>
  );
}
