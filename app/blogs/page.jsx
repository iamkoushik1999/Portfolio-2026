import styles from './page.module.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { BlogCard } from '../../components/Blog/BlogCard';
import { Contact } from '../../components/Contact/Contact';
import { BackToTop } from '../../components/BackToTop/BackToTop';
import { getAllBlogs } from '../../lib/blog';
import { SITE_NAME } from '../../lib/site';
import homeStyles from '../page.module.css';

const PAGE_TITLE = 'Blogs';
const PAGE_DESCRIPTION = `Notes on shipping full stack projects — hosting, deployment, and the practical trade-offs behind them, written up by ${SITE_NAME}.`;

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: '/blogs',
  },
  openGraph: {
    type: 'website',
    url: '/blogs',
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
};

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <>
      <div className={homeStyles.App}>
        <Navbar />
        <div className={styles.header} data-aos='fade-up'>
          <p className={styles.eyebrow}>Writing</p>
          <h1 className={styles.title}>Blogs</h1>
          <p className={styles.subtitle}>
            Write-ups on shipping and hosting side projects — what worked, what
            tripped me up, and the trade-offs I only noticed after actually
            using the tool.
          </p>
        </div>

        <section className={styles.container}>
          {blogs.length > 0 ? (
            <div className={styles.grid}>
              {blogs.map((blog, id) => (
                <BlogCard key={blog.slug} blog={blog} index={id} />
              ))}
            </div>
          ) : (
            <p className={styles.empty}>No posts yet — check back soon.</p>
          )}
        </section>

        <Contact />
      </div>
      <BackToTop />
    </>
  );
}
