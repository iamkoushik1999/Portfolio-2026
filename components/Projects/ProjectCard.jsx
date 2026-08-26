import Image from "next/image";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../lib/utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
  index = 0,
}) => {
  return (
    <div
      className={styles.container}
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
    >
      <div className={styles.imageWrap}>
        <Image
          className={styles.image}
          src={getImageUrl(imageSrc)}
          alt={`Screenshot of ${title}`}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li className={styles.skill} key={id}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          <a
            href={demo}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
          <a
            href={source}
            className={styles.linkOutline}
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};
