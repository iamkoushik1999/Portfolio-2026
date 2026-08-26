import Link from 'next/link';
import Image from 'next/image';

import styles from './BlogCard.module.css';
import { getImageUrl } from '../../lib/utils';
import { formatBlogDate } from '../../lib/blog';

export const BlogCard = ({ blog, index = 0 }) => {
  const { slug, title, excerpt, date, readTime, tags, coverImage } = blog;

  return (
    <Link
      href={`/blogs/${slug}`}
      className={styles.container}
      data-aos='fade-up'
      data-aos-delay={(index % 3) * 100}>
      <div className={styles.imageWrap}>
        <Image
          className={styles.image}
          src={getImageUrl(coverImage)}
          alt=''
          fill
          sizes='(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px'
        />
      </div>
      <div className={styles.body}>
        <p className={styles.meta}>
          <span>{formatBlogDate(date)}</span>
          <span aria-hidden='true'>&middot;</span>
          <span>{readTime}</span>
        </p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <ul className={styles.tags}>
          {tags.map((tag, id) => (
            <li className={styles.tag} key={id}>
              {tag}
            </li>
          ))}
        </ul>
        <span className={styles.readMore}>
          Read post <span aria-hidden='true'>&rarr;</span>
        </span>
      </div>
    </Link>
  );
};
