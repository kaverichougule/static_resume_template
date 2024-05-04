import styles from "./css_style.module.css";

export default function Section3(){
    return(
        <div className={styles.Section3}>
            <div className={styles.subSec1}>
                <p className={styles.Years}>Present</p>
                <div className={styles.expInfo}>
                    <p>Jessica Green Marketing | Freelance Writer</p>
                    <p>Create blog posts, landing pages, e-books, and case studies for client</p>
                </div>
            </div>
            <div className={styles.subSec1}>
                <p className={styles.Years}>2016</p>
                <div className={styles.expInfo}>
                    <p>Kaiser Permanente | Lead Agile Product Owner</p>
                    <p>Create and socialized best practices for Agile software development</p>
                </div>
            </div>
            <div className={styles.subSec1}>
                <p className={styles.Years}>2013-2015</p>
                <div>
                    <p>Humana | Agile Product Owner</p>
                    <p>Oversaw the implementation of six major web development projects</p>
                </div>
            </div>
            
        </div>
    )
}