import React from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { PageMeta } from "../components/site/PageMeta";
import { ClosingCta, PageHero } from "../components/site/PageHero";
import styles from "./routePages.module.scss";

const title = "Virtual Me";
const description =
  "Chat with a virtual version of Alvaro to learn more about his background, work, and approach.";

export default function Chat(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <PageMeta
        title="Chat with Virtual Alvaro"
        description={description}
        path="/chat"
      />
      <PageHero
        eyebrow="AI experiment / Virtual Alvaro"
        title={
          <>
            Ask the site instead of <em>searching it.</em>
          </>
        }
        description="A conversational way to explore my background, projects, writing, and approach before speaking with the real me."
        index="AI"
        primaryLabel="Chat with the real Alvaro"
        primaryHref="/contact"
        secondaryLabel="Browse projects"
        secondaryHref="/projects"
      />
      <main>
        <section
          className={styles.contentSection}
          aria-labelledby="chat-heading"
        >
          <div className="container">
            <div className={styles.chatLayout}>
              <aside className={styles.chatGuide}>
                <p>01 / Ask Virtual Alvaro</p>
                <h2 id="chat-heading">Good questions to start with</h2>
                <ul>
                  <li>How do you work with founders?</li>
                  <li>What is your approach to architecture?</li>
                  <li>Which talks cover AI or delivery?</li>
                </ul>
                <p>This assistant is an AI experience and may make mistakes.</p>
              </aside>
              <div className={styles.chatSurface}>
                <BrowserOnly>
                  {() => {
                    const ChatComponent =
                      // eslint-disable-next-line @typescript-eslint/no-require-imports
                      require("../components/Chat/Chat").default;
                    return <ChatComponent />;
                  }}
                </BrowserOnly>
              </div>
            </div>
          </div>
        </section>
        <ClosingCta
          eyebrow="Need a definitive answer?"
          title="Some conversations should still be human."
          description="For advisory, speaking, or collaboration enquiries, contact me directly."
          primaryLabel="Contact Alvaro"
          primaryHref="/contact"
          secondaryLabel="Explore services"
          secondaryHref="/services"
        />
      </main>
    </Layout>
  );
}
