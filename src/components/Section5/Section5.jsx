import styles from "./css_style.module.css";

export default function Section5() {
  return (
    <div className={styles.Section5}>
      <div className={styles.subSec}>
        <p className={styles.SkillTitle}>Zapier</p>
        <p>Organize Your life with the Agile Method</p>
      </div>

      <div className={styles.subSec}>
        <p className={styles.SkillTitle}>Spoke</p>
        <p>Is 40 hours a week too much? Here what history and science say.</p>
      </div>

      <div className={styles.subSec}>
        <p className={styles.SkillTitle}>nDash</p>
        <p>Why Generalist Writers Lead to Lost Profile in B2B Tech</p>
      </div>
    </div>
  );
}
