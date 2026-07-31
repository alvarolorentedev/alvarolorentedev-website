import React from "react";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import Layout from "@theme/Layout";

import { Project, ProjectData } from "../components/projects/Project";
import { PageMeta } from "../components/site/PageMeta";
import BarklarmLogo from "./assets/projects/barklarm-logo.svg";
import OctolaunchLogo from "./assets/projects/octolaunch-logo.svg";
import OpencodeLogo from "./assets/projects/opencode-logo.svg";
import owlumiIcon from "./assets/projects/owlumi-icon.png";
import PwnedPackagesLogo from "./assets/projects/pwnedpackages-logo.svg";
import SimulmarktLogo from "./assets/projects/simulmarkt-logo.svg";
import VFXBeatLogo from "./assets/projects/vfxbeat-logo.svg";
import styles from "./projects.module.scss";

const projects: ProjectData[] = [
  {
    title: "OpenCode Mobile",
    category: "AI developer experience",
    description:
      "A mobile client for following, controlling, and continuing OpenCode sessions away from your desk.",
    capability:
      "Designing human oversight into agentic coding workflows without tying developers to a workstation.",
    accent: "#bbcbd5",
    url: "https://play.google.com/apps/testing/app.getopencode",
    logo: <OpencodeLogo title="OpenCode Mobile logo" role="img" />,
  },
  {
    title: "OctoLaunch",
    category: "DevOps intelligence",
    description:
      "A DevOps intelligence platform that connects deployments, CI/CD activity, incidents, and production signals into a shared investigation context.",
    capability:
      "Turning fragmented operational data into faster root-cause analysis and clearer engineering decisions.",
    accent: "#c3d3cc",
    url: "https://octolaunch.com/",
    logo: <OctolaunchLogo title="OctoLaunch logo" role="img" />,
  },
  {
    title: "Simulmarkt",
    category: "Decision intelligence",
    description:
      "An AI-powered platform for validating products, pricing, positioning, messaging, and market opportunities using simulated audiences.",
    capability:
      "Reducing product uncertainty by testing consequential market decisions before committing real time and money.",
    accent: "#d9d0b8",
    url: "https://simulmarkt.com/",
    logo: <SimulmarktLogo title="Simulmarkt logo" role="img" />,
  },
  {
    title: "VFXBeat",
    category: "Creative technology",
    description:
      "A local-first creative tool for generating music videos with synchronized visual effects, lyrics, and social-ready formats.",
    capability:
      "Combining media processing and approachable workflows in a product that keeps creative work private and local.",
    accent: "#cec4d2",
    url: "https://vfxbeat.com/",
    logo: <VFXBeatLogo title="VFXBeat logo" role="img" />,
  },
  {
    title: "Owlumi",
    category: "Consumer AI",
    description:
      "A creative experience for generating personalized stories and imaginative adventures for children and families.",
    capability:
      "Shaping approachable AI experiences around trust, creativity, and a specific family ritual.",
    accent: "#d8c2ba",
    url: "https://play.google.com/apps/testing/com.playowlumi",
    logo: <Image img={owlumiIcon} alt="Owlumi owl app icon" />,
  },
  {
    title: "PwnedPackages",
    category: "Supply-chain security",
    description:
      "Tools and experiments for identifying risky, compromised, or malicious software dependencies before they reach production.",
    capability:
      "Applying security intelligence at the point where engineering teams make dependency decisions.",
    accent: "#c9d2b5",
    url: "https://pwnedpackages.com/",
    logo: <PwnedPackagesLogo title="PwnedPackages logo" role="img" />,
  },
  {
    title: "Barklarm",
    category: "Engineering productivity",
    description:
      "A desktop app that centralizes build and monitoring alarms natively in the operating system.",
    capability:
      "Making critical delivery signals visible without adding another dashboard to monitor.",
    accent: "#dac9b6",
    url: "https://www.barklarm.com/",
    logo: <BarklarmLogo title="Barklarm logo" role="img" />,
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
                  I build technology ventures across AI, developer tooling,
                  platform engineering, security, decision intelligence, and
                  creative software. The work keeps my advice grounded in the
                  same uncertainty, tradeoffs, and delivery pressure founders
                  face.
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
                    <dd>AI-native products</dd>
                  </div>
                  <div>
                    <dt>02</dt>
                    <dd>Developer platforms</dd>
                  </div>
                  <div>
                    <dt>03</dt>
                    <dd>Security &amp; operations</dd>
                  </div>
                  <div>
                    <dt>04</dt>
                    <dd>Decision intelligence</dd>
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
