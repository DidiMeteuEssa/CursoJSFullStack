import styles from "./Profile/styles.module.css"

export default function Button({ url }) {
    return <button className={styles.button}>{url}</button>
}