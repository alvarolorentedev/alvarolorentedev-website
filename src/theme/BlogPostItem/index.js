import React from "react";
import clsx from "clsx";
import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";

import {
  BlogSeriesHeader,
  BlogSeriesNavigator,
} from "@site/src/components/BlogSeries";
import styles from "./styles.module.scss";

function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? "margin-bottom--xl" : undefined;
}

function AuthorContext() {
  const { metadata, isBlogPostPage } = useBlogPost();
  const author = metadata.authors[0];

  if (!isBlogPostPage || !author) {
    return null;
  }

  return (
    <aside className={styles.author} aria-labelledby="article-author-title">
      {author.imageURL && (
        <img
          className={styles.authorImage}
          src={author.imageURL}
          alt=""
          width="72"
          height="72"
          loading="lazy"
          decoding="async"
        />
      )}
      <div>
        <h2 id="article-author-title" className={styles.authorTitle}>
          About {author.name}
        </h2>
        <p className={styles.authorDescription}>
          {author.title}. Alvaro advises software companies on engineering
          strategy, architecture, delivery systems, and technical leadership.
        </p>
        {author.url && <a href={author.url}>More about Alvaro</a>}
      </div>
    </aside>
  );
}

export default function BlogPostItem({ children, className }) {
  const containerClassName = useContainerClassName();

  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <BlogPostItemHeader />
      <BlogSeriesHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogSeriesNavigator />
      <AuthorContext />
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
