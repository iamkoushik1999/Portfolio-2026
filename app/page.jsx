import styles from "./page.module.css";
import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Experience } from "../components/Experience/Experience";
import { Certifications } from "../components/Certifications/Certifications";
import { Projects } from "../components/Projects/Projects";
import { Contact } from "../components/Contact/Contact";
import { BackToTop } from "../components/BackToTop/BackToTop";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "../lib/site";
import skills from "../data/skills.json";
import contacts from "../data/contacts.json";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/assets/hero/heroImage.png`,
  jobTitle: "Full Stack Developer",
  description: SITE_DESCRIPTION,
  knowsAbout: skills.map((skill) => skill.title),
  sameAs: contacts
    .filter((contact) => contact.link.startsWith("http"))
    .map((contact) => contact.link),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </div>
      <BackToTop />
    </>
  );
}
