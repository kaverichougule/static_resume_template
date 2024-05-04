import DisplayIconBottom from "../DisplayIconBottom/DisplayIconBottom";
import DisplayIconLeft from "../DisplayIconLeft/DisplayIconLeft";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";
import Section5 from "../Section5/Section5";
import styles from "./css_style.module.css";
export default function Main() {
  return (
    <div className={styles.MainSection}>
        <div className={styles.leftSide}>
            <DisplayIconLeft />
        </div>

      <div className={styles.rightSide}>
        <section className={styles.Part1}>
          <Section1 />
          <Section2 />
        </section>

        <section className={styles.Part3}>
            <Section3 />
        </section>

        <section className={styles.Part2}>
            <Section4 />
            <Section5 />
        </section>

        <section>
            <DisplayIconBottom />
        </section>
      </div>
    </div>
  );
}
