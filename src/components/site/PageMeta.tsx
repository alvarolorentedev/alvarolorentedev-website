import React, { FunctionComponent } from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface PageMetaProps {
  title: string;
  description: string;
  path: string;
  structuredData?: object;
}

export const PageMeta: FunctionComponent<PageMetaProps> = ({
  title,
  description,
  path,
  structuredData,
}) => {
  const { siteConfig } = useDocusaurusContext();
  const url = `${siteConfig.url}${path}`;
  const image = `${siteConfig.url}/img/logo-small.png`;

  return (
    <Head>
      <meta property="og:title" content={`${title} | Alvaro Lorente`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Alvaro Lorente`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Head>
  );
};
