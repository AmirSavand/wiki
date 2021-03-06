import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="SA-MP Wiki and open.mp API Documentation - A mostly complete copy of the SA-MP Wiki with improvements and updates to documentation.">
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img
            className={styles.logoImage}
            src={useBaseUrl("public/logo-light-mono.svg")}
            alt={siteConfig.title}
          />
          <div className={classnames(styles.hero__warning)}>
            <h1>
              {/* <a href="https://www.open.mp/wiki">
                IF THIS LOOKS BROKEN GO TO THE NEW URL HERE AT open.mp/wiki -
                SORRY FOR THE INCONVENIENCE!
              </a> */}
            </h1>
          </div>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/index")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className="intro">
        <section>
          <h1>SA-MP Wiki Content</h1>
          <p>
            This site contains a (mostly) complete and improved copy of the
            SA-MP Wiki since it was taken offline.
          </p>
          <p>
            The SA-MP Wiki went offline around the 25th of September 2020 along
            with the forum. It was also removed from the{" "}
            <a href="https://sa-mp.com">SA-MP homepage</a> around the same date.
          </p>
          <p>
            Because of this, the open.mp team along with many amazing community
            members came together to reconstruct the vast wealth of knowledge
            the SA-MP Wiki contained on this new site.
          </p>
          <h2>Improvements over the original wiki site</h2>
          <p>
            Not only have we moved over the content from the Internet Archive
            but we have also made an effort to improve the content with more
            modern code examples, better wording, more examples and a fresh new
            modern website that's easier to navigate, search and contribute to.
          </p>
          <h2>Contributing</h2>
          <p>
            Helping out is easier than ever! This site doesn't use the old
            MediaWiki software or its clunky syntax. The documentation here is
            all writen in a popular but simple language known as Markdown.
          </p>
          <p>
            If you spot an error or notice something is missing, be sure to drop
            by the{" "}
            <a href="https://github.com/openmultiplayer/wiki/">
              GitHub repository
            </a>{" "}
            and file an issue or open a pull request to submit changes.
          </p>
          <h2>Thank You</h2>
          <p>
            Finally, a huge thank you to all the community members, past,
            present and future, who have contributed content to the wiki,
            whether it was 10 years ago or just last week. This collection of
            knowledge is vital to helping newcomers navigate the complexities of
            both building gamemodes or just learning to code.
          </p>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
