import styles from './Projects.module.css';
// Data
import projects from '../../data/projects.json';
// Project Card
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
      <div data-aos='fade-up'>
        <p className={styles.eyebrow}>Portfolio</p>
        <h2 className={styles.title}>Personal Projects</h2>
        <div className={styles.projects}>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} index={id} />;
          })}
        </div>
        <p className={styles.hostingNote}>
          Demos are hosted on Render&apos;s free tier — the backend may take
          60-90s to spin up on first load.
        </p>
      </div>
    </section>
  );
};
