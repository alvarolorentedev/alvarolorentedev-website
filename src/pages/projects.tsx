import React from "react";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";
import { PageMeta } from "../components/site/PageMeta";
import BarklarmLogo from "./assets/projects/barklarm-logo.svg";
import billlyLogo from "./assets/projects/billly-logo-text.png";
import FlagbearLogo from "./assets/projects/flagbear-logo.svg";
import OctolaunchLogo from "./assets/projects/octolaunch-logo.svg";
import OpencodeLogo from "./assets/projects/opencode-logo.svg";
import owlumiIcon from "./assets/projects/owlumi-icon.png";
import strengthsosLogo from "./assets/projects/strengthsos-logo-navbar.png";
import styles from "./projects.module.scss";

const projects: ProjectData[] = [
  {
    title: "OctoLaunch",
    category: "Developer operations",
    description:
      "A DevOps companion for correlating CI/CD events, deployments, incidents, and production signals.",
    capability:
      "Turning fragmented operational data into a clearer system for engineering decisions.",
    accent: "#c3d3cc",
    url: "https://octolaunch.com/",
    logo: <OctolaunchLogo title="OctoLaunch logo" role="img" />,
  },
  {
    title: "StrengthsOS",
    category: "Engineering leadership",
    description:
      "A capability workflow for engineering leaders to define role expectations, assess gaps, and plan growth.",
    capability:
      "Connecting organizational design, career development, and engineering effectiveness.",
    accent: "#d9d0b8",
    url: "https://strengthsos.com/",
    logo: <Image img={strengthsosLogo} alt="StrengthsOS logo" />,
  },
  {
    title: "OpenCode Mobile",
    category: "AI developer experience",
    description:
      "A mobile companion for OpenCode that lets you inspect tasks, approve changes, and keep agent work moving.",
    capability:
      "Designing human oversight into AI-assisted workflows without slowing delivery.",
    accent: "#bbcbd5",
    url: "http://getopencode.app/",
    logo: <OpencodeLogo title="OpenCode Mobile logo" role="img" />,
  },
  {
    title: "Owlumi",
    category: "Consumer AI",
    description:
      "A calm storytelling companion for families that co-creates bedtime stories with a friendly owl mascot.",
    capability:
      "Shaping approachable AI experiences around trust, context, and a specific human ritual.",
    accent: "#d8c2ba",
    url: "http://playowlumi.com/",
    logo: <Image img={owlumiIcon} alt="Owlumi owl app icon" />,
  },
  {
    title: "Billly",
    category: "Conversational fintech",
    description:
      "A WhatsApp-based expense manager that splits household bills automatically and sends payment links.",
    capability:
      "Removing product friction by meeting users inside a familiar communication channel.",
    accent: "#c9d2b5",
    url: "https://billly.xyz/",
    logo: <Image img={billlyLogo} alt="Billly logo" />,
  },
  {
    title: "Barklarm",
    category: "Engineering productivity",
    description:
      "A desktop app that centralizes build and monitoring alarms natively in the operating system.",
    capability:
      "Making critical delivery signals visible without adding another dashboard to monitor.",
    accent: "#cec4d2",
    url: "https://www.barklarm.com/",
    logo: <BarklarmLogo title="Barklarm logo" role="img" />,
  },
  {
    title: "Flagbear",
    category: "Software architecture",
    description:
      "A serviceless feature flag system for enabling and disabling features without a third-party platform.",
    capability:
      "Choosing a deliberately small architecture when operational simplicity is the real requirement.",
    accent: "#dac9b6",
    url: "https://www.flagbear.dev/",
    logo: <FlagbearLogo title="Flagbear logo" role="img" />,
  },
];

const title = "Technology ventures and products";
const description =
  "Selected products that show how Alvaro Lorente approaches technology strategy, product decisions, and pragmatic execution.";

export default function Projects(): JSX.Element {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.url,
        creator: {
          "@type": "Person",
          "@id": "https://alvarolorente.dev/#person",
          name: "Alvaro Lorente",
        },
      },
    })),
  };

  return (
    <Layout title={title} description={description}>
      <PageMeta
        title={title}
        description={description}
        path="/projects"
        structuredData={structuredData}
      />

      <main>
        <header className={styles.hero}>
          <div className="container">
            <div className={styles.heroLayout}>
              <div className={styles.heroContent}>
                <p className={styles.eyebrow}>
                  Alvaro Lorente / Venture portfolio
                </p>
                <h1>
                  Products are where <em>strategy earns its keep.</em>
                </h1>
                <p className={styles.intro}>
                  I build technology ventures across developer tools, AI,
                  fintech, and engineering leadership. The work keeps my advice
                  grounded in the same uncertainty, tradeoffs, and delivery
                  pressure founders face.
                </p>
                <div className={styles.actions}>
                  <a
                    className="button button--primary button--lg"
                    href="https://cal.com/alvarolorente/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discuss your next move
                  </a>
                  <a className={styles.textLink} href="#selected-work">
                    See the portfolio <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
              <aside
                className={styles.heroIndex}
                aria-label="Portfolio overview"
              >
                <span className={styles.projectCount}>07</span>
                <p>ventures shaped from idea to working product</p>
                <dl>
                  <div>
                    <dt>01</dt>
                    <dd>Developer platforms</dd>
                  </div>
                  <div>
                    <dt>02</dt>
                    <dd>Applied AI</dd>
                  </div>
                  <div>
                    <dt>03</dt>
                    <dd>Leadership systems</dd>
                  </div>
                  <div>
                    <dt>04</dt>
                    <dd>Consumer products</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </header>

        <section id="selected-work" className={styles.workSection}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>01 / Selected work</p>
              <h2>Built close to the problem.</h2>
              <p>
                Each venture starts with a real constraint, not a technology
                trend. The result is a portfolio of deliberate bets on where
                software can remove friction or create leverage.
              </p>
            </div>

            <div className={styles.projectGrid}>
              {projects.map((project, index) => (
                <Project
                  key={project.title}
                  {...project}
                  index={index + 1}
                  featured={index === 0}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.principlesSection}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>02 / Operating principles</p>
              <h2>Useful technology leadership is an operating discipline.</h2>
            </div>
            <div className={styles.principles}>
              <article>
                <span>01</span>
                <h3>Start with the constraint</h3>
                <p>
                  Understand the business pressure, customer behavior, and team
                  reality before selecting architecture or process.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Ship to learn</h3>
                <p>
                  Reduce uncertainty through deliberate increments, observable
                  systems, and feedback that informs the next decision.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Design for change</h3>
                <p>
                  Build systems and teams that can evolve without turning every
                  new direction into a costly transformation.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <p className={styles.eyebrow}>Your next decision</p>
            <h2>Bring an operator’s perspective into the room.</h2>
            <p>
              For founders navigating architecture, delivery, AI adoption, or
              the next stage of an engineering organization.
            </p>
            <div className={styles.actions}>
              <a
                className="button button--primary button--lg"
                href="https://cal.com/alvarolorente/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss your next move
              </a>
              <Link
                className="button button--outline button--primary button--lg"
                to="/services"
              >
                Explore services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
