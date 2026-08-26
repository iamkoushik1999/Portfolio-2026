import Image from "next/image";

import styles from "./Contact.module.css";
// Data
import contacts from "../../data/contacts.json";
import { getImageUrl } from "../../lib/utils";
import { CurrentYear } from "../CurrentYear";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.inner} data-aos="fade-up">
        <div className={styles.text}>
          <p className={styles.eyebrow}>Get in touch</p>
          <h2>Let&apos;s build something great</h2>
          <p className={styles.subtitle}>
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </div>

        <ul className={styles.links}>
          {contacts.map((contact, id) => {
            return (
              <li key={id} className={styles.link}>
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkCard}
                >
                  <Image
                    src={getImageUrl(contact.imageSrc)}
                    alt=""
                    className={styles.linkIcon}
                    width={48}
                    height={48}
                  />
                  <span>{contact.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className={styles.copyright}>
        © <CurrentYear /> Koushik Dutta. Built with Next.js.
      </p>
    </footer>
  );
};
