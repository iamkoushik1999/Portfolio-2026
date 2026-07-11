import styles from './Certifications.module.css';
// Data
import certifications from '../../data/certifications.json';

export const Certifications = () => {
  return (
    <section className={styles.container} id='certifications'>
      <div data-aos='fade-up'>
        <p className={styles.eyebrow}>Credentials</p>
        <h2 className={styles.title}>Certifications</h2>
        <ul className={styles.certifications}>
          {certifications.map((certification, id) => {
            return (
              <li
                className={styles.certification}
                key={id}
                data-aos='fade-up'
                data-aos-delay={id * 100}>
                <div>
                  <h3>{certification.title}</h3>
                  <p>{certification.issuer}</p>
                </div>
                <a
                  href={certification.link}
                  className={styles.link}
                  target='_blank'
                  rel='noreferrer'>
                  View Certificate
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
