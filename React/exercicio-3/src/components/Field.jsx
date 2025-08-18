import styles from "./Profile/styles.module.css"

export default function Field({ text }) {
    return <p className={styles.textField}>{text}</p>

}