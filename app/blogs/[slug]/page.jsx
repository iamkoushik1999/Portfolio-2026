import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import styles from './page.module.css';
import homeStyles from '../../page.module.css';
import { Navbar } from '../../../components/Navbar/Navbar';
import { BlogContent } from '../../../components/Blog/BlogContent';
import { Contact } from '../../../components/Contact/Contact';
import { BackToTop } from '../../../components/BackToTop/BackToTop';
import { getAllBlogs, getBlogBySlug, formatBlogDate } from '../../../lib/blog';
import { getImageUrl } from '../../../lib/utils';
import { SITE_URL, SITE_NAME } from '../../../lib/site';

export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return { title: 'Post not found' };
  }

  const url = `/blogs/${blog.slug}`;

  return {
    title: blog.title,
    description: blog.excerpt,
    keywords: blog.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: blog.title,
      description: blog.excerpt,
      publishedTime: blog.date,
      tags: blog.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const { title, excerpt, date, readTime, tags, coverImage, content } = blog;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt,
    datePublished: date,
    dateModified: date,
    image: `${SITE_URL}${getImageUrl(coverImage)}`,
    author: { '@type': 'Person', name: SITE_NAME },
    keywords: tags.join(', '),
    mainEntityOfPage: `${SITE_URL}/blogs/${slug}`,
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <div className={homeStyles.App}>
        <Navbar />

        <div className={styles.header}>
          <Link href='/blogs' className={styles.back}>
            &larr; Back to blogs
          </Link>

          <div className={styles.headerInner} data-aos='fade-up'>
            <ul className={styles.tags}>
              {tags.map((tag, id) => (
                <li className={styles.tag} key={id}>
                  {tag}
                </li>
              ))}
            </ul>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.meta}>
              <span>{formatBlogDate(date)}</span>
              <span aria-hidden='true'>&middot;</span>
              <span>{readTime}</span>
            </p>
          </div>
        </div>

        <div className={styles.cover} data-aos='fade-up'>
          <div className={styles.coverImageWrap}>
            <Image
              className={styles.coverImage}
              src={getImageUrl(coverImage)}
              alt={title}
              fill
              sizes='(max-width: 960px) 100vw, 960px'
              priority
            />
          </div>
        </div>

        <article className={styles.article} data-aos='fade-up'>
          <BlogContent content={content} />
        </article>

        <Contact />
      </div>
      <BackToTop />
    </>
  );
}
