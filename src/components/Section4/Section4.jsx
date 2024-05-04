import styles from "./css_style.module.css";

export default function Section4(){
    return(
        <div className={styles.Section4}>
            <div className={styles.subSec}>
                <p className={styles.SkillTitle}>Writing</p>
                <div className={styles.level}>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                </div>
            </div>

            <div className={styles.subSec}>
                <p className={styles.SkillTitle}>Editing</p>
                <div className={styles.level}>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                </div>
            </div>

            <div className={styles.subSec}>
                <p className={styles.SkillTitle}>Social Media</p>
                <div className={styles.level}>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                </div>
            </div>

            <div className={styles.subSec}>
                <p className={styles.SkillTitle}>Researching</p>
                <div className={styles.level}>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                </div>
            </div>

            <div className={styles.subSec}>
                <p className={styles.SkillTitle}>SEO</p>
                <div className={styles.level}>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                    <div className={styles.circles}></div>
                </div>
            </div>
        </div>
    )
}