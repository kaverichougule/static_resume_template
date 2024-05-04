import { icons } from "../../data/data2";
import styles from "./css_style.module.css"
export default function DisplayIconBottom() {
  return (
    <div className={styles.DisplayIcons}>
        {
            icons.map((item, index) => {
                return <div className={styles.CompleteIcon} key={index}>
                    <div className={styles.iconBox}>
                        <i className={styles.icon}>{item.icon}</i>
                    </div>
                    <p>{item.name}</p>
                </div>
            })
        }
    </div>
  );
}
