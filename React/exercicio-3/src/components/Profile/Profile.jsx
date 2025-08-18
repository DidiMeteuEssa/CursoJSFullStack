import Picture from "../Picture"
import Name from "../Name"
import Field from "../Field"
import Button from "../Button"
import styles from "./styles.module.css"


export default function Profile() {
    return (
        <div className={styles.container}>
            <Picture imageSrc={"/avatar.jpg"} imageAlt={"Isa e Diego"} />
            <Name name={"Diego"} />
            <Field text={"Web Fullstack Developer"} />
            <Field text={"(18) 99722-5754"} />
            <Field text={"diegolppe@gmail.com"} />
            <Button url={"Linkedin"} />
            <Button url={"Github"} />
            <Button url={"Twitter"} />
        </div>
    )
}