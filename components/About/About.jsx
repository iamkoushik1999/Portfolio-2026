import Image from "next/image";

import styles from "./About.module.css";
import { getImageUrl } from "../../lib/utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div data-aos="fade-up">
        <p className={styles.eyebrow}>About Me</p>
        <h2 className={styles.title}>What I bring to the table</h2>
        <div className={styles.content}>
          <div className={styles.imageWrap}>
            <Image
              className={styles.aboutImage}
              src={getImageUrl("about/aboutImage.png")}
              alt="Illustration of Koushik using a laptop"
              fill
              sizes="(max-width: 480px) 80vw, (max-width: 830px) 60vw, 32vw"
            />
          </div>
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <Image
                src={getImageUrl("about/serverIcon.png")}
                alt=""
                width={56}
                height={56}
              />
              <div>
                <h3>Backend Developer</h3>
                <p>
                  I design and build fast, reliable APIs and backend systems
                  with Node, Express and MongoDB, taking projects from schema
                  design through to production deployment.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <Image
                src={getImageUrl("about/cursorIcon.png")}
                alt=""
                width={56}
                height={56}
              />
              <div>
                <h3>React Contributor</h3>
                <p>
                  Alongside backend work, I contribute to frontend features in
                  React, keeping components clean, accessible and easy to
                  maintain.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
