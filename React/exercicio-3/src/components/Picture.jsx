import styles from "./Profile/styles.module.css"

export default function Picture({ imageSrc, imageAlt }) {
    return <img className={styles.picture} src={imageSrc} alt={imageAlt} />
}