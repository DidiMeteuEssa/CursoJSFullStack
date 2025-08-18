import styles from "./Profile/styles.module.css"

export default function Name({ name }) {
    return <h1 className={styles.name}>{name}</h1>
}
