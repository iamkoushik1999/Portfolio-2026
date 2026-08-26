import Image from "next/image";

import styles from "./Experience.module.css";
// Data
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../lib/utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div data-aos="fade-up">
        <p className={styles.eyebrow}>Experience</p>
        <h2 className={styles.title}>Skills &amp; Work History</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div
                  className={styles.skill}
                  key={id}
                  data-aos="zoom-in"
                  data-aos-delay={(id % 4) * 80}
                >
                  <div>
                    <Image
                      className={styles.skillImageContainer}
                      src={getImageUrl(skill.imageSrc)}
                      alt={skill.title}
                      width={48}
                      height={48}
                    />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
          <ul className={styles.history}>
            {history.map((historyItem, id) => {
              return (
                <li
                  className={styles.historyItem}
                  key={id}
                  data-aos="fade-up"
                  data-aos-delay={id * 100}
                >
                  <Image
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                    width={50}
                    height={37}
                  />
                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
