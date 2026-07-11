import styles from "./Hero.module.css";
import { getImageUrl } from "../../lib/utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      <div className={styles.content} data-aos="fade-right">
        <span className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for new opportunities
        </span>
        <h1 className={styles.title}>
          Hi, I&apos;m Koushik
          <span className={styles.titleAccent}>Full Stack Developer</span>
        </h1>
        <p className={styles.description}>
          I build fast, reliable web apps with React, Node, Express and MongoDB.
          Currently sharpening backend systems and API design in production.
          Reach out if you&apos;d like to work together!
        </p>
        <div className={styles.actions}>
          <a
            href="mailto:iamkoushik1999@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <a href="#projects" className={styles.secondaryBtn}>
            View Work
          </a>
        </div>
      </div>

      <div
        className={styles.imageWrap}
        data-aos="fade-left"
        data-aos-delay="150"
      >
        <div className={styles.imageGlow} />
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Illustration of Koushik working on a laptop"
          className={styles.heroImg}
        />
      </div>

      <a
        href="#about"
        className={styles.scrollCue}
        aria-label="Scroll to About section"
      >
        <span />
      </a>
    </section>
  );
};
